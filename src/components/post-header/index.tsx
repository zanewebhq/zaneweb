import PostCategory from '@/components/post-category';
import formatDate from '@/utils/format-date';
import { Post } from '@/utils/posts';
import calculateReadingTime from '@/utils/reading-time';

import PostImage from '../post-image';
import { Bullet, Header, Heading, Info, InfoRow } from './styles';

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader({ post }: PostHeaderProps) {
  const published = formatDate(post.published);
  const readingTime = calculateReadingTime(post.body);

  return (
    <Header>
      <InfoRow>
        <PostCategory category={post.category} />
      </InfoRow>
      <Heading>{post.title}</Heading>
      <InfoRow>
        <Info as="time">{published}</Info>
        <Bullet />
        <Info>{readingTime} min read</Info>
      </InfoRow>
      <PostImage {...post.featuredImage} type="featured" />
    </Header>
  );
}
