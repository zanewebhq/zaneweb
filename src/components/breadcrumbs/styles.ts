import styled from 'styled-components';

import Link from '@/components/link';

export const Wrapper = styled.ul`
  display: none;
  gap: 0.5rem;
  max-width: 90rem;
  padding: 2rem 1rem 0;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
  }
`;

export const Item = styled.li`
  list-style: none;
  color: var(--color-text-100);
`;

export const Breadcrumb = styled(Link)`
  color: var(--color-text-200);
  border: none;

  &:hover,
  &:focus {
    border: none;
  }

  &:active {
    border: none;
  }
`;
