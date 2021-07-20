import { Auth, Logger } from 'aws-amplify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthService } from 'Services';

export enum AuthState {
  SignUp = 'signUp',
  SignOut = 'signOut',
  SignIn = 'signIn',
  Loading = 'loading',
  SignedOut = 'signedOut',
  SignedIn = 'signedIn',
  SigningUp = 'signingUp',
  ConfirmSignUp = 'confirmSignUp',
  confirmingSignUpCustomFlow = 'confirmSignUpCustomFlow',
  ConfirmSignIn = 'confirmSignIn',
  confirmingSignInCustomFlow = 'confirmingSignInCustomFlow',
  VerifyingAttributes = 'verifyingAttributes',
  ForgotPassword = 'forgotPassword',
  ResetPassword = 'resettingPassword',
  SettingMFA = 'settingMFA',
  TOTPSetup = 'TOTPSetup',
  CustomConfirmSignIn = 'customConfirmSignIn',
  VerifyContact = 'verifyContact',
  RequireNewPassword = 'requireNewPassword'
}

type CognitoUserInterface = {
  Session?: string | null;
  authenticationFlowType?: string;
  client?: {
    endpoint?: string;
    userAgent?: string;
  };
  keyPrefix?: string;
  pool?: {
    advancedSecurityDataCollectionFlag?: boolean;
    clientId?: string;
    userPoolId?: string;
  };
  username?: string;
  userConfirmed?: boolean;
  userSub?: string;
  challengeName: string;
  challengeParam: { [key: string]: any };
  unverified?: {
    email?: string;
    phone_number?: string;
  };
  [attributes: string]: any;
};

type AuthContext = {
  authData: CognitoUserInterface | null;
  authState: AuthState;
  setAuthState: (authState: AuthState) => void;
  signUp: (...params: any) => void;
  signIn: (...params: any) => void;
  signOut: (...params: any) => void;
  confirmSignUp: (code: string) => void;
};

const logger = new Logger('Authenticator');

export const AuthContext = createContext({} as AuthContext);
export const useAuthContext = () => useContext(AuthContext);

type ProviderProps = {
  children: React.ReactNode;
};

const NO_AUTH_MODULE_FOUND = 'No auth module found';
const AUTHENTICATOR_AUTHSTATE = 'Authenticator authstate';

const isEmpty = (obj = {}) => Object.keys(obj).length === 0;

export const AuthProvider = ({ children }: ProviderProps) => {
  const initialAuthState: AuthState.SignIn | AuthState.SignUp =
    AuthState.SignIn;
  const [authData, setAuthData] = useState<CognitoUserInterface | null>(null);
  const [authState, setAuthState] = useState(AuthState.Loading);
  const history = useHistory();

  const onAuthStateChange = (
    nextAuthState: AuthState,
    data?: CognitoUserInterface
  ) => {
    if (nextAuthState === undefined)
      return logger.info('nextAuthState cannot be undefined');

    logger.info(
      'Inside onAuthStateChange Method current authState:',
      authState
    );
    if (nextAuthState === AuthState.SignedOut) {
      setAuthState(initialAuthState);
    } else {
      setAuthState(nextAuthState);
    }

    if (data !== undefined) {
      setAuthData(data);
      logger.log('Auth Data was set:', authData);
    }
    logger.info(`authState has been updated to ${authState}`);
  };

  const checkUser = async () => {
    if (!Auth || typeof Auth.currentAuthenticatedUser !== 'function') {
      throw new Error(NO_AUTH_MODULE_FOUND);
    }

    try {
      const user = await Auth.currentAuthenticatedUser();
      onAuthStateChange(AuthState.SignedIn, user);
    } catch {
      let cachedAuthState = null;
      try {
        cachedAuthState = localStorage.getItem(AUTHENTICATOR_AUTHSTATE);
      } catch (error) {
        logger.debug('Failed to get the auth state from local storage', error);
      }
      try {
        if (cachedAuthState === AuthState.SignedIn) {
          await Auth.signOut();
        }
        onAuthStateChange(initialAuthState);
      } catch (error) {
        logger.debug('Failed to sign out', error);
      }
    }
  };

  const signUp = async (...params: Parameters<typeof AuthService.signUp>) => {
    const [data] = params;
    setAuthState(AuthState.SigningUp);
    await AuthService.signUp(data);
    setAuthState(AuthState.ConfirmSignUp);
  };

  const signIn = async (...params: Parameters<typeof AuthService.signIn>) => {
    const [data] = params;
    try {
      let user = await AuthService.signIn(data);
      if (
        user.challengeName === 'SMS_MFA' ||
        user.challengeName === 'SOFTWARE_TOKEN_MFA'
      ) {
        // You need to get the code from the UI inputs
        // and then trigger the following function with a button click
        // const code = getCodeFromUserInput();
        // // If MFA is enabled, sign-in should be confirmed with the confirmation code
        // const loggedUser = await Auth.confirmSignIn(
        //   user, // Return object from Auth.signIn()
        //   code, // Confirmation code
        //   mfaType // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
        // );
        setAuthState(AuthState.ConfirmSignIn);
      } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        logger.debug('require new password', user.challengeParam);
        // this.changeState('requireNewPassword', user);
        setAuthState(AuthState.RequireNewPassword);
      } else if (user.challengeName === 'MFA_SETUP') {
        // This happens when the MFA method is TOTP
        // The user needs to setup the TOTP before using it
        // More info please check the Enabling MFA part
        logger.debug('TOTP setup', user.challengeParam);
        // Auth.setupTOTP(user);
        setAuthState(AuthState.TOTPSetup);
      } else if (
        user.challengeName === 'CUSTOM_CHALLENGE' &&
        user.challengeParam &&
        user.challengeParam.trigger === 'true'
      ) {
        logger.debug('custom challenge', user.challengeParam);
        // this.changeState('customConfirmSignIn', user);
        setAuthState(AuthState.CustomConfirmSignIn);
      } else {
        // The user directly signs in
        const verifiedUser = await Auth.verifiedContact(user);
        if (!isEmpty(verifiedUser.verified)) {
          setAuthState(AuthState.SignedIn);
          setAuthData(user);
          // this.changeState('signedIn', user);
        } else {
          user = Object.assign(user, verifiedUser);
          setAuthState(AuthState.VerifyContact);
          setAuthData(user);
          // this.changeState('verifyContact', user);
        }
        history.push('/');
        // checkContact(user);
      }
    } catch (e) {
      if (e.code === 'UserNotConfirmedException') {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
        setAuthState(AuthState.ConfirmSignUp);
      } else if (e.code === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
        setAuthState(AuthState.ForgotPassword);
      } else if (e.code === 'NotAuthorizedException') {
        // The error happens when the incorrect password is provided
      } else if (e.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
        logger.error(e);
      }
      throw e;
    } finally {
      //
    }
  };

  const signOut = async () => {
    await AuthService.signOut();
    setAuthData(null);
    history.push('/');
  };

  const confirmSignUp = async (code: string) => {
    if (!authData || !authData.username) {
      return null;
    }
    const { username } = authData;
    await AuthService.confirmSignUp({ username, code });
    history.push('/');
  };

  useEffect(() => {
    checkUser();
  }, []);

  const data = { authData, authState };
  const actions = { signUp, signIn, signOut, confirmSignUp, setAuthState };

  const value = { ...data, ...actions };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
