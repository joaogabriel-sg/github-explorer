import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

interface HeaderProps {
  haveBackButton?: boolean;
}

export const Header = ({ haveBackButton }: HeaderProps): JSX.Element => (
  <Container>
    <img src={logoImg} alt="Github Explorer" />

    {haveBackButton && (
      <button type="button">
        <IoChevronBack />
        <span>Voltar</span>
      </button>
    )}
  </Container>
);
