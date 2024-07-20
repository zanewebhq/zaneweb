import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 50rem;
  margin: 0 auto;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  transition: background-color 200ms;
  color: var(--color-white);
  background-color: var(--color-btn-secondary-100);

  ${({ theme }) => theme.mediaQueries.md} {
    bottom: 1.5rem;
    right: -4rem;
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: var(--color-btn-secondary-200);
  }

  &:active {
    background-color: var(--color-btn-secondary-300);
  }
`;
