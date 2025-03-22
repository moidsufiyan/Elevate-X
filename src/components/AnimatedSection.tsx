
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  staggerChildren?: boolean;
  animation?: 'fade-up' | 'fade-in' | 'slide-in' | 'scale-in' | 'zoom-in';
  duration?: 'fast' | 'normal' | 'slow';
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  staggerChildren = false,
  animation = 'fade-up',
  duration = 'normal',
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          // Add delay if provided
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, isVisible, threshold]);

  const getDurationClass = () => {
    switch (duration) {
      case 'fast': return 'transition-all duration-500';
      case 'slow': return 'transition-all duration-1000';
      default: return 'transition-all duration-700';
    }
  };

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return `opacity-0 ${isVisible ? 'opacity-100' : ''}`;
      case 'slide-in':
        return `opacity-0 translate-x-10 ${isVisible ? 'opacity-100 translate-x-0' : ''}`;
      case 'scale-in':
        return `opacity-0 scale-95 ${isVisible ? 'opacity-100 scale-100' : ''}`;
      case 'zoom-in':
        return `opacity-0 scale-90 ${isVisible ? 'opacity-100 scale-100' : ''}`;
      case 'fade-up':
      default:
        return `opacity-0 translate-y-10 ${isVisible ? 'opacity-100 translate-y-0' : ''}`;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        getAnimationClass(),
        getDurationClass(),
        staggerChildren && "stagger-children",
        className
      )}
    >
      {children}
    </div>
  );
};
