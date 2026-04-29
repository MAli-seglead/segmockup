import type { MockupData } from "@/types/mockup";

export default function CarCategories({ data }: { data: MockupData }) {
  const categories = ["SUV", "Sedan", "Luxury", "Electric", "Sports", "Business"];

  return (
    <section className="bg-[#111111] px-5 py-16 text-[#f4f1ea] md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c7a15a]">Filter The Fleet</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Choose by mood, use, or presence.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-5 text-left text-sm font-bold uppercase tracking-[0.16em] text-white/72 transition hover:-translate-y-0.5 hover:text-[#f7dfaa]"
                style={{ borderColor: category === "Luxury" ? data.primaryColor : undefined }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
