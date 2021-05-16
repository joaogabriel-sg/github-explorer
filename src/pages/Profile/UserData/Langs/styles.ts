import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  button {
    &:last-of-type {
      background: none;
      border: none;

      font-size: 1rem;
      color: var(--gray-600);
    }
  }

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
`;

interface LanguageProps {
  langColor: string;
}

export const Language = styled.button<LanguageProps>`
  background: none;
  border: none;

  font-size: 1rem;
  color: var(--gray-600);

  &:hover,
  &.active {
    span {
      color: ${({ langColor }) => langColor || `var(--gray-900)`};

      &::before {
        background: ${({ langColor }) => langColor || `var(--gray-900)`};
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
`;
