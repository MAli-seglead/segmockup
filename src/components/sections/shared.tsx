import type { CSSProperties } from "react";
import type { SectionVariant } from "@/types/mockup";
import type { ColorTheme } from "@/components/sections/types";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function variantFromStyle(style: string | undefined): SectionVariant {
  if (style === "luxury" || style === "bold") {
    return style;
  }

  return "basic";
}

type ThemeStyle = CSSProperties & {
  "--color-primary": string;
  "--color-secondary": string;
  "--color-accent": string;
  "--color-bg": string;
  "--color-text": string;
};

export function themeStyle(theme: ColorTheme): ThemeStyle {
  return {
    "--color-primary": theme.primary,
    "--color-secondary": theme.secondary,
    "--color-accent": theme.accent,
    "--color-bg": theme.background,
    "--color-text": theme.text,
  };
}

export function imageBackground(image: string | undefined, fallback: string) {
  return image
    ? {
        backgroundImage:
          'linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.35)), url("' +
          image +
          '")',
      }
    : { background: fallback };
}

export function themeGradient(angle = "135deg") {
  return (
    "linear-gradient(" +
    angle +
    ", var(--color-primary), var(--color-accent), var(--color-bg))"
  );
}

export function LogoBlock({
  image,
  label,
  variant,
}: {
  image?: string;
  label: string;
  variant: SectionVariant;
}) {
  if (image) {
    return (
      <div
        aria-label={label + " logo"}
        className={cx(
          "h-11 w-11 shrink-0 bg-cover bg-center",
          variant === "basic" && "rounded-xl ring-1 ring-[color:var(--color-primary)]/30",
          variant === "luxury" && "rounded-full ring-1 ring-[color:var(--color-accent)]/40",
          variant === "bold" && "rounded-none ring-2 ring-[color:var(--color-text)]",
        )}
        role="img"
        style={{ backgroundImage: 'url("' + image + '")' }}
      />
    );
  }

  return (
    <div
      className={cx(
        "flex h-11 w-11 shrink-0 items-center justify-center text-sm font-black uppercase",
        variant === "basic" && "rounded-xl bg-[var(--color-secondary)] text-[var(--color-text)]",
        variant === "luxury" && "rounded-full border border-[color:var(--color-accent)]/40 bg-[color:var(--color-secondary)]/70 text-[var(--color-accent)] backdrop-blur",
        variant === "bold" && "rounded-none bg-[var(--color-primary)] text-[var(--color-text)] shadow-[6px_6px_0_var(--color-accent)]",
      )}
    >
      {label.slice(0, 2)}
    </div>
  );
}
