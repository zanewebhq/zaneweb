
import Link from '@/components/link';
import { Heading1, Paragraph } from '@/components/mdx/styles';
import { NotFoundWrapper } from '@/components/not-found';

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <Heading1>404: Page not found</Heading1>
      <Paragraph>This page doesn&apos;t exist.</Paragraph>
      <Link href="/">Go back to the homepage</Link>
    </NotFoundWrapper>
  );
}
