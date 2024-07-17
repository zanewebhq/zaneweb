import Image from 'next/image';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

import formatDate from '@/utils/format-date';
import { Post } from '@/utils/posts';

import Category from '../post-category';
import {
  Body,
  Content,
  Date,
  Footer,
  Heading,
  ImageWrapper,
  ReadMore,
  Wrapper,
} from './styles';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { title, slug, description, featuredImage, category } = post;
  const published = formatDate(post.published);

  return (
    <Wrapper href={`/blog/${slug}`}>
      <ImageWrapper>
        <Image
          src={featuredImage.src}
          alt={featuredImage.alt}
          fill
          sizes="(max-width: 48rem) 100vw, (max-width: 64rem) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </ImageWrapper>
      <Content>
        <Category category={category} />
        <Heading>{title}</Heading>
        <Body>{description}</Body>
        <Footer>
          <Date>{published}</Date>
          <ReadMore>
            <span>Read more</span>
            <MdKeyboardDoubleArrowRight size={24} />
          </ReadMore>
        </Footer>
      </Content>
    </Wrapper>
  );
}
