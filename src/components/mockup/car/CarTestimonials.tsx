import type { MockupData } from "@/types/mockup";

export default function CarTestimonials({ data }: { data: MockupData }) {
  const reviews = data.reviews && data.reviews.length > 0 ? data.reviews : [
    "The car was ready, detailed, and exactly as described.",
    "The handover felt premium and the process was clear.",
    "The inventory presentation made it easy to choose quickly.",
  ];

  return (
    <section className="bg-[#101010] px-5 py-18 text-[#f4f1ea] md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c7a15a]">Testimonials</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {data.testimonialsTitle || "What drivers say after the handover"}
            </h2>
          </div>
          <div className="rounded-full border border-[#c7a15a]/25 px-5 py-3 text-sm font-semibold text-[#f7dfaa]">
            4.9 client rating
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((quote, index) => (
            <article key={quote + index} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
              <p className="text-xl leading-8 text-white/78">&ldquo;{quote}&rdquo;</p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#f7dfaa]">
                {data.businessName} Client
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
