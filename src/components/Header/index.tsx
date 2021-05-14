import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

export const Header = (): JSX.Element => (
  <Container>
    <img src={logoImg} alt="Github Explorer" />
  </Container>
);
