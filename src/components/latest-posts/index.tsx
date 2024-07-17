import PostCard from '@/components/post-card';
import { getPosts } from '@/utils/posts';

import { Heading, Posts, Wrapper } from './styles';

export default async function LatestPosts() {
  const posts = await getPosts();

  if (!posts) return null;

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });

  return (
    <Wrapper id="latestPosts">
      <Heading>Latest posts</Heading>
      <Posts>
        {sortedPosts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </Posts>
    </Wrapper>
  );
}
