'use client';

import styled from 'styled-components';

export const Wrapper = styled.div<{ $category: string }>`
  padding: 0.4rem 0.75rem 0.25rem;
  width: fit-content;
  border-radius: 0.25rem;
  background-color: ${({ theme, $category }) =>
    theme.colors.categories[$category]};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 100%;
  color: var(--color-white);
`;
