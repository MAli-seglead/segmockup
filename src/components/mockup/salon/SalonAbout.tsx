import type { MockupData } from "@/types/mockup";

export default function SalonAbout({ data }: { data: MockupData }) {
  const audience =
    data.audience ||
    "Families, professionals, and cosmetic treatment clients";
  const aboutTitle = data.aboutTitle || "Atmosphere comes before the appointment.";
  const aboutText =
    data.aboutText ||
    `This direction makes ${data.businessName} feel editorial, intimate, and premium. The page stays compact while giving clients a strong sense of taste before they commit to a booking. It is shaped for ${audience.toLowerCase()}.`;
  const teamImages = data.teamImages || [];

  return (
    <section className="bg-[#211711] px-5 py-16 text-[#f7efe5] md:px-6 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="grid grid-cols-2 gap-4">
          <div
            className="flex h-72 items-end rounded-t-full bg-cover bg-center p-5"
            style={
              teamImages[0]
                ? { backgroundImage: `url("${teamImages[0]}")` }
                : {
                    background: `linear-gradient(160deg, ${data.primaryColor}, #f7efe5)`,
                  }
            }
          >
            {!teamImages[0] ? (
              <p className="rounded-full bg-[#17130f]/60 px-3 py-2 text-xs font-semibold text-[#f7efe5] backdrop-blur">
                Team image
              </p>
            ) : null}
          </div>
          <div
            className="mt-12 flex h-72 items-end rounded-b-full bg-[#f7efe5]/12 bg-cover bg-center p-5"
            style={
              teamImages[1]
                ? { backgroundImage: `url("${teamImages[1]}")` }
                : undefined
            }
          >
            {!teamImages[1] ? (
              <p className="rounded-full bg-[#17130f]/60 px-3 py-2 text-xs font-semibold text-[#f7efe5] backdrop-blur">
                Team image
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <p
            className="text-xs font-bold uppercase"
            style={{ color: data.primaryColor }}
          >
            Studio Mood
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-none md:text-6xl">
            {aboutTitle}
          </h2>

          <p className="mt-6 text-base leading-7 text-[#f7efe5]/65">
            {aboutText}
          </p>

          <p className="mt-6 border-l border-[#f7efe5]/20 pl-4 text-sm font-semibold text-[#f7efe5]/55">
            Designed for {audience}.
          </p>
        </div>
      </div>
    </section>
  );
}
