import { createGlobalStyle } from 'styled-components';

export { GlobalStyle };

const GlobalStyle = createGlobalStyle`
  :root {
    --ff-heading: Roboto, sans-serif;
    --ff-body: Roboto, sans-serif;

    --c-white: #FFF;
    --c-black: #222;

    --c-blue-900: #1E3E5F;
    --c-blue-500: #3770AC;
    --c-blue-50: #C6E7F8;
    --c-gray-900: #181B23;
    --c-gray-800: #1F2029;
    --c-gray-700: #353646;
    --c-gray-600: #4B4D63;
    --c-gray-500: #616480;
    --c-gray-400: #797D9A;
    --c-gray-300: #9699B0;
    --c-gray-200: #B3B5C6;
    --c-gray-100: #D1D2DC;
    --c-gray-50: #EEEEF2;

    font-size: 37.5%; // 6px

    @media (min-width: 425px) {
      font-size: 56.25%; // 8px
    }

    @media (min-width: 768px) {
      font-size: 56.25%; // 9px
    }

    @media (min-width: 1024px) {
      font-size: 62.5%; // 10px
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: auto;
    outline-style: unset;
    outline-offset: 0.5rem;

    transition-duration: 200ms;
    transition-property: outline-offset;

    &:focus, &:focus-visible, &:focus-within {
      outline-offset: 0;
    }

    &:focus-visible {
      outline-style: auto;
    }
  }

  body {
    background-color: var(--c-gray-900);
    color: var(--c-gray-50);
    font-family: var(--ff-body);

    font-size: 2rem;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--ff-heading);
  }

  input, textarea {
    font-family: var(--ff-body);
  }

  nav {
    display: contents;
  }

  ul {
    listStyle: none;

    display: contents;
  }

  li {
    listStyle: none;
  }
`;
