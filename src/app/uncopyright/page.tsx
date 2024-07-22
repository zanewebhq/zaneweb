import { Metadata } from 'next';

import ContentWrapper from '@/components/content-wrapper';
import MDXRenderer from '@/components/mdx';
import { getContentFromFile } from '@/utils/content';

export const metadata: Metadata = {
  title: 'Uncopyright | Zane Web',
  description: '',
};

export default async function UsesPage() {
  const source = await getContentFromFile('uncopyright.mdx');

  return (
    <ContentWrapper>
      <MDXRenderer source={source} />
    </ContentWrapper>
  );
}
