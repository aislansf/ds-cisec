import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-[#C7CCD6] bg-background px-3 py-2 text-sm text-[#9A9A9A] ring-offset-background transition-colors placeholder:text-[#9A9A9A] hover:border-[#C7CCD6] focus:border-[#1F3051] focus-visible:border-[#1F3051] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3051] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
