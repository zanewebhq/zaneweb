import { getContentFromDirectory } from '@/utils/content';

export interface Post {
  title: string;
  slug: string;
  description: string;
  category: PostCategory;
  body: string;
  featuredImage: PostImage;
  published: Date;
  lastModified: Date;
}

export interface PostImage {
  src: string;
  alt: string;
  title?: string;
}

export type PostCategory = 'cybersecurity' | 'web-development';

export const getPosts = async () => {
  return await getContentFromDirectory<Post>('blog');
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
