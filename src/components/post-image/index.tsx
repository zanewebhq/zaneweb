import Image from 'next/image';
import { StyleHTMLAttributes } from 'react';

import { PostImage as PostImageType } from '@/utils/posts';

import { Figure, FigureCaption, ImageWrapper } from './styles';

interface PostImageProps extends PostImageType {
  priority?: boolean;
  type?: 'content' | 'featured';
}

export default function PostImage({
  src,
  alt,
  title,
  type = 'content',
}: PostImageProps) {
  const typeProps =
    type === 'content'
      ? {
          width: 0,
          height: 0,
          priority: false,
          style: {
            width: '100%',
            height: 'auto',
          } as StyleHTMLAttributes<HTMLImageElement>,
        }
      : {
          fill: true,
          priority: true,
          style: {
            objectFit: 'cover',
            objectPosition: 'center',
          } as StyleHTMLAttributes<HTMLImageElement>,
        };

  return (
    <Figure>
      <ImageWrapper type={type}>
        <Image
          src={src}
          alt={alt}
          {...typeProps}
          sizes="(max-width: 48rem) 100vw, 50rem"
        />
      </ImageWrapper>
      {title && <FigureCaption>{title}</FigureCaption>}
    </Figure>
  );
}
