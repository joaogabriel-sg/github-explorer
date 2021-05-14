import React from 'react';
import { IoSearch } from 'react-icons/io5';

import { Container } from './styles';

export const Form = (): JSX.Element => (
  <Container>
    <h2>Explore usuários no Github.</h2>

    <div>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Pesquise aqui..."
      />
      <button type="submit">
        <IoSearch />
      </button>
    </div>
  </Container>
);
