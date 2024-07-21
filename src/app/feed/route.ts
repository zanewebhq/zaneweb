import RSS from 'rss';

import { getPosts } from '@/utils/posts';

export async function GET() {
  const SITE_URL = process.env.SITE_URL;
  const posts = await getPosts();

  if (!SITE_URL) return new Response('SITE_URL is not set', { status: 500 });

  const feed = new RSS({
    title: 'Zane Web',
    description:
      'Welcome to my personal blog, where I document  my learnings, insights and experiences in the fascinating & intricate worlds of web development and cybersecurity.',
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed`,
    language: 'en',
    pubDate: new Date(),
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      guid: `${SITE_URL}/${post.slug}`,
      url: `${SITE_URL}/${post.slug}`,
      date: post.published,
      description: post.description,
      categories: [post.category],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
