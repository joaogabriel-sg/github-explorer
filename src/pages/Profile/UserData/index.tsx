import React from 'react';
import { IoLink, IoLocation, IoPeople } from 'react-icons/io5';
import { useGithubUser } from '../../../hooks/useGithubUser';
import { Langs } from './Langs';

import { Container } from './styles';

export const UserData = (): JSX.Element => {
  const { user } = useGithubUser();

  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />

      <h2>{user.name}</h2>
      <h3>{user.login}</h3>
      {user.bio && <p>{user.bio}</p>}

      <div>
        <IoPeople />
        <span>
          {user.followers} seguidores · {user.following} seguindo
        </span>
      </div>

      {user.location && (
        <div>
          <IoLocation />
          <span>{user.location}</span>
        </div>
      )}

      {user.blog && (
        <div>
          <IoLink />
          <a href={user.blog} target="_blank" rel="noreferrer">
            {user.blog.length <= 30
              ? user.blog
              : `${user.blog.slice(0, 30)}...`}
          </a>
        </div>
      )}

      <Langs />
    </Container>
  );
};
