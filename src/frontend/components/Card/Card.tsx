
// Moving the Card component to the frontend components directory
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'elevated' | 'glass';
  interactive?: boolean;
  children: React.ReactNode;
}

export function Card({ 
  variant = 'default', 
  interactive = false,
  className,
  children,
  ...props 
}: CardProps) {
  return (
    <div 
      className={cn(
        "rounded-lg overflow-hidden",
        {
          "bg-card text-card-foreground": variant === 'default',
          "border border-border bg-transparent": variant === 'outline',
          "bg-card text-card-foreground shadow-card": variant === 'elevated',
          "backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/10 dark:border-gray-800/30 shadow-glass": variant === 'glass',
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-md": interactive,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-6 py-4 flex flex-col space-y-1", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-6 py-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-6 py-4 border-t", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({
  src,
  alt = "",
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div className="w-full aspect-video relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover", className)}
        {...props}
      />
    </div>
  );
}
