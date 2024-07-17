import { MetadataRoute } from 'next';

import { getContentFromDirectory } from '@/utils/content';
import { getPosts } from '@/utils/posts';

const URL = 'https://zaneweb.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsContent = await getPosts();
  const pagesContent = await getContentFromDirectory<{
    slug: string;
    lastModified: Date;
  }>();

  const posts = postsContent.map(({ slug, lastModified }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: lastModified,
  }));

  const pages = pagesContent.map(({ slug, lastModified }) => ({
    url: `${URL}/${slug === 'home' ? '' : slug}`,
    lastModified: lastModified,
  }));

  return [...posts, ...pages];
}
