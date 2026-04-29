import type { MockupData } from "@/types/mockup";

export default function CarContact({ data }: { data: MockupData }) {
  const mainCta = data.mainCta || "Book A Viewing";
  const secondaryCta = data.secondaryCta || "View Cars";

  return (
    <section className="bg-[#0d0d0d] px-5 py-20 text-[#f4f1ea] md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-6 shadow-2xl shadow-black/40 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c7a15a]">CTA</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {data.contactTitle || "Reserve the car before it moves"}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
            A focused final panel for booking a viewing, reserving a rental, or starting a sales conversation with {data.businessName}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-[#f4f1ea] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#080808] transition hover:bg-[#f7dfaa]">
              {mainCta}
            </button>
            <button className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#c7a15a] hover:text-[#f7dfaa]">
              {secondaryCta}
            </button>
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
          <p className="text-2xl font-semibold text-white">{data.businessName}</p>
          <div className="mt-6 grid gap-3 text-sm text-white/62">
            <p className="rounded-2xl border border-white/10 p-4">{data.phone || "+90 555 000 00 00"}</p>
            <p className="rounded-2xl border border-white/10 p-4">{data.location || "Istanbul, Turkey"}</p>
            <p className="rounded-2xl border border-white/10 p-4">{data.workingHours || "Mon-Sat 09:00-18:00"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
