import { SocialLinks } from '@/components/social-links';

import Link from '../link';
import { Navigation, NavigationGroup } from './styles';

interface NavigationDesktopProps {
  isWhite: boolean;
}

export default function NavigationDesktop({ isWhite }: NavigationDesktopProps) {
  return (
    <Navigation $isWhite={!isWhite}>
      <NavigationGroup>
        <Link href="/" forceLight={isWhite}>
          Home
        </Link>
        <Link href="/blog" forceLight={isWhite}>
          Blog
        </Link>
        <Link href="/uses" forceLight={isWhite}>
          Uses
        </Link>
      </NavigationGroup>
      <SocialLinks />
    </Navigation>
  );
}
