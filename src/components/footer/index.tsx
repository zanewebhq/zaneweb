import Link from '@/components/link';
import { SocialLinks } from '@/components/social-links';

import { Text, Wrapper } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Text>
        <Link href="/uncopyright">Uncopyrighted</Link> by Martin Zane
      </Text>
      <Text>
        Built with <Link href="https://nextjs.org/">Next.js</Link>
      </Text>
      <SocialLinks />
    </Wrapper>
  );
}
