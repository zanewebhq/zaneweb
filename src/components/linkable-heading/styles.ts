'use client';

import NextLink from 'next/link';
import { FaLink } from 'react-icons/fa';
import styled from 'styled-components';

export const Link = styled(NextLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--color-link-text);

    svg {
      display: inline;
    }
  }
`;

export const Icon = styled(FaLink)`
  display: none;
  margin-top: -1.25rem;
`;
