import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { useGithubUser } from '../../../hooks/useGithubUser';

import { Container, Profile } from './styles';

export const LatestSearchProfiles = (): JSX.Element => {
  const { latestUsers, getUserData } = useGithubUser();

  function handleGetProfile(username: string) {
    getUserData(username);
  }

  return (
    <Container>
      {latestUsers &&
        latestUsers.map((latestUser) => (
          <Profile
            key={latestUser.id}
            type="button"
            onClick={() => handleGetProfile(latestUser.login)}
          >
            <img src={latestUser.avatar_url} alt={latestUser.name} />

            <div>
              <h3>{latestUser.name}</h3>
              {latestUser.bio && <p>{latestUser.bio}</p>}
            </div>

            <IoChevronForward />
          </Profile>
        ))}
    </Container>
  );
};
