import { ReactNode } from 'react';

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from '@/components/mdx/styles';
import { slugify } from '@/utils/strings';

import { Icon, Link } from './styles';

const components = {
  1: Heading1,
  2: Heading2,
  3: Heading3,
  4: Heading4,
  5: Heading5,
  6: Heading6,
};

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
}

export default function LinkableHeading({ level, children }: HeadingProps) {
  if (!children) return null;

  const id = slugify(children.toString());
  const href = `#${id}`;

  const Component = components[level];

  return (
    <Link href={href}>
      <Component id={id}>{children}</Component>
      <Icon size={16} />
    </Link>
  );
}
