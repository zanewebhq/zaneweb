'use client';

import { ReactNode } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import theme from '@/common/constants/theme';
import GlobalStyle from '@/styles/globals';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </SCThemeProvider>
  );
}
