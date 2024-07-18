import { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

import Link from '@/components/link';
import { SocialLinks } from '@/components/social-links';

import { HamburgerButton, Navigation, SocialsWrapper, Wrapper } from './styles';

interface NavigationMobileProps {
  isWhite: boolean;
}

export default function NavigationMobile({ isWhite }: NavigationMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    return true;
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <Wrapper>
      <HamburgerButton $isWhite={!isWhite || isOpen} onClick={handleToggle}>
        {isOpen ? <MdClose title="Open menu" /> : <MdMenu title="Close menu" />}
      </HamburgerButton>

      {isOpen && (
        <Navigation>
          <Link href="/" onClick={handleToggle}>
            Home
          </Link>
          <Link href="/uses" onClick={handleToggle}>
            Uses
          </Link>

          <SocialsWrapper>
            <SocialLinks />
          </SocialsWrapper>
        </Navigation>
      )}
    </Wrapper>
  );
}
