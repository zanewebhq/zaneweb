'use client';

import styled from 'styled-components';

export const Wrapper = styled.header<{ $isWhite: boolean }>`
  position: ${({ $isWhite }) => ($isWhite ? 'static' : 'absolute')};
  top: 0;
  left: 0;
  z-index: 10;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  padding: 0 1rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    gap: 8rem;
    justify-content: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;
