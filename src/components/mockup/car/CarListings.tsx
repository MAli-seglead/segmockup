import type { MockupData } from "@/types/mockup";

export default function CarListings({ data }: { data: MockupData }) {
  const services = data.services.length > 0 ? data.services : ["Luxury SUV", "Executive Sedan", "Sports Coupe"];
  const descriptions = data.serviceDescriptions || [];
  const images = data.serviceImages || [];
  const specs = ["Available today", "Inspected fleet", "Flexible terms"];

  return (
    <section className="bg-[#080808] px-5 py-20 text-[#f4f1ea] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c7a15a]">Featured Cars</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {data.servicesTitle || "Featured inventory"}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/52">
            Strong, image-first listing cards make the stock feel curated, premium, and ready to enquire about.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <article
              key={service + index}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-[#c7a15a]/45"
            >
              <div
                className="flex h-72 items-end bg-cover bg-center p-5"
                style={
                  images[index]
                    ? { backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.72)), url("' + images[index] + '")' }
                    : { background: 'linear-gradient(145deg, #1b1b1b, ' + data.primaryColor + ', #070707)' }
                }
              >
                {!images[index] ? (
                  <span className="rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                    Car image
                  </span>
                ) : null}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">{service}</h3>
                  <span className="rounded-full border border-[#c7a15a]/30 px-3 py-1 text-xs font-semibold text-[#f7dfaa]">
                    {specs[index] || "Premium"}
                  </span>
                </div>
                <p className="mt-4 min-h-16 text-sm leading-6 text-white/55">
                  {descriptions[index] || "A polished option for clients who want a sharp first impression, clear terms, and a confident handover."}
                </p>
                <button className="mt-6 w-full rounded-full border border-white/12 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition group-hover:border-[#c7a15a] group-hover:text-[#f7dfaa]">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
