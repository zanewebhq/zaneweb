'use client';

import { useEffect, useState } from 'react';

import { ProgressBar } from './styles';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = window.scrollY / totalHeight;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <ProgressBar $scrollProgress={scrollProgress} />
    </div>
  );
}
