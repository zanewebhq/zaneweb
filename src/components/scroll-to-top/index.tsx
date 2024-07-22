'use client';

import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

import { Button, Wrapper } from './styles';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Wrapper>
      <Button onClick={scrollToTop}>
        <FaAngleUp size={32} title="Scroll to top" />
      </Button>
    </Wrapper>
  );
}
