'use client';

import { Fragment } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Breadcrumb, Item } from '@/components/breadcrumbs/styles';
import { capitalize } from '@/utils/strings';

interface BreadcrumbsDesktopProps {
  segments: string[];
  segment: string;
  index: number;
}

export default function BreadcrumbsDesktop({
  segments,
  segment,
  index,
}: BreadcrumbsDesktopProps) {
  if (!segment) return null;

  const name = segment.split('-').map(capitalize).join(' ');
  const href = segments.slice(0, index + 1).join('/');

  return (
    <Fragment key={href}>
      <Item>
        <MdKeyboardArrowRight />
      </Item>

      {index === segments.length - 1 ? (
        <Item key={href}>{name}</Item>
      ) : (
        <Item>
          <Breadcrumb href={href}>{name}</Breadcrumb>
        </Item>
      )}
    </Fragment>
  );
}
