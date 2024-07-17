'use client';

import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--color-text-100);
`;

export const Bullet = styled.span`
  &:before {
    content: '•';
    font-size: 1.5rem;
    color: var(--color-text-100);
  }
`;
