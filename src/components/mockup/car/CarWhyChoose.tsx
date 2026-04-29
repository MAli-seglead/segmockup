import type { MockupData } from "@/types/mockup";

export default function CarWhyChoose({ data }: { data: MockupData }) {
  const aboutTitle = data.aboutTitle || "A sharper way to choose your next drive.";
  const aboutText = data.aboutText || data.businessName + " presents its cars with the confidence of an automotive house: clean inventory, strong imagery, and a direct route to book, test drive, or buy.";
  const points = ["Curated stock", "Transparent terms", "Premium handover", "Fast booking"];

  return (
    <section className="bg-[#050505] px-5 py-20 text-[#f4f1ea] md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c7a15a]">Why Choose Us</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">{aboutTitle}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">{aboutText}</p>
          <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold text-white/62">
            Built for {data.audience || "luxury buyers, business travelers, and weekend drivers"}.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point, index) => (
            <div key={point} className="min-h-44 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20">
              <p className="text-4xl font-semibold text-[#f7dfaa]">0{index + 1}</p>
              <h3 className="mt-8 text-xl font-semibold text-white">{point}</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Every section is designed to remove hesitation and make the next enquiry feel natural.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
