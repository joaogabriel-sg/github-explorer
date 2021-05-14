import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 1180px;
  min-height: 85vh;

  padding: 0 1rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 6rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;
