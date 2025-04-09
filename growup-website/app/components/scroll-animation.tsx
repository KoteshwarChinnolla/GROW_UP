'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a delay before triggering the animation
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Once the element is visible, we can stop observing it
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? 'animate-rise-on-scroll' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
} 