import { ReactNode } from 'react';

import firaSans from '@/common/fonts/fira-sans';
import Breadcrumbs from '@/components/breadcrumbs';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Providers from '@/providers';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={firaSans.className}>
      <body>
        <Providers>
          <Header />
          <Breadcrumbs />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
