'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.header<{ $isWhite: boolean }>`
  position: ${({ $isWhite }) => ($isWhite ? 'static' : 'absolute')};
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ $isWhite }) =>
    $isWhite ? 'var(--color-background-200)' : 'transparent'};
  box-shadow: ${({ $isWhite }) =>
    $isWhite ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: background-color 200ms;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 90rem;
  padding: 0 1rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    gap: 8rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Navigation = styled.nav<{ $isWhite: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  color: ${({ $isWhite, theme }) =>
    $isWhite ? 'var(--color-text-200)' : 'var(--color-white)'};
`;

export const NavigationGroup = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const NavigationLink = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;
  transition-property: color, background, border-radius;
  transition-duration: 200ms;
  color: inherit;

  &:hover,
  &:focus {
    outline: none;
    color: var(--color-primary-800);
    background-color: var(--color-primary-300);
  }

  &:active {
    color: var(--color-primary-800);
    background-color: var(--color-primary-400);
  }
`;
