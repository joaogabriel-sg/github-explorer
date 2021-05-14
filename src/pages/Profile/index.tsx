import React from 'react';

import { Header } from '../../components/Header';
import { UserData } from './UserData';
import { Footer } from '../../components/Footer';

import { Main } from './styles';
import { UserRepositories } from './UserRepositories';

export const Profile = (): JSX.Element => (
  <>
    <Header haveBackButton />

    <Main>
      <UserData />
      <UserRepositories />
    </Main>

    <Footer />
  </>
);
