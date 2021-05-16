import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Search } from '../pages/Search';
import { Profile } from '../pages/Profile';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Search />} />
    <ProtectedRoute path="profile/:username" element={<Profile />} />
  </Routes>
);
