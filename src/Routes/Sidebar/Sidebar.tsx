import { CSSObject } from '@emotion/react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FlexView, Text } from 'Components';

type Menu = {
  title: string;
  url: string;
};

const selected: CSSObject = {
  padding: '0 20px',
  fontSize: '18px'
};

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState('접수');

  const menus = [
    { title: '접수', url: '/' },
    { title: '진료', url: '/123' },
    { title: '채취', url: '/456' },
    { title: '검사', url: '/789' }
  ];

  return (
    <FlexView
      css={{
        width: '200px',
        padding: '10px 0',
        borderRight: '1px solid lightgray'
      }}
    >
      {menus.map((menu: Menu) => (
        <NavLink css={selected} to={menu.url}>
          <FlexView css={{ height: '40px' }} items="center" row>
            <Text>{menu.title}12113</Text>
          </FlexView>
        </NavLink>
      ))}
    </FlexView>
  );
};

export default Sidebar;
