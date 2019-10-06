import React from 'react';
import Div from 'Views/Components/Div';
import Anchor from 'Views/Components/Anchor';
import Image from 'Views/Components/Image';
import P from 'Views/Components/Text/Paragraph';
import Code from 'Views/Components/Text/Code';
import logo from 'logo.svg';
import 'App.scss';

export const Main: React.FC = () => (
  <Div className="App">
    <Div className="App-header">
      <Image src={logo} className="App-logo" alt="logo" />
      <P>
        Edit <Code>src/App.tsx</Code> and save to reload.
      </P>
      <Anchor
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Anchor>
    </Div>
  </Div>
);
