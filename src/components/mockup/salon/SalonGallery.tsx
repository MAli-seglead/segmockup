import type { MockupData } from "@/types/mockup";

export default function SalonGallery({ data }: { data: MockupData }) {
  const galleryTitle = data.galleryTitle || "The visual reason to book.";
  const galleryImages = data.galleryImages || [];
  const fallbackTiles = [
    `linear-gradient(160deg, ${data.primaryColor}, #f7efe5)`,
    "rgba(247, 239, 229, 0.1)",
    `linear-gradient(180deg, #f7efe5, ${data.primaryColor})`,
    "rgba(247, 239, 229, 0.15)",
    "rgba(247, 239, 229, 0.1)",
  ];
  const tileClasses = [
    "rounded-t-full md:row-span-2",
    "rounded-[1.5rem] md:col-span-2",
    "rounded-b-full md:row-span-2",
    "rounded-[1.5rem]",
    "rounded-[1.5rem]",
  ];

  return (
    <section className="bg-[#17130f] px-5 py-16 text-[#f7efe5] md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase"
              style={{ color: data.primaryColor }}
            >
              Gallery
            </p>

            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none md:text-6xl">
              {galleryTitle}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#f7efe5]/55">
            Image-led blocks create a luxury portfolio feel without adding
            complexity or new dependencies.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[180px] gap-4 md:grid-cols-4">
          {fallbackTiles.map((fallback, index) => (
            <div
              key={`${fallback}-${index}`}
              className={`${tileClasses[index]} flex items-end bg-cover bg-center p-4`}
              style={
                galleryImages[index]
                  ? { backgroundImage: `url("${galleryImages[index]}")` }
                  : { background: fallback }
              }
            >
              {!galleryImages[index] ? (
                <p className="rounded-full bg-[#17130f]/60 px-3 py-2 text-xs font-semibold text-[#f7efe5] backdrop-blur">
                  Gallery image
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
