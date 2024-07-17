import { Metadata } from 'next';

import Hero from '@/components/hero';
import LatestPosts from '@/components/latest-posts';

export const metadata: Metadata = {
  title: 'Zane Web',
  description:
    'Welcome to my personal blog, where I document  my learnings, insights and experiences in the fascinating & intricate worlds of web development and cybersecurity.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestPosts />
    </>
  );
}
