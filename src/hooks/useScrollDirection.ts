'use client';

import { useState, useEffect } from 'react';

interface ScrollState {
  isScrolled: boolean;
  isHidden: boolean;
  scrollDirection: 'up' | 'down';
}

export const useScrollDirection = (): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    isHidden: false,
    scrollDirection: 'up'
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Only hide header when scrolling down and past the threshold
      const shouldHide = scrollDirection === 'down' && currentScrollY > 100;
      
      setScrollState({
        isScrolled: currentScrollY > 10,
        isHidden: shouldHide,
        scrollDirection
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollState;
};