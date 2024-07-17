import { ReactNode } from 'react';

import { StyledLink } from './styles';

interface LinkProps {
  href?: string;
  children?: ReactNode;
  className?: string;
}

export default function Link({ href = '', children, className }: LinkProps) {
  const isInternal = href && href.startsWith('/');

  const props = isInternal
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <StyledLink href={href} className={className} {...props}>
      {children}
    </StyledLink>
  );
}
