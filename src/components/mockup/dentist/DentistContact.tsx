import type { MockupData } from "@/types/mockup";

export default function DentistContact({ data }: { data: MockupData }) {
  const mainCta = data.mainCta || "Book Free Consultation";
  const phone = data.phone || "+90 555 000 00 00";
  const location = data.location || "Istanbul, Turkey";
  const workingHours = data.workingHours || "Mon-Sat 09:00-18:00";

  return (
    <section className="bg-slate-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:grid-cols-[1fr_0.75fr] md:p-12">
        <div>
          <p
            className="text-xs font-bold uppercase text-white/50"
            style={{ color: data.primaryColor }}
          >
            Appointment Flow
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Make the next step feel obvious.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            The final section gives {data.businessName} a focused appointment
            prompt with enough reassurance to convert visitors into enquiries.
          </p>

          <p className="mt-6 text-lg font-semibold text-white">
            Call {phone}
          </p>

          <div className="mt-6 grid gap-3 text-sm text-white/65 sm:grid-cols-2">
            <p className="rounded-2xl bg-white/[0.06] p-4">{location}</p>
            <p className="rounded-2xl bg-white/[0.06] p-4">{workingHours}</p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
          <p className="text-sm font-semibold text-slate-500">
            Request an appointment
          </p>
          <div className="mt-5 space-y-3">
            <div className="h-12 rounded-xl bg-slate-100" />
            <div className="h-12 rounded-xl bg-slate-100" />
            <div className="h-24 rounded-xl bg-slate-100" />
          </div>
          <button
            className="mt-5 w-full rounded-xl px-5 py-4 font-semibold text-white"
            style={{ background: data.primaryColor }}
          >
            {mainCta}
          </button>
        </div>
      </div>
    </section>
  );
}
