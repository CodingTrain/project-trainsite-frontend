import { createGlobalStyle } from 'styled-components';

// This is bad, but it seems like the only way to import a local font with styled-components.
import './fonts.styles.css';

const GlobalStyleComponent = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family:
      source-code-pro,
      Menlo,
      Monaco,
      Consolas,
      "Courier New",
      monospace;
  }
`;

export default GlobalStyleComponent;
