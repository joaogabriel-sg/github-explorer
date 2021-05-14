import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1180px;

  padding: 2.5rem 1rem 8rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.125rem;
    color: var(--gray-400);

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  @media (max-width: 860px) {
    padding: 2.5rem 1rem 6rem;
  }

  @media (max-width: 520px) {
    img {
      max-width: 13rem;
    }

    button {
      gap: 0.125rem;
      font-size: 1rem;
    }
  }
`;
