import React from 'react';
import { RouteProps } from 'react-router';
import { Navigate, Route } from 'react-router-dom';

import { useGithubUser } from '../../hooks/useGithubUser';

export const ProtectedRoute = ({ path, element }: RouteProps): JSX.Element => {
  const { user } = useGithubUser();

  if (user.login) return <Route path={path} element={element} />;
  return <Navigate to="/" />;
};
