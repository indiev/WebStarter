import Emotoin from '@emotion/react';
import { AppBar, Box, Button, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Icon } from 'Components/Icon';
import { Link, NavLink } from 'Components/Link';
import { Text } from 'Components/Text';
import { FlexView } from 'Components/View';
import { Colors } from 'Styles/Theme';

const css: Emotoin.CSSObject = {
  // position: 'fixed',
  width: '100%',
  height: '3rem',
  padding: '0 1rem',
  // backgroundColor: 'var(--gray-dark)',
  top: 0
};

const Logo = () => {
  const [t] = useTranslation('header');

  return (
    <Link to="/">
      <Icon
        color={Colors.white}
        css={{ marginRight: 70, height: 12 }}
        name="logo"
      />
    </Link>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Navbar = () => {
  const [t] = useTranslation('header');
  const history = useHistory();
  const { pathname } = history.location;
  const [selectedTab, setSelectedTab] = useState(
    // eslint-disable-next-line no-nested-ternary
    pathname === '/vaccine' ? 1 : pathname === '/antibody' ? 3 : 0
  );

  const handleChangeTab = (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setSelectedTab(value);
    if (value === 1) {
      history.push(`/vaccine`);
    } else if (value === 3) {
      history.push(`/antibody`);
    } else {
      history.push(`/`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.white' }}>
      <AppBar color="inherit" position="static">
        <FlexView content="between" css={css} items="center" row>
          <Logo />
          <Tabs
            aria-label="basic tabs example"
            // indicatorColor={undefined}
            sx={{ flex: 1 }}
            value={selectedTab}
            onChange={handleChangeTab}
          >
            <Tab label="홈" {...a11yProps(0)} />
            <Tab label="백신 접종자" {...a11yProps(1)} />
            <Tab label="PCR 검사자" {...a11yProps(2)} />
            <Tab label="항체 보유자" {...a11yProps(3)} />
            <Tab label="완치자" {...a11yProps(4)} />
          </Tabs>
          <FlexView items="center" row>
            <Text style={{ marginRight: 20 }}>일신산업(주)</Text>
            <Button sx={{ borderRadius: 10 }} variant="outlined">
              로그아웃
            </Button>
          </FlexView>
        </FlexView>
      </AppBar>
    </Box>
  );
};

export default () => (
  <Switch>
    <Route component={Navbar} />
  </Switch>
);
