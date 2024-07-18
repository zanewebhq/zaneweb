'use client';

import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { FaHome } from 'react-icons/fa';

import BreadcrumbsDesktop from '@/components/breadcrumbs-desktop';

import { Breadcrumb, Item, Wrapper } from './styles';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/');

  if (pathname === '/') return null;

  return (
    <Wrapper>
      <Item>
        <Breadcrumb href="/">
          <FaHome title="Home" />
        </Breadcrumb>
      </Item>

      {segments.map((segment, index) => (
        <Fragment key={segment}>
          <BreadcrumbsDesktop
            key={segment}
            segments={segments}
            segment={segment}
            index={index}
          />
        </Fragment>
      ))}
    </Wrapper>
  );
}
