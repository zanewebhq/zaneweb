import { css } from 'styled-components';

import { PostCategory } from '@/utils/posts';

type ColorVariant = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type TypographyVariant = 1 | 2 | 3 | 4 | 5;

interface TypographyProps {
  fontSize: string;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: string;
}

type BrandRecord = {
  primary: string;
  white: string;
  black: string;
};

interface Theme {
  colors: {
    primary: Record<ColorVariant, string>;
    secondary: Record<ColorVariant, string>;
    white: string;
    black: string;
    categories: Record<PostCategory, string>;
  };
  typography: {
    heading: Record<TypographyVariant, TypographyProps>;
    body: Record<TypographyVariant, TypographyProps>;
  };
  brand: {
    logo: BrandRecord;
    icon: BrandRecord;
    wordmark: BrandRecord;
  };
  mediaQueries: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

const theme: Theme = {
  colors: {
    primary: {
      100: '#F4F8FF',
      200: '#CBDCF7',
      300: '#9DBBEB',
      400: '#6E9CE4',
      500: '#4582E1',
      600: '#3769B6',
      700: '#2A4F88',
      800: '#1C3459',
      900: '#101C30',
    },
    secondary: {
      100: '#F4F0FC',
      200: '#D6C5F5',
      300: '#B79AED',
      400: '#986FE6',
      500: '#7944DE',
      600: '#6136B2',
      700: '#492985',
      800: '#301B59',
      900: '#180E2C',
    },
    white: '#FFFFFF',
    black: '#000000',
    categories: {
      cybersecurity: '#2A4F88',
      'web-development': '#00857e',
    },
  },
  typography: {
    heading: {
      1: {
        fontSize: '2rem',
        fontWeight: 600,
        letterSpacing: '100%',
        lineHeight: '120%',
      },
      2: {
        fontSize: '1.5rem',
        fontWeight: 600,
        letterSpacing: '100%',
        lineHeight: '120%',
      },
      3: {
        fontSize: '1.125rem',
        fontWeight: 600,
        letterSpacing: '100%',
        lineHeight: '120%',
      },
      4: {
        fontSize: '1rem',
        fontWeight: 600,
        letterSpacing: '100%',
        lineHeight: '120%',
      },
      5: {
        fontSize: '0.875rem',
        fontWeight: 600,
        letterSpacing: '100%',
        lineHeight: '120%',
      },
    },
    body: {
      1: {
        fontSize: '1.25rem',
        fontWeight: 400,
        letterSpacing: '100%',
        lineHeight: '160%',
      },
      2: {
        fontSize: '1.125rem',
        fontWeight: 400,
        letterSpacing: '100%',
        lineHeight: '160%',
      },
      3: {
        fontSize: '1rem',
        fontWeight: 400,
        letterSpacing: '100%',
        lineHeight: '160%',
      },
      4: {
        fontSize: '0.875rem',
        fontWeight: 400,
        letterSpacing: '100%',
        lineHeight: '160%',
      },
      5: {
        fontSize: '0.75rem',
        fontWeight: 400,
        letterSpacing: '100%',
        lineHeight: '160%',
      },
    },
  },
  brand: {
    logo: {
      primary: '/images/brand/LOGO_PRIMARY.svg',
      white: '/images/brand/LOGO_WHITE.svg',
      black: '/images/brand/LOGO_BLACK.svg',
    },
    icon: {
      primary: '/images/brand/ICON_PRIMARY.svg',
      white: '/images/brand/ICON_WHITE.svg',
      black: '/images/brand/ICON_BLACK.svg',
    },
    wordmark: {
      primary: '/images/brand/WORDMARK_PRIMARY.svg',
      white: '/images/brand/WORDMARK_WHITE.svg',
      black: '/images/brand/WORDMARK_BLACK.svg',
    },
  },
  mediaQueries: {
    xs: '@media (min-width: 30rem)', // 480px
    sm: '@media (min-width: 48rem)', // 768px
    md: '@media (min-width: 64rem)', // 1024px
    lg: '@media (min-width: 80rem)', // 1280px
    xl: '@media (min-width: 100rem)', // 1600px
  },
};

export const baseTheme = css`
  --color-white: #ffffff;
  --color-black: #000000;

  --color-primary-100: #f4f8ff;
  --color-primary-200: #cbdcf7;
  --color-primary-300: #9dbbeb;
  --color-primary-400: #6e9ce4;
  --color-primary-500: #4582e1;
  --color-primary-600: #3769b6;
  --color-primary-700: #2a4f88;
  --color-primary-800: #1c3459;
  --color-primary-900: #101c30;

  --color-secondary-100: #f4f0fc;
  --color-secondary-200: #d6c5f5;
  --color-secondary-300: #b79aed;
  --color-secondary-400: #986fe6;
  --color-secondary-500: #7944de;
  --color-secondary-600: #6136b2;
  --color-secondary-700: #492985;
  --color-secondary-800: #301b59;
  --color-secondary-900: #180e2c;
`;

export const lightTheme = css`
  --color-text-100: #58749e;
  --color-text-200: #1c3459;

  --color-link-text: #7944de;
  --color-link-text-hover: #301b59;
  --color-link-background-hover: #d6c5f5;
  --color-link-background-active: #b79aed;

  --color-background-100: #ffffff;
  --color-background-200: #f4f8ff;
  --color-background-300: #e6eefb;
  --color-background-400: #cbdcf7;

  --color-shadow-100: rgba(0, 0, 0, 0.1);
  --color-shadow-200: rgba(0, 0, 0, 0.2);
  --color-shadow-300: rgba(0, 0, 0, 0.3);
`;

export const darkTheme = css`
  --color-text-100: #95afd9;
  --color-text-200: #cbdcf7;

  --color-link-text: #b79aed;
  --color-link-text-hover: #301b59;
  --color-link-background-hover: #d6c5f5;
  --color-link-background-active: #986fe6;

  --color-background-100: #111928;
  --color-background-200: #141e2d;
  --color-background-300: #1c293d;
  --color-background-400: #213048;
`;

export default theme;
