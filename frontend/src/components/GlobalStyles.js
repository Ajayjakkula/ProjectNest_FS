import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
                 Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.text};
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.link};
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.linkHover};
      opacity: 0.9;
    }
  }

  button {
    cursor: pointer;
    background-color: ${props => props.theme.button};
    color: ${props => props.theme.buttonText};
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      background-color: ${props => props.theme.primary};
      opacity: 0.9;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    background-color: ${props => props.theme.inputBg};
    color: ${props => props.theme.text};
    font-size: 1rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.primary};
      box-shadow: 0 0 0 2px ${props => props.theme.primary}20;
    }
    &::placeholder {
      color: ${props => props.theme.text}80;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Utility classes */
  .text-center { text-align: center; }
  .mt-1 { margin-top: 0.25rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 1rem; }
  .mt-4 { margin-top: 1.5rem; }
  .mt-5 { margin-top: 2rem; }
  .mb-1 { margin-bottom: 0.25rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 1rem; }
  .mb-4 { margin-bottom: 1.5rem; }
  .mb-5 { margin-bottom: 2rem; }

  /* Scrollbar styling for Webkit browsers */
  ::-webkit-scrollbar {
    width: 8px; height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.body};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.primary}90;
  }
`;

export default GlobalStyles;
