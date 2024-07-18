import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

export const HamburgerButton = styled.button<{ $isWhite: boolean }>`
  position: relative;
  z-index: 30;
  background: none;
  border: none;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ $isWhite }) =>
    $isWhite ? 'var(--color-text-200)' : 'var(--color-white)'};

  &:hover,
  &:focus {
    outline: none;
  }

  &:active {
  }
`;

export const Navigation = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--color-background-200);
`;

export const SocialsWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;
