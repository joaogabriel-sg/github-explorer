import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { Container } from './styles';

export const Footer = (): JSX.Element => (
  <Container>
    <p>Criado de 💜 por João Gabriel</p>

    <div>
      <a
        href="https://www.linkedin.com/in/joaogabriel-sg/"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin />
      </a>

      <a
        href="https://github.com/joaogabriel-sg"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoGithub />
      </a>
    </div>
  </Container>
);
