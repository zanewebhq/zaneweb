import styled from 'styled-components';

export const Navigation = styled.nav<{ $isWhite: boolean }>`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  color: ${({ $isWhite }) =>
    $isWhite ? 'var(--color-text-400)' : 'var(--color-white)'};

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
  }
`;

export const NavigationGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
