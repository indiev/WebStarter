import React from 'react';

import { AuthProvider, PortalProvider, ThemeProvider, UIProvider } from '.';

type Props = {
  children: React.ReactNode;
};

export const RootProvider = (props: Props): React.ReactElement => {
  const { children } = props;

  return (
    <ThemeProvider>
      <UIProvider>
        <AuthProvider>
          <PortalProvider>{children}</PortalProvider>
        </AuthProvider>
      </UIProvider>
    </ThemeProvider>
  );
};
