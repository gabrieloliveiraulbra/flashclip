import { cn } from "@/lib/utils";
import logoImage from "@/assets/flashclip-logo2.png";

interface LogoFlashClipProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  rounded?: boolean;
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-24 w-24",
  xl: "h-48 w-48 md:h-64 md:w-64",
};

export const LogoFlashClip = ({
  variant = "full",
  size = "md",
  className,
  rounded = false,
}: LogoFlashClipProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={logoImage}
        alt="FlashClip Logo"
        className={cn(
          sizeMap[size],
          "object-contain transition-all duration-300",
          rounded && "rounded-full",
          "hover:brightness-110 hover:-translate-y-0.5 hover:drop-shadow-[0_0_20px_rgba(109,74,255,0.6)]"
        )}
      />
      {variant === "full" && size !== "sm" && (
        <span className="text-2xl font-bold">
          Flash<span className="text-primary">Clip</span>
        </span>
      )}
    </div>
  );
};
