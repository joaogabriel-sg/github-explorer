import styled from 'styled-components';

export const Container = styled.form`
  margin-bottom: 5.75rem;

  h2 {
    max-width: 550px;
    margin-bottom: 3rem;
    font-size: 4rem;
  }

  div {
    max-width: 700px;
    display: flex;
    align-items: center;

    input {
      flex: 1;
      height: 5rem;

      padding: 2rem;
      border: 2px solid transparent;
      border-radius: 8px 0 0 8px;
      outline: none;

      font-size: 1.25rem;
      transition: 0.3s;

      &:focus {
        border-color: var(--purple);
      }

      &::placeholder {
        color: var(--gray-300);
      }
    }

    button {
      background: var(--purple);
      height: 5rem;

      padding: 0 2rem;
      border: none;
      border-radius: 0 8px 8px 0;

      &:disabled {
        filter: brightness(0.9);
        cursor: not-allowed;
      }

      svg {
        fill: var(--gray-000);
        width: 3rem;
        height: 3rem;
      }
    }

    @media (max-width: 860px) {
      max-width: 100%;
    }
  }
`;
