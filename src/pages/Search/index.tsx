import React from 'react';

import { Header } from '../../components/Header';
import { Form } from './Form';
import { LatestSearchProfiles } from './LatestSearchProfiles';
import { Footer } from '../../components/Footer';

import { Main } from './styles';

export const Search = (): JSX.Element => (
  <>
    <Header />

    <Main>
      <Form />
      <LatestSearchProfiles />
    </Main>

    <Footer />
  </>
);
