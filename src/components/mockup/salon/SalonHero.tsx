import type { MockupData } from "@/types/mockup";

export default function SalonHero({ data }: { data: MockupData }) {
  const mainCta = data.mainCta || "Book Free Consultation";
  const secondaryCta = data.secondaryCta || "Explore Treatments";
  const location = data.location || "Istanbul, Turkey";
  const heroHeadline =
    data.heroHeadline || `A boutique beauty experience for ${data.businessName}.`;
  const heroDescription =
    data.heroDescription ||
    data.shortDescription ||
    "Premium dental care for families and professionals";
  const specialOffer = data.specialOffer || "Free smile assessment this month";
  const logoText = data.logoText || data.businessName;
  const slogan = data.slogan || "Beauty with a boutique point of view";
  const backgroundImage = data.backgroundImages?.[0];

  return (
    <section
      className="bg-[#17130f] px-5 py-5 text-[#f7efe5] md:px-6"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(23,19,15,0.86), rgba(23,19,15,0.94)), url("${backgroundImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between border-b border-[#f7efe5]/15 pb-5">
          <div className="flex items-center gap-3">
            {data.logoImage ? (
              <div
                className="h-10 w-10 rounded-full bg-cover bg-center ring-1 ring-[#f7efe5]/20"
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
              <p className="font-serif text-xl">{logoText}</p>
              <p className="text-xs text-[#f7efe5]/45">{location}</p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-[#f7efe5]/60 md:flex">
            <span>Menu</span>
            <span>Studio</span>
            <span>Gallery</span>
            <span>Booking</span>
          </div>

          <button
            className="rounded-full px-5 py-2 text-sm font-semibold text-white"
            style={{ background: data.primaryColor }}
          >
            {mainCta}
          </button>
        </nav>

        <div className="grid gap-8 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-end md:py-20">
          <div>
            <div className="flex flex-wrap gap-3">
              <p
                className="text-xs font-bold uppercase text-[#d9c7b1]"
                style={{ color: data.primaryColor }}
              >
                Boutique Beauty Studio
              </p>
              <p className="rounded-full border border-[#f7efe5]/15 px-3 py-1 text-xs text-[#f7efe5]/65">
                {specialOffer}
              </p>
            </div>

            <h1 className="mt-5 font-serif text-5xl leading-none md:text-7xl">
              {heroHeadline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#f7efe5]/65">
              {heroDescription}
            </p>

            <p className="mt-4 text-sm font-semibold text-[#f7efe5]/45">
              {slogan}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-full px-7 py-3 font-semibold text-white"
                style={{ background: data.primaryColor }}
              >
                {mainCta}
              </button>

              <button className="rounded-full border border-[#f7efe5]/20 px-7 py-3 font-semibold text-[#f7efe5]">
                {secondaryCta}
              </button>
            </div>
          </div>

          <div className="grid min-h-[460px] grid-cols-[0.8fr_1fr] gap-4">
            <div className="flex flex-col gap-4 pt-12">
              <div className="h-40 rounded-t-full bg-[#f7efe5]/12" />
              <div
                className="flex-1 rounded-b-full"
                style={{
                  background: `linear-gradient(180deg, ${data.primaryColor}, #3b2418)`,
                }}
              />
            </div>

            <div
              className="flex items-center justify-center rounded-t-full border border-[#f7efe5]/15 bg-cover bg-center"
              style={
                data.heroImage
                  ? { backgroundImage: `url("${data.heroImage}")` }
                  : {
                      background: `linear-gradient(160deg, ${data.primaryColor}, #211711 52%, #f7efe5)`,
                    }
              }
            >
              {!data.heroImage ? (
                <div className="rounded-full border border-[#f7efe5]/15 bg-[#17130f]/65 px-5 py-3 text-center backdrop-blur">
                  <p className="text-xl">+</p>
                  <p className="mt-1 text-xs font-semibold text-[#f7efe5]/70">
                    Hero image
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
