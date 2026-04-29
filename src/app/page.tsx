import Link from "next/link";

const categories = [
  {
    number: "01",
    title: "Dentist",
    description:
      "Calm, trustworthy website previews for clinics, treatments, and appointment-focused landing pages.",
  },
  {
    number: "02",
    title: "Salon",
    description:
      "Elegant beauty previews with visual-first sections, service blocks, and booking-focused CTAs.",
  },
  {
    number: "03",
    title: "Car Rental",
    description:
      "Premium vehicle pages for rentals, inventory showcases, enquiries, and high-value local leads.",
  },
  {
    number: "04",
    title: "Local Business",
    description:
      "Fast client-ready previews for restaurants, studios, services, and location-based brands.",
  },
];

const templateStyles = [
  {
    title: "Luxury",
    description:
      "Dark, cinematic, polished layouts for clients who need a premium first impression.",
  },
  {
    title: "Basic",
    description:
      "Clean, simple, clear website previews focused on trust, clarity, and fast approval.",
  },
  {
    title: "Bold",
    description:
      "High-impact layouts for brands that need stronger contrast, energy, and attention.",
  },
];

const steps = [
  {
    number: "01",
    title: "Add client info",
    description:
      "Enter business type, offer, audience, services, and brand tone.",
  },
  {
    number: "02",
    title: "Choose direction",
    description:
      "Pick the industry and visual style: luxury, basic, or bold.",
  },
  {
    number: "03",
    title: "Generate preview",
    description:
      "Create a polished website mockup with structure, copy, colors, and CTA flow.",
  },
  {
    number: "04",
    title: "Send to client",
    description:
      "Use the preview for sales calls, proposals, onboarding, or quick approval.",
  },
];

const benefits = [
  "AI or manual builder",
  "Client-ready previews",
  "Local business templates",
  "Fast sales presentation",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020403] text-[#f7f6ed]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_74%_7%,rgba(85,245,198,0.13),transparent_25%),radial-gradient(circle_at_17%_18%,rgba(85,245,198,0.055),transparent_30%),linear-gradient(180deg,#020403_0%,#050706_50%,#020403_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:84px_84px] opacity-35" />

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#020403]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 md:px-8">
          <Link
            href="/"
            className="text-[12px] font-black uppercase tracking-[0.22em] text-white"
          >
            SegMockup
          </Link>

          <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45 md:flex">
            <a href="#categories" className="transition hover:text-[#55f5c6]">
              Categories
            </a>
            <a href="#styles" className="transition hover:text-[#55f5c6]">
              Styles
            </a>
            <a href="#workflow" className="transition hover:text-[#55f5c6]">
              How it works
            </a>
            <a
              href="https://seglead.com"
              className="transition hover:text-[#55f5c6]"
            >
              SegLead
            </a>
          </nav>

          <Link
            href="/mockup"
            className="rounded-sm bg-[#55f5c6] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.13em] text-[#03110d] shadow-[0_0_30px_rgba(85,245,198,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8fffe0]"
          >
            Open Builder
          </Link>
        </div>
      </header>

      <section className="relative px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
        <p className="pointer-events-none absolute left-1/2 top-24 -z-10 -translate-x-1/2 text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.025]">
          MOCKUP
        </p>

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex border border-[#55f5c6]/20 bg-[#55f5c6]/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#55f5c6]">
              Premium mockup app by SegLead
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-[#f7f6ed] md:text-7xl lg:text-8xl">
              Create website mockups fast.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              SegMockup helps you turn a short client brief into a polished
              website preview for salons, dentists, car rentals, restaurants,
              and local businesses. Use AI or manual control, then show the
              client a sharp first impression.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/mockup"
                className="inline-flex items-center justify-center rounded-sm bg-[#55f5c6] px-6 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#03110d] shadow-[0_0_34px_rgba(85,245,198,0.2)] transition hover:-translate-y-0.5 hover:bg-[#8fffe0]"
              >
                Open Builder
              </Link>

              <a
                href="#categories"
                className="inline-flex items-center justify-center rounded-sm border border-white/15 bg-white/[0.025] px-6 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-white/75 transition hover:-translate-y-0.5 hover:border-[#55f5c6]/45 hover:text-[#55f5c6]"
              >
                View Categories
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-white/45"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-[#55f5c6]/10 blur-3xl" />

            <div className="relative border border-[#55f5c6]/20 bg-[#07100d]/90 p-3 shadow-[0_0_80px_rgba(85,245,198,0.08)] backdrop-blur-xl">
              <div className="border border-white/[0.08] bg-[#030504]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#55f5c6]">
                      SegMockup Builder
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white/85">
                      Website preview workspace
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#55f5c6]" />
                    Ready
                  </div>
                </div>

                <div className="grid gap-4 p-5 lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="space-y-3">
                    {["Client", "Style", "Sections", "Images"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className="border border-white/[0.07] bg-white/[0.025] p-4"
                        >
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#55f5c6]">
                            0{index + 1}
                          </p>
                          <p className="mt-5 text-sm font-semibold text-white/75">
                            {item}
                          </p>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="min-h-80 border border-white/[0.08] bg-[radial-gradient(circle_at_72%_18%,rgba(85,245,198,0.18),transparent_28%),linear-gradient(135deg,#050807,#111917)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="border border-[#55f5c6]/20 bg-[#55f5c6]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#55f5c6]">
                        Live Preview
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                        Luxury Variant
                      </p>
                    </div>

                    <p className="mt-20 max-w-md text-4xl font-semibold leading-none tracking-[-0.04em] text-white">
                      A premium first draft your client can understand
                      instantly.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <span className="h-20 border border-white/10 bg-white/[0.05]" />
                      <span className="h-20 border border-white/10 bg-white/[0.05]" />
                    </div>

                    <div className="mt-5 h-11 w-36 bg-[#55f5c6] shadow-[0_0_28px_rgba(85,245,198,0.2)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="categories" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
                Categories
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none tracking-[-0.05em] text-white md:text-6xl">
                Built for local business previews.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/45">
              Choose a niche, shape the content, and generate a page that feels
              specific to the client instead of generic.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group min-h-64 border border-white/[0.07] bg-[#070b0a] p-6 transition hover:-translate-y-1 hover:border-[#55f5c6]/35 hover:bg-[#08110e]"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#55f5c6]">
                  {category.number}
                </p>

                <h3 className="mt-16 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="styles" className="relative px-5 py-20 md:px-8 md:py-28">
        <p className="pointer-events-none absolute left-0 top-10 -z-10 text-[18vw] font-black leading-none tracking-[-0.08em] text-white/[0.025]">
          2026
        </p>

        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
            Template Styles
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none tracking-[-0.05em] text-white md:text-6xl">
            Three directions. One builder.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {templateStyles.map((style) => (
              <article
                key={style.title}
                className="border border-white/[0.07] bg-white/[0.025] p-6 transition hover:border-[#55f5c6]/35 hover:bg-[#55f5c6]/[0.05]"
              >
                <div className="h-48 border border-white/[0.08] bg-[radial-gradient(circle_at_70%_20%,rgba(85,245,198,0.16),transparent_30%),linear-gradient(135deg,#050807,#101714)]" />

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {style.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {style.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-semibold uppercase leading-none tracking-[-0.05em] text-white md:text-6xl">
              From brief to preview without the heavy build.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              SegMockup keeps the process focused: enter the essentials,
              generate the structure, adjust the details, and present the
              preview.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border border-white/[0.07] bg-white/[0.025] p-6 transition hover:border-[#55f5c6]/30 hover:bg-[#08110e]"
              >
                <p className="text-[11px] font-black tracking-[0.24em] text-[#55f5c6]">
                  {step.number}
                </p>

                <p className="mt-12 text-xl font-semibold text-white/85">
                  {step.title}
                </p>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl border border-white/[0.07] bg-white/[0.025] px-6 py-16 text-center md:px-12">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
            Ready
          </p>

          <h2 className="mt-5 text-4xl font-semibold uppercase leading-none tracking-[-0.05em] text-white md:text-6xl">
            Build your first mockup.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
            Open the builder, add a client brief, choose a style, and create a
            polished website preview in minutes.
          </p>

          <Link
            href="/mockup"
            className="mt-9 inline-flex rounded-sm bg-[#55f5c6] px-7 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#03110d] shadow-[0_0_34px_rgba(85,245,198,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8fffe0]"
          >
            Open Builder
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] bg-[#020403] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-[12px] text-white/35 md:flex-row md:items-center">
          <p className="font-black uppercase tracking-[0.2em] text-white">
            SegMockup
          </p>

          <p>Premium website mockup builder by SegLead.</p>

          <a
            href="https://seglead.com"
            className="transition hover:text-[#55f5c6]"
          >
            Back to SegLead →
          </a>
        </div>
      </footer>
    </main>
  );
}