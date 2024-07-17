'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  color: var(--color-text-200);
  background-color: var(--color-background-200);
  overflow: hidden;
  box-shadow: 0 0.5rem 0.75rem -2px var(--color-shadow-100);
  cursor: pointer;
  text-decoration: none;
  transition-property: box-shadow, background-color;
  transition-duration: 200ms;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0.75rem 1.5rem -2px var(--color-shadow-200);
  }

  &:active {
    background-color: var(--color-background-300);
    box-shadow: 0 0.75rem 1.5rem -2px var(--color-shadow-300);
  }

  @media (prefers-color-scheme: dark) {
    transition-property: box-shadow, background-color, outline;
    outline: 3px solid transparent;
    box-shadow: none;

    &:hover,
    &:focus {
      outline: 3px solid var(--color-background-400);
      box-shadow: none;
    }

    &:active {
      box-shadow: none;
      background-color: var(--color-background-300);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  margin-right: 2rem;
  background-color: var(--color-background-400);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  flex-grow: 1;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 2rem;
  }
`;

export const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 100%;
  line-height: 120%;
  flex-grow: 1;
`;

export const Body = styled.div`
  height: calc(4rem * 1.3); /* 4 lines */
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  flex-grow: 1;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.div`
  color: var(--color-text-100);
`;

export const ReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-primary-500);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 200ms;
  cursor: pointer;
`;
