import { createGlobalStyle } from 'styled-components';

import { baseTheme, darkTheme, lightTheme } from '@/common/constants/theme';

const GlobalStyle = createGlobalStyle`
  :root {
    ${baseTheme}
    ${lightTheme}

    @media (prefers-color-scheme: dark) {
      ${darkTheme}
    }
  }
  
`;

export default GlobalStyle;
