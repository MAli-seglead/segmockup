import type { MockupData } from "@/types/mockup";

export default function DentistServices({ data }: { data: MockupData }) {
  const serviceImages = data.serviceImages || [];
  const serviceDescriptions = data.serviceDescriptions || [];
  const servicesTitle = data.servicesTitle || "Treatments made clear";

  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p
            className="text-xs font-bold uppercase text-slate-500"
            style={{ color: data.primaryColor }}
          >
            Treatments
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
            {servicesTitle}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {data.services.map((service, index) => (
            <article
              key={service}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200"
            >
              {serviceImages[index] ? (
                <div
                  className="h-40 rounded-[1.25rem] bg-cover bg-center"
                  style={{ backgroundImage: `url("${serviceImages[index]}")` }}
                />
              ) : (
                <div
                  className="flex h-40 flex-col items-center justify-center rounded-[1.25rem] text-sm font-bold text-white"
                  style={{
                    background: `linear-gradient(145deg, ${data.primaryColor}, #e2e8f0)`,
                  }}
                >
                  <span className="text-2xl">+</span>
                  <span className="mt-2">Service image {index + 1}</span>
                </div>
              )}

              <h3 className="mt-8 text-2xl font-semibold text-slate-950">
                {service}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {serviceDescriptions[index] ||
                  "A simple service card with enough detail to reassure patients and guide them toward the appointment form."}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
