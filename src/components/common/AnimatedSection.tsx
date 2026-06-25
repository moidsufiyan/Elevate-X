import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  staggerChildren?: boolean;
  animation?: "fade-in" | "fade-up" | "slide-in";
  duration?: "slow" | "normal" | "fast" | string;
  id?: string;
}

const durationMap: Record<string, string> = {
  slow: "0.9s",
  normal: "0.6s",
  fast: "0.35s",
};

export const AnimatedSection = ({
  children,
  className,
  threshold = 0.08,
  delay = 0,
  staggerChildren = false,
  animation = "fade-in",
  duration = "normal",
  id,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const resolvedDuration = durationMap[duration] ?? duration;

  useEffect(() => {
    let rafId1: number;
    let rafId2: number;
    let timerId: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Double requestAnimationFrame guarantees the browser has
            // committed at least one frame with opacity:0 / the initial
            // transform BEFORE we flip isVisible to true.
            // Without this, React sets both the transition property AND
            // the final opacity in the same render, so the browser skips
            // the interpolation and shows a hard pop.
            rafId1 = requestAnimationFrame(() => {
              rafId2 = requestAnimationFrame(() => {
                timerId = setTimeout(() => {
                  setIsVisible(true);
                  if (ref.current) observer.unobserve(ref.current);
                }, delay);
              });
            });
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
      clearTimeout(timerId);
    };
  }, [threshold, delay]);

  const getInitialTransform = () => {
    if (animation === "fade-up") return "translateY(28px)";
    if (animation === "slide-in") return "translateX(28px)";
    return "none";
  };

  return (
    <div
      ref={ref}
      id={id}
      className={cn(staggerChildren && "stagger-children", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getInitialTransform(),
        // Transition is ALWAYS active — the previous `transition: "none"`
        // when not visible was the bug causing instant pops.
        transition: `opacity ${resolvedDuration} cubic-bezier(0.22, 1, 0.36, 1), transform ${resolvedDuration} cubic-bezier(0.22, 1, 0.36, 1)`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
