
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'fade-in' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'none';
  duration?: 'fast' | 'normal' | 'slow';
  delay?: number;
  threshold?: number;
  staggerChildren?: boolean;
  root?: Element | null;
  rootMargin?: string;
  children: React.ReactNode;
}

export function AnimatedSection({
  animation = 'fade-in',
  duration = 'normal',
  delay = 0,
  threshold = 0.1,
  staggerChildren = false,
  root = null,
  rootMargin = '0px',
  className,
  children,
  ...props
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animationClass = animation === 'none' ? '' : getAnimationClass(animation);
    const durationClass = getDurationClass(duration);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a delay if specified
          setTimeout(() => {
            section.classList.add('visible');
            
            // Stagger children animations if enabled
            if (staggerChildren) {
              const children = section.querySelectorAll(':scope > *');
              children.forEach((child, index) => {
                setTimeout(() => {
                  (child as HTMLElement).classList.add('visible');
                }, 100 * index);
              });
            }
          }, delay);
          
          // Once animation is triggered, disconnect observer
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(section);

    // Apply initial classes
    section.classList.add('appear-animation');
    section.classList.add(durationClass);
    
    if (animationClass) {
      section.classList.add(animationClass);
    }
    
    // If we want to stagger children
    if (staggerChildren) {
      section.classList.add('stagger-children');
      const children = section.querySelectorAll(':scope > *');
      children.forEach((child) => {
        (child as HTMLElement).classList.add('appear-animation');
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [animation, duration, delay, threshold, staggerChildren, root, rootMargin]);

  return (
    <div 
      ref={sectionRef} 
      className={cn(className)} 
      {...props}
    >
      {children}
    </div>
  );
}

// Helper functions
function getAnimationClass(animation: string): string {
  switch (animation) {
    case 'fade-up':
      return 'from-bottom';
    case 'fade-down':
      return 'from-top';
    case 'fade-left':
      return 'from-right';
    case 'fade-right':
      return 'from-left';
    case 'scale-in':
      return 'scale-fade';
    case 'fade-in':
    default:
      return '';
  }
}

function getDurationClass(duration: string): string {
  switch (duration) {
    case 'fast':
      return 'duration-300';
    case 'slow':
      return 'duration-1000';
    case 'normal':
    default:
      return 'duration-700';
  }
}
