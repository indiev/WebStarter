import React from 'react';
import Div from 'Views/Components/Div';
import Image from 'Views/Components/Image';
import P from 'Views/Components/Text/Paragraph';
import logo from 'logo.svg';
import 'Styles/App.scss';

const Main: React.FC = () => (
  <Div className="App">
    <Div className="App-header">
      <Image src={logo} className="App-logo" alt="logo" />
      <P>Main</P>
    </Div>
  </Div>
);

export default Main;
