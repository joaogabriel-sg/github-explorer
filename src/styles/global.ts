import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #6F42C1;
    --yellow: #FFDF5D;
    --blue: #2188FF;

    --background: #F2F2F2;

    --gray-000: #FAFBFC;
    --gray-300: #D1D5DA;
    --gray-400: #959DA5;
    --gray-500: #6A737D;
    --gray-600: #586069;
    --gray-900: #24292E;

    --font-1: 'Lato', Arial, Helvetica, sans-serif;
    --font-2: 'IBM Plex Mono', 'Courier New', Courier, monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: var(--font-1);
    font-weight: 400;
    color: var(--gray-900);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  ul,
  li {
    list-style: none;
  }
`;
