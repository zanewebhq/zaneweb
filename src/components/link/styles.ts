'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{ $forceLight?: boolean }>`
  border-bottom: 1px solid;
  text-decoration: none;
  transition-property: color, border-color, background, box-shadow,
    border-radius;
  transition-duration: 200ms;
  box-shadow: 0 0 0 0.2rem transparent;
  color: ${({ $forceLight }) =>
    $forceLight ? 'var(--color-secondary-200)' : 'var(--color-link-text)'};
  border-color: ${({ $forceLight }) =>
    $forceLight ? 'var(--color-secondary-200)' : 'var(--color-link-text)'};

  &:hover,
  &:focus {
    outline: none;
    color: var(--color-link-text-hover);
    background-color: var(--color-link-background-hover);
    box-shadow: 0 0 0 0.2rem var(--color-link-background-hover);
    border-color: var(--color-link-background-hover);
    border-radius: 1px;
  }

  &:active {
    color: var(--color-link-text-hover);
    background-color: var(--color-link-background-active);
    box-shadow: 0 0 0 0.2rem var(--color-link-background-active);
    border-color: var(--color-link-background-active);
  }
`;
