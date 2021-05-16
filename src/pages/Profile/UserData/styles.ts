import styled from 'styled-components';

export const Container = styled.aside`
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-x: hidden;
    text-align: center;
  }

  img {
    max-width: 13rem;
    object-fit: cover;

    border-radius: 50%;
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 2.25rem;
  }

  h3 {
    font-style: italic;
    font-weight: 400;
    color: var(--gray-600);
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.125rem;
    color: var(--gray-500);

    @media (max-width: 860px) {
      max-width: 400px;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: var(--gray-600);

    &:nth-of-type(1) {
      margin: 3rem 0;
    }

    &:not(:nth-of-type(1)) + div {
      margin-top: 0.25rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    @media (max-width: 520px) {
      flex-direction: column;
      gap: 0;

      &:not(:nth-of-type(1)) + div {
        margin-top: 0.75rem;
      }
    }
  }
`;
