import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const Profile = styled.a`
  background: var(--gray-000);
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 2rem;
  border-radius: 8px;

  img {
    width: 6rem;
    max-width: 100%;

    border-radius: 50%;
    object-fit: cover;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: var(--gray-400);
  }

  button {
    background: none;
    border: none;

    svg {
      width: 2rem;
      height: 2rem;
      stroke: var(--gray-400);
    }
  }
`;
