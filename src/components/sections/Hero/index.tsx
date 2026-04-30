import type { CTA, VariantProps } from "@/components/sections/types";
import { cx, imageBackground, themeGradient } from "@/components/sections/shared";

type HeroProps = VariantProps & {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  logoImage?: string;
  logoText: string;
  location?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  badge?: string;
  stats?: string[];
};

export default function Hero(props: HeroProps) {
  if (props.variant === "luxury") return <LuxuryHero {...props} />;
  if (props.variant === "bold") return <BoldHero {...props} />;
  return <BasicHero {...props} />;
}

function LuxuryHero({
  eyebrow,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  badge,
  stats = [],
  aiGenerated,
}: HeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--color-bg)] px-5 text-[var(--color-text)] md:px-8">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: themeGradient("120deg") }}
      />

      <div
        className="absolute inset-y-0 right-0 hidden w-[58%] bg-cover bg-center opacity-75 saturate-75 md:block"
        style={imageBackground(image, themeGradient())}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--color-bg) 0%, var(--color-bg) 34%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div className={cx(aiGenerated && "max-w-5xl")}>
          <div className="mb-7 flex flex-wrap items-center gap-4">
            {badge ? (
              <p className="border-l-2 border-[color:var(--color-primary)] pl-4 text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {badge}
              </p>
            ) : null}

            {eyebrow ? (
              <p className="text-xs font-black uppercase tracking-[0.28em] opacity-60">
                {eyebrow}
              </p>
            ) : null}
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.07em] md:text-7xl lg:text-8xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-7 max-w-2xl text-lg leading-8 opacity-70">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            {primaryCta ? (
              <a
                href={primaryCta.href || "#contact"}
                className="inline-flex justify-center bg-[var(--color-primary)] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-bg)] transition hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </a>
            ) : null}

            {secondaryCta ? (
              <a
                href={secondaryCta.href || "#services"}
                className="inline-flex justify-center border-b border-[color:var(--color-primary)] px-2 py-4 text-xs font-black uppercase tracking-[0.16em] text-[var(--color-text)] transition hover:opacity-65"
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>

          {stats.length > 0 ? (
            <div className="mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat} className="border-t border-[color:var(--color-primary)] pt-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] opacity-65">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="md:hidden">
          <div
            className="min-h-[380px] bg-cover bg-center"
            style={imageBackground(image, themeGradient())}
          />
        </div>
      </div>
    </section>
  );
}

function BasicHero({
  eyebrow,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  badge,
  stats = [],
}: HeroProps) {
  return (
    <section className="bg-[var(--color-bg)] px-5 text-[var(--color-text)] md:px-8">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 py-20 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            {badge ? (
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                {badge}
              </p>
            ) : null}

            {eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-55">
                {eyebrow}
              </p>
            ) : null}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 opacity-70">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta ? (
              <a
                href={primaryCta.href || "#contact"}
                className="inline-flex justify-center bg-[var(--color-primary)] px-6 py-4 font-bold text-[var(--color-bg)] transition hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </a>
            ) : null}

            {secondaryCta ? (
              <a
                href={secondaryCta.href || "#services"}
                className="inline-flex justify-center border border-[color:var(--color-primary)] px-6 py-4 font-bold text-[var(--color-text)] transition hover:-translate-y-0.5"
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>

          {stats.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.slice(0, 3).map((stat) => (
                <p key={stat} className="border-t border-[color:var(--color-primary)] pt-4 text-sm font-semibold opacity-70">
                  {stat}
                </p>
              ))}
            </div>
          ) : null}
        </div>

        <div
          className="min-h-[430px] bg-cover bg-center shadow-2xl"
          style={imageBackground(image, themeGradient())}
        />
      </div>
    </section>
  );
}

function BoldHero({
  eyebrow,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  badge,
  stats = [],
}: HeroProps) {
  return (
    <section className="overflow-hidden bg-[var(--color-bg)] px-5 text-[var(--color-text)] md:px-8">
      <div className="mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            {badge ? (
              <p className="mb-5 inline-block bg-[var(--color-primary)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-bg)]">
                {badge}
              </p>
            ) : null}

            {eyebrow ? (
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] md:text-8xl">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-6 max-w-2xl border-l-8 border-[color:var(--color-primary)] p-5 text-lg font-bold leading-8">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <a
                  href={primaryCta.href || "#contact"}
                  className="bg-[var(--color-text)] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[var(--color-bg)] transition hover:-translate-y-1"
                >
                  {primaryCta.label}
                </a>
              ) : null}

              {secondaryCta ? (
                <a
                  href={secondaryCta.href || "#services"}
                  className="border-4 border-[color:var(--color-text)] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] transition hover:-translate-y-1"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          </div>

          <div
            className="min-h-[440px] rotate-1 bg-cover bg-center"
            style={imageBackground(image, themeGradient())}
          />
        </div>

        {stats.length > 0 ? (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <p key={stat} className="border-t-4 border-[color:var(--color-primary)] pt-4 text-center font-black uppercase">
                {stat}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}