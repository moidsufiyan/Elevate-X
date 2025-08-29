import { useScrollToTop } from "@/hooks/useScrollToTop";

interface ScrollToTopWrapperProps {
  children: React.ReactNode;
}

export const ScrollToTopWrapper = ({ children }: ScrollToTopWrapperProps) => {
  useScrollToTop();
  return <>{children}</>;
};
