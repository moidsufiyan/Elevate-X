import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  staggerChildren?: boolean;
  animation?: "fade-in" | "fade-up" | "slide-in";
}

export const AnimatedSection = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  staggerChildren = false,
  animation = "fade-in",
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (staggerChildren && ref.current) {
              const children = ref.current.children;
              Array.from(children).forEach((child, index) => {
                (child as HTMLElement).style.animationDelay = `${
                  index * 100 + delay
                }ms`;
              });
            }
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
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
  }, [threshold, staggerChildren, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform",
        isVisible ? "animate-in" : "animate-out",
        animation === "fade-in" && "translate-y-0",
        animation === "fade-up" && "translate-y-4",
        animation === "slide-in" && "translate-x-4",
        staggerChildren && "stagger-children",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        transform: isVisible ? "none" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
};
