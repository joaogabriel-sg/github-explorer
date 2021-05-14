import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a:last-child {
    align-self: flex-end;
    font-size: 1.25rem;
    font-style: italic;
    color: var(--gray-600);
  }
`;

export const Repository = styled.a`
  background: var(--gray-000);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  border-right: 8px solid var(--yellow);
  border-radius: 8px;

  div {
    max-width: 500px;

    h4 {
      margin-bottom: 1rem;
      font-family: var(--font-2);
      font-weight: 500;
      font-size: 1.25rem;
      color: var(--gray-600);
    }

    p {
      font-size: 1rem;
      color: var(--gray-500);
    }

    span {
      display: block;
      margin-top: 1rem;
      font-family: var(--font-2);
      font-weight: 600;
      font-size: 1.125rem;
      color: var(--yellow);
    }
  }

  svg {
    width: 2.25rem;
    height: 2.25rem;
    color: var(--yellow);
  }
`;
