'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import NavigationDesktop from '@/components/navigation-desktop';
import NavigationMobile from '@/components/navigation-mobile';

import { ImageWrapper, InnerWrapper, Wrapper } from './styles';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isDarMode, setIsDarkMode] = useState(false);
  const brandColor = isHomePage || isDarMode ? 'WHITE' : 'PRIMARY';

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
              src={`/images/brand/LOGO_${brandColor}.webp`}
              alt=""
              width={88}
              height={80}
              priority
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </ImageWrapper>
        </Link>

        <NavigationMobile isWhite={isHomePage} />
        <NavigationDesktop isWhite={isHomePage} />
      </InnerWrapper>
    </Wrapper>
  );
}
