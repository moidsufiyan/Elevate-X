import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface BaseButtonProps {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}

interface ButtonProps
  extends BaseButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: false;
}

interface DivButtonProps
  extends BaseButtonProps,
    Omit<HTMLAttributes<HTMLDivElement>, keyof BaseButtonProps> {
  asChild: true;
}

type Props = ButtonProps | DivButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      variant = "default",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      asChild,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variant === "default" &&
        "bg-primary text-primary-foreground hover:bg-primary/90",
      variant === "outline" &&
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
      variant === "link" && "text-primary underline-offset-4 hover:underline",
      size === "sm" && "h-9 px-3 text-sm",
      size === "md" && "h-10 px-4 py-2",
      size === "lg" && "h-11 px-8 text-lg",
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (asChild) {
      return (
        <div
          className={baseStyles}
          {...(props as HTMLAttributes<HTMLDivElement>)}
        >
          {content}
        </div>
      );
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        disabled={disabled || isLoading}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
