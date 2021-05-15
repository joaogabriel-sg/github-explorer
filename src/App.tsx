import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GithubUserProvider } from './hooks/useGithubUser';

import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global';

const App = (): JSX.Element => (
  <BrowserRouter>
    <GithubUserProvider>
      <AppRoutes />
      <GlobalStyle />
    </GithubUserProvider>
  </BrowserRouter>
);

export default App;
