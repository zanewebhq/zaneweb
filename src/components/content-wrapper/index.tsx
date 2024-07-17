import { ReactNode } from 'react';

import ScrollProgress from '@/components/scroll-progress';
import ScrollToTop from '@/components/scroll-to-top';

import Wrapper from './styles';

interface ContentWrapperProps {
  children: ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <>
      <ScrollProgress />

      <Wrapper>{children}</Wrapper>

      <ScrollToTop />
    </>
  );
}
