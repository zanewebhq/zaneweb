'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const IconLink = styled.a`
  color: inherit;
  font-size: 1.5rem;
  line-height: 100%;
  text-decoration: none;
  transition: color 200ms;

  &:focus,
  &:hover {
    outline: none;
    color: var(--color-primary-600);
    cursor: pointer;
  }

  &:active {
    color: var(--color-primary-400);
  }
`;
