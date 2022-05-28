import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './globalStyle';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
