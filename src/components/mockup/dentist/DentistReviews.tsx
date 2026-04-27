import type { MockupData } from "@/types/mockup";

export default function DentistReviews({ data }: { data: MockupData }) {
  const reviews =
    data.reviews && data.reviews.length > 0
      ? data.reviews
      : [
          "The whole visit felt calm and professional.",
          "Booking was simple and the team explained everything.",
          "The site immediately made the clinic feel trustworthy.",
        ];

  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase text-slate-500"
              style={{ color: data.primaryColor }}
            >
              Patient Trust
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
              Reviews placed where doubt usually appears.
            </h2>
          </div>

          <div className="rounded-full bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600">
            4.9 average patient rating
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((quote) => (
            <article
              key={quote}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7"
            >
              <p className="text-xl leading-8 text-slate-700">
                &ldquo;{quote}&rdquo;
              </p>

              <p className="mt-8 font-semibold text-slate-950">
                {data.businessName} Patient
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
