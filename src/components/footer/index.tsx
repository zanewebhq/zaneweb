import Link from '@/components/link';
import { SocialLinks } from '@/components/social-links';

import { Text, Wrapper } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Text>
        © 2024, Built with <Link href="https://nextjs.org/">Next.js</Link>
      </Text>
      <SocialLinks />
    </Wrapper>
  );
}
