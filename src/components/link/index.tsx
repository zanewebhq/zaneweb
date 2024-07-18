import { ReactNode } from 'react';

import { StyledLink } from './styles';

interface LinkProps {
  href?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  forceLight?: boolean;
}

export default function Link({
  href = '',
  children,
  className,
  onClick,
  forceLight,
}: LinkProps) {
  const isInternal = href && href.startsWith('/');

  const props = isInternal
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <StyledLink
      href={href}
      className={className}
      onClick={onClick}
      $forceLight={forceLight}
      {...props}
    >
      {children}
    </StyledLink>
  );
}
