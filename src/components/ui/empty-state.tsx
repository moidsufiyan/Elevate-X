
import React from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionIcon?: React.ReactNode;
  onAction?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionIcon,
  onAction,
  className,
  size = "md"
}: EmptyStateProps) {
  const sizeClasses = {
    sm: {
      padding: "py-6",
      icon: "h-8 w-8",
      title: "text-base",
      description: "text-xs"
    },
    md: {
      padding: "py-8",
      icon: "h-12 w-12",
      title: "text-lg",
      description: "text-sm"
    },
    lg: {
      padding: "py-12",
      icon: "h-16 w-16",
      title: "text-xl",
      description: "text-base"
    }
  };

  return (
    <div className={cn(
      "w-full flex flex-col items-center justify-center text-center",
      sizeClasses[size].padding,
      className
    )}>
      {icon && (
        <div className={cn(
          "flex items-center justify-center rounded-full bg-muted p-3 mb-4",
          sizeClasses[size].icon
        )}>
          {icon}
        </div>
      )}
      <h3 className={cn("font-medium mb-1", sizeClasses[size].title)}>
        {title}
      </h3>
      <p className={cn("text-muted-foreground max-w-sm mb-4", sizeClasses[size].description)}>
        {description}
      </p>
      {actionLabel && onAction && (
        <Button
          leftIcon={actionIcon}
          onClick={onAction}
          size={size === "sm" ? "sm" : "default"}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
