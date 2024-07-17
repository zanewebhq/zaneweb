import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';
import PostWrapper from '@/components/post-wrapper';
import ScrollProgress from '@/components/scroll-progress';
import ScrollToTop from '@/components/scroll-to-top';
import { getPost, getPosts } from '@/utils/posts';

interface PostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <ScrollProgress />

      <PostWrapper>
        <PostHeader post={post} />
        <PostBody post={post} />
      </PostWrapper>

      <ScrollToTop />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post?.title ? `${post?.title} | Zane Web` : undefined,
    description: post?.description,
  };
}
