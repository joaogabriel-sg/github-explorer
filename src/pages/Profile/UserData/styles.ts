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

export const Languages = styled.section`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 860px) {
    width: 100%;
    padding-bottom: 0.5rem;
    overflow-x: scroll;

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &::-webkit-scrollbar {
      width: 100%;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--gray-300);
      border-radius: 8px;
    }
  }

  button {
    background: none;
    border: none;

    font-size: 1rem;
    color: var(--gray-600);

    &:hover {
      span {
        color: var(--yellow);

        &::before {
          background: var(--yellow);
        }
      }
    }

    span {
      display: flex;
      align-items: center;
      font-size: 1.125rem;

      transition: color 0.3s;

      &::before {
        content: '';
        background: var(--gray-300);
        width: 2rem;
        height: 2rem;

        border-radius: 8px;
        margin-right: 8px;
        transition: background 0.3s;
      }
    }
  }
`;
