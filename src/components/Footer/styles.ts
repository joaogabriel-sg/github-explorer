import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  max-width: 1180px;

  padding: 3rem 1rem 1.25rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--gray-400);

  p {
    font-size: 1.125rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;
