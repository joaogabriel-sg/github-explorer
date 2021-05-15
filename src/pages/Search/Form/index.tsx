import React, { FormEvent, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useGithubUser } from '../../../hooks/useGithubUser';

import { Container } from './styles';

export const Form = (): JSX.Element => {
  const { loading } = useGithubUser();
  const { getUserData } = useGithubUser();
  const [username, setUsername] = useState('');

  function handleSubmitUsernameForm(e: FormEvent) {
    e.preventDefault();

    if (username) {
      getUserData(username);
      setUsername('');
    }
  }

  return (
    <Container onSubmit={handleSubmitUsernameForm}>
      <h2>Explore usuários no Github.</h2>

      <div>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Pesquise aqui..."
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <button type="submit" disabled={loading}>
          <IoSearch />
        </button>
      </div>
    </Container>
  );
};
