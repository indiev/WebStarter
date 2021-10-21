import { useMemo, useState } from 'react';

import { createContext } from 'Utils/createContext';

type Props = {
  children: React.ReactNode;
};

type Context = {
  themeType: 'LIGHT' | 'DARK';
  setThemeType: (type: 'LIGHT' | 'DARK') => void;
};

const [useContext, Provider] = createContext<Context>();

const ThemeProvider = (props: Props): React.ReactElement => {
  const { children } = props;

  const [themeType, setThemeType] = useState<'LIGHT' | 'DARK'>('LIGHT');
  // const [theme, setTheme] = useState<NavigationTheme>(changeTheme(themeType));

  const context = useMemo(
    () => ({
      themeType,
      setThemeType
    }),
    [themeType]
  );

  return <Provider value={context}>{children}</Provider>;
};

export { useContext as useThemeContext, ThemeProvider };
