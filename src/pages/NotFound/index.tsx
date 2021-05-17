import React from 'react';
import { useNavigate } from 'react-router';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Main } from './styles';

export const NotFound = (): JSX.Element => {
  const navigate = useNavigate();

  function handleBackToSearch() {
    navigate('/');
  }

  return (
    <>
      <Header />

      <Main>
        <h2>Parece que não temos nada por aqui...</h2>
        <button type="button" onClick={handleBackToSearch}>
          Busque um usuário
        </button>
      </Main>

      <Footer />
    </>
  );
};
