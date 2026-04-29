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

function LuxuryHero({ eyebrow, title, subtitle, image, primaryCta, secondaryCta, badge, stats = [], aiGenerated }: HeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--color-bg)] px-5 py-6 text-[var(--color-text)] md:px-8">
      <div className="absolute inset-0 opacity-35" style={{ background: themeGradient("120deg") }} />
      <div className="absolute inset-y-0 right-0 hidden w-[56%] bg-cover bg-center opacity-60 saturate-75 md:block" style={imageBackground(image, themeGradient())} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--color-bg), color-mix(in srgb, var(--color-bg) 88%, transparent), transparent)" }} />
      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div className={cx(aiGenerated && "max-w-4xl")}>
          {badge ? <p className="mb-5 inline-flex rounded-full border border-[color:var(--color-primary)] bg-[var(--color-secondary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">{badge}</p> : null}
          {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent)]">{eyebrow}</p> : null}
          <h1 className="mt-6 max-w-5xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">{title}</h1>
          {subtitle ? <p className="mt-7 max-w-2xl text-lg leading-8 opacity-75 md:text-xl">{subtitle}</p> : null}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {primaryCta ? <button className="rounded-full bg-[var(--color-primary)] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-bg)] transition hover:-translate-y-0.5">{primaryCta.label}</button> : null}
            {secondaryCta ? <button className="rounded-full border border-[color:var(--color-primary)] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text)] transition hover:-translate-y-0.5 hover:bg-[var(--color-secondary)]">{secondaryCta.label}</button> : null}
          </div>
          {stats.length > 0 ? <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">{stats.slice(0, 3).map((stat) => <div key={stat} className="rounded-2xl border border-[color:var(--color-primary)] bg-[var(--color-secondary)] p-4 backdrop-blur"><p className="text-sm font-semibold opacity-80">{stat}</p></div>)}</div> : null}
        </div>
        <div className="md:hidden"><div className="min-h-[360px] rounded-[2rem] border border-[color:var(--color-primary)] bg-cover bg-center shadow-2xl" style={imageBackground(image, themeGradient())} /></div>
      </div>
    </section>
  );
}

function BasicHero({ eyebrow, title, subtitle, image, primaryCta, secondaryCta, badge, stats = [] }: HeroProps) {
  return (
    <section className="bg-[var(--color-bg)] px-5 py-6 text-[var(--color-text)] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            {badge ? <p className="mb-4 inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm font-medium text-[var(--color-text)]">{badge}</p> : null}
            {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">{eyebrow}</p> : null}
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{title}</h1>
            {subtitle ? <p className="mt-5 max-w-2xl text-lg leading-8 opacity-70">{subtitle}</p> : null}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? <button className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-bg)] transition hover:opacity-85">{primaryCta.label}</button> : null}
              {secondaryCta ? <button className="rounded-xl border border-[color:var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-secondary)]">{secondaryCta.label}</button> : null}
            </div>
            {stats.length > 0 ? <div className="mt-8 grid gap-3 sm:grid-cols-3">{stats.slice(0, 3).map((stat) => <p key={stat} className="rounded-xl bg-[var(--color-secondary)] p-4 text-sm font-medium opacity-80">{stat}</p>)}</div> : null}
          </div>
          <div className="min-h-[340px] rounded-2xl bg-cover bg-center" style={imageBackground(image, themeGradient())} />
        </div>
      </div>
    </section>
  );
}

function BoldHero({ eyebrow, title, subtitle, image, primaryCta, secondaryCta, badge, stats = [] }: HeroProps) {
  return (
    <section className="overflow-hidden bg-[var(--color-bg)] px-5 py-5 text-[var(--color-text)] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
          <div className="relative z-10">
            {badge ? <p className="mb-5 inline-block bg-[var(--color-primary)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-bg)]">{badge}</p> : null}
            {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">{eyebrow}</p> : null}
            <h1 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-8xl">{title}</h1>
            {subtitle ? <p className="mt-6 max-w-2xl border-l-8 border-[color:var(--color-primary)] bg-[var(--color-secondary)] p-5 text-lg font-bold leading-8 shadow-[8px_8px_0_var(--color-primary)]">{subtitle}</p> : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? <button className="border-4 border-[color:var(--color-text)] bg-[var(--color-text)] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[var(--color-bg)] shadow-[6px_6px_0_var(--color-primary)] transition hover:-translate-y-1">{primaryCta.label}</button> : null}
              {secondaryCta ? <button className="border-4 border-[color:var(--color-text)] bg-[var(--color-secondary)] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] shadow-[6px_6px_0_var(--color-primary)] transition hover:-translate-y-1">{secondaryCta.label}</button> : null}
            </div>
          </div>
          <div className="min-h-[420px] rotate-1 border-4 border-[color:var(--color-text)] bg-cover bg-center shadow-[14px_14px_0_var(--color-primary)]" style={imageBackground(image, themeGradient())} />
        </div>
        {stats.length > 0 ? <div className="grid gap-3 pb-8 md:grid-cols-3">{stats.slice(0, 3).map((stat) => <p key={stat} className="border-4 border-[color:var(--color-text)] bg-[var(--color-secondary)] p-4 text-center font-black uppercase shadow-[6px_6px_0_var(--color-primary)]">{stat}</p>)}</div> : null}
      </div>
    </section>
  );
}
