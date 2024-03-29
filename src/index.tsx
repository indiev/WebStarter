import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from 'App';
import reportWebVitals from 'reportWebVitals';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';

import 'Translations';
import 'Styles/index.scss';

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
const appElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(appElement, rootElement);
} else {
  ReactDOM.render(appElement, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
