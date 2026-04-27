import type { MockupData } from "@/types/mockup";

export default function DentistAbout({ data }: { data: MockupData }) {
  const audience =
    data.audience ||
    "Families, professionals, and cosmetic treatment clients";
  const aboutTitle =
    data.aboutTitle || "A softer first impression for serious care.";
  const aboutText =
    data.aboutText ||
    `This direction makes ${data.businessName} feel premium, patient, and trustworthy. Spacious content, soft contrast, and direct treatment language help ${audience.toLowerCase()} feel oriented before they reach out.`;
  const teamImages = data.teamImages || [];

  return (
    <section className="bg-slate-50 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div>
          <p
            className="text-xs font-bold uppercase text-slate-500"
            style={{ color: data.primaryColor }}
          >
            About The Clinic
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
            {aboutTitle}
          </h2>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 md:p-10">
          <p className="text-xl leading-9 text-slate-600">
            {aboutText}
          </p>

          <p className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm font-semibold text-slate-600">
            Built for {audience}.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {["Gentle", "Clear", "Reliable"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <p className="text-sm text-slate-500">Tone</p>
                <p className="mt-2 font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="flex h-36 items-end rounded-2xl bg-cover bg-center p-4"
                style={
                  teamImages[index]
                    ? { backgroundImage: `url("${teamImages[index]}")` }
                    : {
                        background: `linear-gradient(145deg, ${data.primaryColor}, #f8fafc)`,
                      }
                }
              >
                {!teamImages[index] ? (
                  <p className="rounded-full bg-white/75 px-3 py-2 text-xs font-semibold text-slate-700 backdrop-blur">
                    Team image
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
