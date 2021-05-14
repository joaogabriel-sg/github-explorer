import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global';

const App = (): JSX.Element => (
  <BrowserRouter>
    <AppRoutes />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
