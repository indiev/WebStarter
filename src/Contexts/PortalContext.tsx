import { memo, useMemo, useState } from 'react';

import View from 'Components/View/View';
import { createContext } from 'Utils/createContext';

type Props = {
  children: React.ReactNode;
};

type Context = {
  addPortal: (children?: React.ReactNode) => number;
  removePortal: (key: number) => void;
};

type PortalType = {
  key?: number;
  children?: React.ReactNode;
};

const [useContext, Provider] = createContext<Context>();

let key = 0;

const PortalProvider = memo((props: Props): React.ReactElement => {
  const { children: propsChildren } = props;

  const [portals, setPortals] = useState<PortalType[]>([]);

  const addPortal = (value: React.ReactNode) => {
    setPortals((item) => [...item, { key, value }]);
    key += 1;
    return key;
  };

  const removePortal = (value: number) => {
    setPortals((item) => item.filter((v) => v.key !== value));
  };

  const context = useMemo(
    () => ({
      addPortal,
      removePortal
    }),
    []
  );

  return (
    <Provider value={context}>
      {propsChildren}
      {portals.map(({ key: portalKey, children: portal }) => (
        <View
          key={portalKey}
          css={{
            pointerEvents: 'none',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}
        >
          {portal}
        </View>
      ))}
    </Provider>
  );
});

export { useContext as usePortalContext, PortalProvider };
