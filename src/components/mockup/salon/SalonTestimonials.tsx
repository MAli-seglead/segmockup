import type { MockupData } from "@/types/mockup";

export default function SalonTestimonials({ data }: { data: MockupData }) {
  const reviews = data.reviews && data.reviews.length > 0 ? data.reviews : [
    "The atmosphere felt beautiful from the first look.",
    "My booking was effortless and the result looked polished.",
    "The page made the studio feel worth booking.",
  ];

  return (
    <section className="bg-[#17130f] px-5 py-16 text-[#f7efe5] md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl border-y border-[#f7efe5]/10 py-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase" style={{ color: data.primaryColor }}>
              Testimonials
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none md:text-6xl">
              {data.testimonialsTitle || "Client words, softly spoken."}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#f7efe5]/55">
            Social proof sits close to the booking flow so the visual mood turns into action.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.slice(0, 3).map((quote, index) => (
            <article key={quote + index} className="rounded-[1.5rem] border border-[#f7efe5]/10 bg-[#f7efe5]/[0.055] p-6">
              <p className="font-serif text-2xl leading-9 text-[#f7efe5]">&ldquo;{quote}&rdquo;</p>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#f7efe5]/45">
                {data.businessName} Guest
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
