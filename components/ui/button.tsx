import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "ghost";
};

export function Button({
  asChild,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-[22px] text-sm font-medium transition duration-[250ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&_svg]:transition-transform [&_svg]:duration-[250ms] hover:[&_svg]:translate-x-0.5",
        variant === "primary" &&
          "bg-foreground text-background shadow-[0_14px_36px_hsl(var(--shadow)/.14)] hover:bg-accent hover:text-white",
        variant === "ghost" &&
          "border border-line bg-foreground/5 text-foreground backdrop-blur-xl hover:bg-foreground/10",
        className
      )}
      {...props}
    />
  );
}
