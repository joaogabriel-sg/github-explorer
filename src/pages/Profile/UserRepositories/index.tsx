import React from 'react';
import { IoChevronForward } from 'react-icons/io5';

import { useGithubUser } from '../../../hooks/useGithubUser';

import { Container, Repository } from './styles';

export const UserRepositories = (): JSX.Element => {
  const { user, repositories } = useGithubUser();

  return (
    <Container>
      {repositories.length !== 0 && (
        <>
          {repositories.map((repository) => (
            <Repository
              key={repository.id}
              href={repository.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h4>{repository.name}</h4>
                {repository.description && <p>{repository.description}</p>}
                {repository.language && <span>{repository.language}</span>}
              </div>
              <IoChevronForward />
            </Repository>
          ))}

          <a
            href={`https://github.com/${user.login}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            Ver todos
          </a>
        </>
      )}
    </Container>
  );
};
