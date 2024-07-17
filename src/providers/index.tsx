import { ReactNode } from 'react/';

import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/providers/theme';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
