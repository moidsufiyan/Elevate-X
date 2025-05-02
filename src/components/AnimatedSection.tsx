import { ReactNode, useEffect, useRef } from "react";
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            if (staggerChildren) {
              const children = entry.target.children;
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, staggerChildren, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        animation === "fade-in" && "translate-y-0",
        animation === "fade-up" && "translate-y-4",
        animation === "slide-in" && "translate-x-4",
        staggerChildren && "stagger-children",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
