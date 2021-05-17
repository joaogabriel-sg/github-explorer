import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1180px;
  min-height: 80vh;

  padding: 0 1%;
  margin: 0 auto;

  h2 {
    max-width: 620px;
    margin-bottom: 3rem;
    font-size: 3.2rem;
  }

  button {
    background: var(--purple);

    padding: 1rem;
    border: none;
    border-radius: 8px;

    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray-000);

    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
