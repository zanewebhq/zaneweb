'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 40rem;
  padding: 1rem;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;

  max-width: 50rem;
  text-align: center;
  color: var(--color-white);
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 4rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 130%;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 1.5rem;
  }
`;

export const CTALink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  padding: 1rem 2.5rem;
  margin: 2rem auto 0;
  border-radius: 0.5rem;
  background-color: var(--color-btn-primary-100);
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.5rem;
  cursor: pointer;
  transition:
    border-color 200ms,
    background-color 200ms,
    color 200ms;

  &:hover,
  &:focus {
    outline: none;
    background-color: var(--color-btn-primary-200);
  }

  &:active {
    background-color: var(--color-btn-primary-300);
  }
`;
