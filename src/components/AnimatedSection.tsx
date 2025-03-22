
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  staggerChildren?: boolean;
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  staggerChildren = false,
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

  return (
    <div
      ref={sectionRef}
      className={cn(
        "appear-animation",
        isVisible && "visible",
        staggerChildren && "stagger-children",
        className
      )}
    >
      {children}
    </div>
  );
};
