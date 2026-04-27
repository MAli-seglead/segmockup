import type { MockupData } from "@/types/mockup";

export default function DentistHero({ data }: { data: MockupData }) {
  const mainCta = data.mainCta || "Book Free Consultation";
  const secondaryCta = data.secondaryCta || "View Services";
  const location = data.location || "Istanbul, Turkey";
  const heroHeadline =
    data.heroHeadline || `Calm, clear dental care for ${data.businessName}.`;
  const heroDescription =
    data.heroDescription ||
    data.shortDescription ||
    "Premium dental care for families and professionals";
  const specialOffer = data.specialOffer || "Free smile assessment this month";
  const logoText = data.logoText || data.businessName;
  const slogan = data.slogan || "Designed around patient trust";
  const backgroundImage = data.backgroundImages?.[0];

  return (
    <section
      className="relative px-6 py-6 md:py-8"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(248,250,252,0.88), rgba(248,250,252,0.94)), url("${backgroundImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { background: data.secondaryColor }
      }
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            {data.logoImage ? (
              <div
                className="h-10 w-10 rounded-full bg-cover bg-center ring-1 ring-slate-200"
                style={{ backgroundImage: `url("${data.logoImage}")` }}
              />
            ) : (
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: data.primaryColor }}
              >
                {logoText.slice(0, 2)}
              </div>
            )}

            <div>
              <p className="text-sm font-semibold text-slate-950">
                {logoText}
              </p>
              <p className="text-xs text-slate-500">{location}</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-sm text-slate-500 md:flex">
            <span>Services</span>
            <span>About</span>
            <span>Reviews</span>
            <span>Contact</span>
          </div>

          <button
            className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm"
            style={{ background: data.primaryColor }}
          >
            {mainCta}
          </button>
        </nav>

        <div className="grid gap-12 py-20 md:grid-cols-[1fr_0.85fr] md:items-center md:py-28">
          <div>
            <div className="flex flex-wrap gap-3">
              <p
                className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase text-slate-600 shadow-sm"
                style={{ color: data.primaryColor }}
              >
                Modern Dental Care
              </p>

              <p className="inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                {specialOffer}
              </p>
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-none text-slate-950 md:text-7xl">
              {heroHeadline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {heroDescription}
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-500">
              {slogan}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-full px-8 py-4 font-semibold text-white shadow-lg shadow-slate-300"
                style={{ background: data.primaryColor }}
              >
                {mainCta}
              </button>

              <button className="rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-950 shadow-sm">
                {secondaryCta}
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200">
            <div className="rounded-[1.5rem] bg-slate-50 p-6">
              <div
                className="flex h-64 items-center justify-center rounded-[1.25rem] bg-cover bg-center md:h-80"
                style={
                  data.heroImage
                    ? { backgroundImage: `url("${data.heroImage}")` }
                    : {
                        background: `linear-gradient(145deg, ${data.primaryColor}, #dbeafe 58%, #ffffff)`,
                      }
                }
              >
                {!data.heroImage ? (
                  <div className="rounded-2xl bg-white/65 px-5 py-4 text-center backdrop-blur">
                    <p className="text-2xl">+</p>
                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      Hero image placeholder
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">New patient</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">
                    24h
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    request response
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Focus</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">
                    Trust
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    before treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
