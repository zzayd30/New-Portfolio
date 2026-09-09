import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-textarea w-full resize-y rounded-theme-sm border border-border bg-surface-elevated px-component-gap py-control-y text-body text-foreground outline-none transition-colors duration-motion-fast ease-editorial placeholder:text-muted-foreground focus:border-strong disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
