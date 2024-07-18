'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 90rem;
  padding: 5rem 1rem;
  margin: auto;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 100%;
  line-height: 120%;
`;

export const Posts = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
