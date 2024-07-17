'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SocialLinks } from '@/components/social-links';

import {
  ImageWrapper,
  InnerWrapper,
  Navigation,
  NavigationGroup,
  NavigationLink,
  Wrapper,
} from './styles';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isDarMode, setIsDarkMode] = useState(false);

  const handleMode = (event: any) => {
    setIsDarkMode(event.matches);
  };

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleMode);
    return () => window.removeEventListener('change', handleMode);
  }, []);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  return (
    <Wrapper $isWhite={!isHomePage}>
      <InnerWrapper>
        <Link href="/" aria-label="Home">
          <ImageWrapper>
            <Image
              src={
                isHomePage || isDarMode
                  ? '/images/brand/LOGO_WHITE.webp'
                  : '/images/brand/LOGO_PRIMARY.webp'
              }
              alt=""
              width={88}
              height={80}
              priority
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </ImageWrapper>
        </Link>

        <Navigation $isWhite={!isHomePage}>
          <NavigationGroup>
            <NavigationLink href="/">Home</NavigationLink>
          </NavigationGroup>

          <SocialLinks />
        </Navigation>
      </InnerWrapper>
    </Wrapper>
  );
}
