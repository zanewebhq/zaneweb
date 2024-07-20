import styled from 'styled-components';

export const ProgressBar = styled.div.attrs<{ $scrollProgress: number }>(
  (props) => ({
    style: {
      transform: `scaleX(${props.$scrollProgress})`,
    },
  }),
)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.25rem;
  background: var(--color-text-400);
  z-index: 10;
  transform-origin: left center;
`;
