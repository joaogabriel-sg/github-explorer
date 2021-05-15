import React from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

interface HeaderProps {
  haveBackButton?: boolean;
}

export const Header = ({ haveBackButton }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate('/');
  }

  return (
    <Container>
      <img src={logoImg} alt="Github Explorer" />

      {haveBackButton && (
        <button type="button" onClick={handleGoBack}>
          <IoChevronBack />
          <span>Voltar</span>
        </button>
      )}
    </Container>
  );
};
