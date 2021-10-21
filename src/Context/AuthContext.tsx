import { useEffect, useMemo, useState } from 'react';

import User from 'Models/User';
import { createContext } from 'Utils/createContext';

type Props = {
  children: React.ReactNode;
};

type Context = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const [useContext, Provider] = createContext<Context>();

const AuthProvider = (props: Props): React.ReactElement => {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // get user cash - useEffect
  });

  const context = useMemo(() => ({ user, setUser }), [user]);

  return <Provider value={context}>{children}</Provider>;
};

export { useContext as useAuthContext, AuthProvider };
