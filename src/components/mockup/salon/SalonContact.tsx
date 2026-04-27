import type { MockupData } from "@/types/mockup";

export default function SalonContact({ data }: { data: MockupData }) {
  const mainCta = data.mainCta || "Book Free Consultation";
  const phone = data.phone || "+90 555 000 00 00";
  const location = data.location || "Istanbul, Turkey";
  const workingHours = data.workingHours || "Mon-Sat 09:00-18:00";

  return (
    <section className="bg-[#f7efe5] px-5 py-16 text-[#17130f] md:px-6 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div>
          <p
            className="text-xs font-bold uppercase"
            style={{ color: data.primaryColor }}
          >
            Booking
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-none md:text-6xl">
            Turn the mood into a reservation.
          </h2>
        </div>

        <div className="rounded-[2rem] bg-[#17130f] p-6 text-[#f7efe5] md:p-8">
          <p className="font-serif text-3xl">{data.businessName}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#f7efe5]/60">
            A final booking panel for treatments, consultations, and salon
            enquiries with a premium call to action.
          </p>

          <p className="mt-4 text-sm font-semibold text-[#f7efe5]">
            Call {phone}
          </p>

          <div className="mt-5 grid gap-3 text-sm text-[#f7efe5]/60 sm:grid-cols-2">
            <p className="rounded-2xl border border-[#f7efe5]/10 p-4">
              {location}
            </p>
            <p className="rounded-2xl border border-[#f7efe5]/10 p-4">
              {workingHours}
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["Choose treatment", "Pick time", "Confirm visit"].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-[#f7efe5]/10 p-4 text-sm"
              >
                {step}
              </div>
            ))}
          </div>

          <button
            className="mt-7 rounded-full px-7 py-3 font-semibold text-white"
            style={{ background: data.primaryColor }}
          >
            {mainCta}
          </button>
        </div>
      </div>
    </section>
  );
}
