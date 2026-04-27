import type { MockupData } from "@/types/mockup";

export default function SalonServices({ data }: { data: MockupData }) {
  const serviceImages = data.serviceImages || [];

  return (
    <section className="bg-[#f7efe5] px-5 py-16 text-[#17130f] md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase"
              style={{ color: data.primaryColor }}
            >
              Treatment Menu
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-none md:text-6xl">
              Services with a boutique rhythm.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#17130f]/65">
            A tighter service section designed for quick scanning, strong
            product feel, and direct movement into booking.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[#17130f]/10 border-y border-[#17130f]/10">
          {data.services.map((service, index) => (
            <article
              key={service}
              className="grid gap-4 py-6 md:grid-cols-[80px_120px_1fr_auto] md:items-center"
            >
              <p className="font-serif text-3xl text-[#17130f]/35">
                0{index + 1}
              </p>
              {serviceImages[index] ? (
                <div
                  className="h-24 rounded-t-full bg-cover bg-center"
                  style={{ backgroundImage: `url("${serviceImages[index]}")` }}
                />
              ) : (
                <div
                  className="flex h-24 items-center justify-center rounded-t-full text-center text-xs font-semibold text-[#f7efe5]"
                  style={{
                    background: `linear-gradient(160deg, ${data.primaryColor}, #17130f)`,
                  }}
                >
                  Service image
                </div>
              )}
              <div>
                <h3 className="font-serif text-3xl">{service}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#17130f]/60">
                  A polished treatment description that keeps the page compact
                  and booking focused.
                </p>
              </div>
              <button
                className="w-fit rounded-full px-5 py-2 text-sm font-semibold text-white"
                style={{ background: data.primaryColor }}
              >
                Book
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
