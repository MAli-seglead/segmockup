import type { MockupData } from "@/types/mockup";

function LogoMark({ data }: { data: MockupData }) {
  if (data.logoImage) {
    return (
      <div
        aria-label={data.businessName + " logo"}
        className="h-12 w-12 rounded-full bg-cover bg-center ring-1 ring-white/20"
        role="img"
        style={{ backgroundImage: 'url("' + data.logoImage + '")' }}
      />
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-semibold text-[#f7dfaa]">
      {(data.logoText || data.businessName).slice(0, 2).toUpperCase()}
    </div>
  );
}

export default function CarHero({ data }: { data: MockupData }) {
  const mainCta = data.mainCta || "Book A Viewing";
  const secondaryCta = data.secondaryCta || "View Cars";
  const headline = data.heroHeadline || "Premium cars for people who notice the details.";
  const description = data.heroDescription || "Curated rentals and sales with polished handovers, clear terms, and high-quality cars ready for the road.";
  const offer = data.specialOffer || "Priority handover slots this week";
  const heroImage = data.heroImage || data.backgroundImages?.[0];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-5 py-6 text-[#f4f1ea] md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(199,161,90,0.22),transparent_28%),linear-gradient(110deg,#050505_0%,#111111_48%,#050505_100%)]" />
      {heroImage ? (
        <div
          className="absolute inset-y-0 right-0 hidden w-[58%] bg-cover bg-center opacity-65 md:block"
          style={{ backgroundImage: 'url("' + heroImage + '")' }}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/20" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <LogoMark data={data} />
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
              {data.logoText || data.businessName}
            </p>
            <p className="mt-1 text-xs text-white/45">{data.slogan || "Selected cars. Serious presence."}</p>
          </div>
        </div>
        <div className="hidden items-center gap-5 text-sm text-white/55 md:flex">
          <span>{data.location || "Istanbul, Turkey"}</span>
          <span>{data.phone || "+90 555 000 00 00"}</span>
        </div>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl items-center gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div>
          <div className="inline-flex rounded-full border border-[#c7a15a]/30 bg-[#c7a15a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f7dfaa]">
            {offer}
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            {headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62 md:text-xl">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-[#f4f1ea] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#080808] transition hover:-translate-y-0.5 hover:bg-[#f7dfaa]">
              {mainCta}
            </button>
            <button className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-[#c7a15a] hover:text-[#f7dfaa]">
              {secondaryCta}
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div
            className="flex min-h-[360px] items-end rounded-[2rem] border border-white/10 bg-cover bg-center p-5 shadow-2xl shadow-black/50"
            style={
              heroImage
                ? { backgroundImage: 'url("' + heroImage + '")' }
                : { background: 'linear-gradient(140deg, #1d1d1d, ' + data.primaryColor + ', #060606)' }
            }
          >
            {!heroImage ? (
              <p className="rounded-full bg-black/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                Big car image
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
