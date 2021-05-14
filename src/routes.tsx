import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Search } from './pages/Search';
import { Profile } from './pages/Profile';

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Search />} />
    <Route path="profile/:username" element={<Profile />} />
  </Routes>
);
