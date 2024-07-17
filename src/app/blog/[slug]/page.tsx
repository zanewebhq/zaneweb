import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ContentWrapper from '@/components/content-wrapper';
import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';
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
    <ContentWrapper>
      <PostHeader post={post} />
      <PostBody post={post} />
    </ContentWrapper>
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
