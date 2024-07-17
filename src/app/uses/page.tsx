import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ContentWrapper from '@/components/content-wrapper';
import MDXRenderer from '@/components/mdx';
import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';
import { getContentFromFile } from '@/utils/content';

export const metadata: Metadata = {
  title: 'Uses | Zane Web',
  description:
    'What I use on a daily basis to get things done as a web developer.',
};

export default async function UsesPage() {
  const source = await getContentFromFile('uses.mdx');

  return (
    <ContentWrapper>
      <MDXRenderer source={source} />
    </ContentWrapper>
  );
}
