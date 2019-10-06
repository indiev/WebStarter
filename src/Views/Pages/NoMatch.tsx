import React from 'react';
import Div from 'Views/Components/Div';
import P from 'Views/Components/Text/Paragraph';
import 'Styles/App.scss';

const NoMatch: React.FC = () => (
  <Div className="App">
    <Div className="App-header">
      <P>Not Found Page</P>
    </Div>
  </Div>
);

export default NoMatch;
