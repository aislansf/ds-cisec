import { useTheme } from "@/hooks/useTheme";
import { sebraeCor as logoColor, sebraeWhite as logoWhite } from "@/assets/sebrae";
import { cn } from "@/lib/utils";

type Variant = "auto" | "color" | "white" | "mono";

interface SebraeLogoProps {
  /**
   * "auto"  — alterna entre cor (light) e branco (dark) via tema
   * "color" — sempre colorido
   * "white" — sempre branco
   * "mono"  — preto via filter (use opacity para tons)
   */
  variant?: Variant;
  /** Largura da caixa (px ou qualquer unidade CSS). Default 100. */
  width?: number | string;
  /** Altura da caixa (px ou qualquer unidade CSS). Default 80. */
  height?: number | string;
  /** Opacidade 0–1. */
  opacity?: number;
  /** Centraliza horizontalmente como bloco. Default true. */
  centered?: boolean;
  className?: string;
  alt?: string;
}

/**
 * Marca institucional do SEBRAE-CE.
 * Sempre usa object-contain dentro de uma caixa width×height para preservar
 * proporção em qualquer breakpoint, sem distorção.
 */
export function SebraeLogo({
  variant = "auto",
  width = 100,
  height = 80,
  opacity,
  centered = true,
  className,
  alt = "SEBRAE-CE",
}: SebraeLogoProps) {
  const { theme } = useTheme();
  const src =
    variant === "white"
      ? logoWhite
      : variant === "color" || variant === "mono"
      ? logoColor
      : theme === "dark"
      ? logoWhite
      : logoColor;

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        centered && "mx-auto",
        className
      )}
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
        className="w-full h-full object-contain"
        style={{
          opacity,
          filter: variant === "mono" ? "brightness(0)" : undefined,
        }}
      />
    </div>
  );
}

export default SebraeLogo;