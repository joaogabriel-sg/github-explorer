import React from 'react';
import { useGithubUser } from '../../../../hooks/useGithubUser';

import { Container, Language } from './styles';

export const Langs = (): JSX.Element | null => {
  const { languages, updateActiveLanguage } = useGithubUser();

  if (!languages.length) return null;

  return (
    <Container>
      {languages.map((language) => (
        <Language
          type="button"
          key={language.name}
          langColor={language.color}
          onClick={() => updateActiveLanguage(language.name)}
        >
          <span>{language.name}</span>
        </Language>
      ))}
      <button type="button" onClick={() => updateActiveLanguage('')}>
        Limpar
      </button>
    </Container>
  );
};
