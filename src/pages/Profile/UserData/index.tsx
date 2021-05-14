import React from 'react';
import { IoLink, IoLocation, IoPeople } from 'react-icons/io5';

import { Container, Languages } from './styles';

export const UserData = (): JSX.Element => (
  <Container>
    <img src="https://avatars.githubusercontent.com/u/74667683?v=4" alt="JG" />

    <h2>João Gabriel</h2>
    <h3>joaogabriel-sg</h3>

    <p>
      Estudante e Desenvolvedor Front-end com o princípio de evoluir pelo menos
      1% diariamente e poder contribuir com quem necessitar.
    </p>

    <div>
      <IoPeople />
      <span>39 seguidores · 57 seguindo</span>
    </div>

    <div>
      <IoLocation />
      <span>Boa Viagem - CE, Brasil</span>
    </div>

    <div>
      <IoLink />
      <a href="http://linkedin.com/in/joaogabriel-sg/">
        https://www.linkedin.com/in/joaogabriel...
      </a>
    </div>

    <Languages>
      <button type="button">
        <span>JavaScript</span>
      </button>
      <button type="button">Limpar</button>
    </Languages>
  </Container>
);
