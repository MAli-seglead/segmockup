import Link from "next/link";

const features = [
  {
    number: "01",
    title: "AI-generated first drafts",
    description:
      "Turn a short client brief into sales-focused copy, section structure, color direction, and a usable first mockup.",
  },
  {
    number: "02",
    title: "Manual customization",
    description:
      "Adjust industry, style, services, imagery, CTAs, reviews, and brand colors before you show the preview.",
  },
  {
    number: "03",
    title: "Client-ready layouts",
    description:
      "Build polished preview pages for sales calls, proposals, and fast agency onboarding conversations.",
  },
];

const useCases = ["Salon", "Dentist", "Car Rental", "Restaurant", "Local Business"];

const workflow = [
  {
    number: "01",
    title: "Add client info",
    description: "Business type, audience, offer, services, location, and brand tone.",
  },
  {
    number: "02",
    title: "Choose style & sections",
    description: "Pick luxury, basic, or bold and shape the sections around conversion.",
  },
  {
    number: "03",
    title: "Generate mockup",
    description: "Create a premium client preview with copy, visuals, color theme, and CTA flow.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020403] text-[#f7f6ed]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_72%_8%,rgba(75,255,203,0.12),transparent_25%),radial-gradient(circle_at_20%_22%,rgba(75,255,203,0.06),transparent_30%),linear-gradient(180deg,#020403_0%,#050706_48%,#020403_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:84px_84px] opacity-40" />

      <header className="border-b border-white/[0.06] bg-[#020403]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 md:px-8">
          <Link href="/" className="text-[11px] font-black uppercase tracking-[0.24em] text-white">
            SEGMOCKUP.
          </Link>

          <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45 md:flex">
            <a href="#features" className="transition hover:text-[#55f5c6]">
              Features
            </a>
            <a href="#workflow" className="transition hover:text-[#55f5c6]">
              Workflow
            </a>
            <Link href="/mockup" className="transition hover:text-[#55f5c6]">
              Mockup Builder
            </Link>
          </nav>

          <Link
            href="/mockup"
            className="rounded-sm bg-[#55f5c6] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#03110d] shadow-[0_0_28px_rgba(85,245,198,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8fffe0]"
          >
            Create Mockup
          </Link>
        </div>
      </header>

      <section className="relative px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
        <p className="pointer-events-none absolute left-1/2 top-28 -z-10 -translate-x-1/2 text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.025]">
          MOCKUP
        </p>

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="inline-flex border border-[#55f5c6]/20 bg-[#55f5c6]/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#55f5c6]">
              # Premium Client Mockup Builder
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#f7f6ed] md:text-7xl">
              Create high-converting client website mockups in minutes
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              SegMockup helps you generate premium, sales-focused website
              mockups for salons, dentists, car rentals, and local businesses.
              Build client-ready previews using AI or manual control.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/mockup"
                className="inline-flex items-center justify-center rounded-sm bg-[#55f5c6] px-6 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#03110d] shadow-[0_0_34px_rgba(85,245,198,0.2)] transition hover:-translate-y-0.5 hover:bg-[#8fffe0]"
              >
                Create Mockup
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-sm border border-white/15 bg-white/[0.025] px-6 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-white/75 transition hover:-translate-y-0.5 hover:border-[#55f5c6]/45 hover:text-[#55f5c6]"
              >
                See Features
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["AI or manual", "Sales focused", "Client ready"].map((item) => (
                <div
                  key={item}
                  className="border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-white/45"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-[#55f5c6]/10 blur-3xl" />
            <div className="relative border border-[#55f5c6]/20 bg-[#080d0b]/90 p-3 shadow-[0_0_80px_rgba(85,245,198,0.08)] backdrop-blur-xl">
              <div className="border border-white/[0.08] bg-[#030504]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#55f5c6]">
                      Live client website draft
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white/85">
                      SegLead Studio Preview
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#55f5c6]" />
                    Ready
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="min-h-64 border border-white/[0.08] bg-[radial-gradient(circle_at_70%_20%,rgba(85,245,198,0.18),transparent_28%),linear-gradient(135deg,#050807,#111917)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="border border-[#55f5c6]/20 bg-[#55f5c6]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#55f5c6]">
                        Generated Hero
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                        Luxury Variant
                      </p>
                    </div>
                    <p className="mt-20 max-w-sm text-4xl font-semibold leading-none tracking-[-0.04em] text-white">
                      Premium first draft built for conversion.
                    </p>
                    <div className="mt-6 flex gap-2">
                      <span className="h-9 w-28 rounded-sm bg-[#55f5c6] shadow-[0_0_28px_rgba(85,245,198,0.2)]" />
                      <span className="h-9 w-24 rounded-sm border border-white/15" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Offer Block", "Services", "Testimonials", "Booking CTA"].map((item) => (
                      <div
                        key={item}
                        className="border border-white/[0.07] bg-white/[0.025] p-4"
                      >
                        <p className="text-sm font-semibold text-white/80">
                          {item}
                        </p>
                        <div className="mt-4 h-1.5 rounded-full bg-white/10" />
                        <div className="mt-2 h-1.5 w-2/3 rounded-full bg-white/[0.06]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
              # Features
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] text-white md:text-6xl">
              Visionunuzu mockupluyoruz.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="border border-white/[0.07] bg-[#070b0a] p-6 transition hover:-translate-y-1 hover:border-[#55f5c6]/30 hover:bg-[#08110e]"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#55f5c6]">
                  #{feature.number}
                </p>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/45">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 md:px-8 md:py-28">
        <p className="pointer-events-none absolute left-0 top-10 -z-10 text-[18vw] font-black leading-none tracking-[-0.08em] text-white/[0.025]">
          2026
        </p>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
                # Use Cases
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-none tracking-[-0.04em] text-white md:text-6xl">
                Local client niches, one preview engine.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/45">
              Start with a niche, then shape the offer, structure, visuals, and
              conversion path for the client.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((item, index) => (
              <div
                key={item}
                className="group border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#55f5c6]/35 hover:bg-[#55f5c6]/[0.06]"
              >
                <p className="text-[11px] font-black tracking-[0.22em] text-[#55f5c6]">
                  0{index + 1}
                </p>
                <p className="mt-10 text-xl font-semibold text-white/75 group-hover:text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
              # Workflow
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] text-white md:text-6xl">
              Kusursuz süreç, üstün sonuç.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              A compact flow for turning client information into a polished,
              sales-ready website preview.
            </p>
          </div>

          <div className="relative border-l border-[#55f5c6]/25 pl-8">
            {workflow.map((item, index) => (
              <article
                key={item.number}
                className={index === workflow.length - 1 ? "relative pb-0" : "relative pb-14"}
              >
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border border-[#55f5c6] bg-[#020403] shadow-[0_0_22px_rgba(85,245,198,0.35)]" />
                <p className="text-[11px] font-black tracking-[0.24em] text-[#55f5c6]">
                  #{item.number}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
            # Ready To Build
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.04em] text-white md:text-6xl">
            Vizyonunuzu birlikte mockuplayalım.
          </h2>
          <Link
            href="/mockup"
            className="mt-9 inline-flex rounded-sm bg-[#55f5c6] px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#03110d] shadow-[0_0_34px_rgba(85,245,198,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8fffe0]"
          >
            Create Mockup
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] bg-[#020403] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-[12px] text-white/35 md:flex-row md:items-center">
          <p className="font-black uppercase tracking-[0.2em] text-white">SEGMOCKUP.</p>
          <p>Built for fast client website previews.</p>
        </div>
      </footer>
    </main>
  );
}
