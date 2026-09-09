import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-control-height w-full rounded-theme-sm border border-border bg-surface-elevated px-component-gap text-body text-foreground outline-none transition-colors duration-motion-fast ease-editorial placeholder:text-muted-foreground focus:border-strong disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
