import { css } from 'styled-components';

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
  --hue: 215;
  --sat: 100%;
  --sat-pale: 40%;

  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(0, 0%, 0%);

  --color-neutral-100: hsl(0, 0%, 98%);
  --color-neutral-200: hsl(0, 0%, 96%);
  --color-neutral-300: hsl(0, 0%, 93%);
  --color-neutral-400: hsl(0, 0%, 85%);
  --color-neutral-500: hsl(0, 0%, 50%);
  --color-neutral-600: hsl(0, 0%, 30%);
  --color-neutral-700: hsl(0, 0%, 20%);
  --color-neutral-800: hsl(0, 0%, 13%);
  --color-neutral-900: hsl(0, 0%, 7%);

  --color-primary-100: hsl(var(--hue), var(--sat), 90%);
  --color-primary-200: hsl(var(--hue), var(--sat), 80%);
  --color-primary-300: hsl(var(--hue), var(--sat), 70%);
  --color-primary-400: hsl(var(--hue), var(--sat), 60%);
  --color-primary-500: hsl(var(--hue), var(--sat), 50%);
  --color-primary-600: hsl(var(--hue), var(--sat), 40%);
  --color-primary-700: hsl(var(--hue), var(--sat), 30%);
  --color-primary-800: hsl(var(--hue), var(--sat), 20%);
  --color-primary-900: hsl(var(--hue), var(--sat), 10%);

  --color-btn-primary-100: hsl(var(--hue), var(--sat), 40%);
  --color-btn-primary-200: hsl(var(--hue), var(--sat), 32%);
  --color-btn-primary-300: hsl(var(--hue), var(--sat), 25%);

  --color-btn-secondary-100: hsl(var(--hue), var(--sat), 30%);
  --color-btn-secondary-200: hsl(var(--hue), var(--sat), 22%);
  --color-btn-secondary-300: hsl(var(--hue), var(--sat), 15%);

  --color-link-text-hover: var(--color-primary-800);
  --color-link-background-hover: var(--color-primary-200);
  --color-link-background-active: var(--color-primary-300);

  --color-ctg-cybersecurity: hsl(215, 55%, 35%);
  --color-ctg-web-development: hsl(180, 100%, 25%);
  --color-ctg-productivity: hsl(30, 100%, 36%);

  --color-shadow-100: hsla(0, 0%, 0%, 0.1);
  --color-shadow-200: hsla(0, 0%, 0%, 0.2);
  --color-shadow-300: hsla(0, 0%, 0%, 0.3);
`;

export const lightTheme = css`
  --color-bg-100: var(--color-white);
  --color-bg-200: hsl(var(--hue), var(--sat), 98%);
  --color-bg-300: hsl(var(--hue), var(--sat), 96%);
  --color-bg-400: hsl(var(--hue), var(--sat), 94%);
  --color-bg-500: hsl(var(--hue), var(--sat), 92%);

  --color-text-100: hsl(var(--hue), var(--sat-pale), 50%);
  --color-text-200: hsl(var(--hue), var(--sat-pale), 41%);
  --color-text-300: hsl(var(--hue), var(--sat-pale), 34%);
  --color-text-400: hsl(var(--hue), var(--sat-pale), 25%);
  --color-text-500: hsl(var(--hue), var(--sat-pale), 15%);

  --color-link-text: var(--color-primary-500);
`;

export const darkTheme = css`
  --color-bg-100: hsl(var(--hue), var(--sat-pale), 10%);
  --color-bg-200: hsl(var(--hue), var(--sat-pale), 15%);
  --color-bg-300: hsl(var(--hue), var(--sat-pale), 20%);
  --color-bg-400: hsl(var(--hue), var(--sat-pale), 25%);
  --color-bg-500: hsl(var(--hue), var(--sat-pale), 30%);

  --color-text-100: hsl(var(--hue), var(--sat-pale), 60%);
  --color-text-200: hsl(var(--hue), var(--sat-pale), 69%);
  --color-text-300: hsl(var(--hue), var(--sat-pale), 78%);
  --color-text-400: hsl(var(--hue), var(--sat-pale), 87%);
  --color-text-500: hsl(var(--hue), var(--sat-pale), 95%);

  --color-link-text: var(--color-primary-200);
`;

export default theme;
