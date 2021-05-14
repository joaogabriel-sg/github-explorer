import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Container, Repository } from './styles';

export const UserRepositories = (): JSX.Element => (
  <Container>
    <Repository href="https://github.com/joaogabriel-sg">
      <div>
        <h4>pokemon</h4>
        <p>
          Pokémon is an unofficial Pokémon app that searches in the PokéAPI data
          about pokémons.
        </p>
        <span>JavaScript</span>
      </div>
      <IoChevronForward />
    </Repository>

    <Repository href="https://github.com/joaogabriel-sg">
      <div>
        <h4>star-wars</h4>
        <p>
          Star Wars is an unofficial Star Wars app that searches in the SWAPI
          data about characters, planets, vehicles and spaceships of the
          franchise.
        </p>
        <span>JavaScript</span>
      </div>
      <IoChevronForward />
    </Repository>

    <Repository href="https://github.com/joaogabriel-sg">
      <div>
        <h4>pokemon</h4>
        <p>
          Pokémon is an unofficial Pokémon app that searches in the PokéAPI data
          about pokémons.
        </p>
        <span>JavaScript</span>
      </div>
      <IoChevronForward />
    </Repository>

    <Repository href="https://github.com/joaogabriel-sg">
      <div>
        <h4>pokemon</h4>
        <p>
          Pokémon is an unofficial Pokémon app that searches in the PokéAPI data
          about pokémons.
        </p>
        <span>JavaScript</span>
      </div>
      <IoChevronForward />
    </Repository>

    <Repository href="https://github.com/joaogabriel-sg">
      <div>
        <h4>pokemon</h4>
        <p>
          Pokémon is an unofficial Pokémon app that searches in the PokéAPI data
          about pokémons.
        </p>
        <span>JavaScript</span>
      </div>
      <IoChevronForward />
    </Repository>

    <a
      href="https://github.com/joaogabriel-sg?tab=repositories"
      target="_blank"
      rel="noreferrer"
    >
      Ver todos
    </a>
  </Container>
);
