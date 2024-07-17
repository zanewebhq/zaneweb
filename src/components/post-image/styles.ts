'use client';

import styled from 'styled-components';

export const Figure = styled.figure`
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div<{ type: 'content' | 'featured' }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  aspect-ratio: ${({ type }) => (type === 'featured' ? '16 / 9' : 'none')};
  border-radius: 0.5rem;
`;

export const FigureCaption = styled.figcaption`
  font-size: 0.875rem;
  font-style: italic;
  text-align: center;
  margin-top: 0.5rem;
`;
