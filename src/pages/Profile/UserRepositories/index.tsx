import React from 'react';
import { IoChevronForward } from 'react-icons/io5';

import { useGithubUser } from '../../../hooks/useGithubUser';
import { langColors } from '../../../services/langColors';

import { Container, Repository } from './styles';

export const UserRepositories = (): JSX.Element => {
  const { user, repositories, activeLanguage } = useGithubUser();

  return (
    <Container>
      {repositories.length !== 0 && (
        <>
          {repositories
            .filter((repository) =>
              activeLanguage
                ? activeLanguage === repository.language
                : repository,
            )
            .map((repository) => (
              <Repository
                key={repository.id}
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                langColor={langColors[repository.language?.toLowerCase()]}
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
