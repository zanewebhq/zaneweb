import Link from '@/components/link';
import PostCard from '@/components/post-card';
import { getPosts } from '@/utils/posts';

import { Heading, LinkWrapper, Posts, Wrapper } from './styles';

export default async function LatestPosts() {
  const posts = await getPosts();

  if (!posts) return null;

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });

  return (
    <Wrapper id="latest-posts">
      <Heading>Latest posts</Heading>

      <Posts>
        {sortedPosts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </Posts>

      <LinkWrapper>
        <Link href="/blog">View all posts</Link>
      </LinkWrapper>
    </Wrapper>
  );
}
