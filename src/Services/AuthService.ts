import { Auth } from 'aws-amplify';

type SignUpParams = {
  username: string;
  password: string;
  email?: string;
  phoneNumber?: string;
  validationData?: any[];
};

type ConfirmSignUpParams = {
  username: string;
  code: string;
};

export const signUp = ({
  username,
  password,
  email, // optional
  // phoneNumber, // optional - E.164 number convention
  // other custom attributes
  validationData = [] // optional
}: SignUpParams) =>
  Auth.signUp({
    username,
    password,
    attributes: {
      email // optional
      // phone_number: phoneNumber // optional - E.164 number convention
      // other custom attributes
    },
    validationData
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

export const confirmSignUp = ({ username, code }: ConfirmSignUpParams) =>
  // After retrieving the confirmation code from the user
  Auth.confirmSignUp(username, code, {
    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    forceAliasCreation: true
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

export const resendSignUp = (username: string) => {
  Auth.resendSignUp(username)
    .then(() => {
      console.log('code resent successfully');
    })
    .catch((e) => {
      console.log(e);
    });
};

type SignInParams = {
  username: string;
  password: string;
  newPassword?: string;
  mfaType?: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA';
};

export const signIn = ({
  username,
  password,
  newPassword = '',
  mfaType
}: SignInParams) => Auth.signIn(username, password);

export const signOut = () =>
  Auth.signOut()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
// which means the user is signed out from all the devices
// Note: although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)
export const signOutGlobal = () => {
  Auth.signOut({ global: true })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const changePassword = () =>
  Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, 'oldPassword', 'newPassword');
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

export const forgotPassword = (username: string) =>
  Auth.forgotPassword(username)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// Collect confirmation code and new password, then
export const forgotPasswordSubmit = (
  username: string,
  code: string,
  newPassword: string
) =>
  Auth.forgotPasswordSubmit(username, code, newPassword)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
