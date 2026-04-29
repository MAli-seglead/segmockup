import type { MockupData } from "@/types/mockup";

export default function CarGallery({ data }: { data: MockupData }) {
  const galleryImages = data.galleryImages || [];
  const fallback = ["#222", data.primaryColor, "#111", "#2a2a2a", "#181818"];
  const classes = [
    "md:col-span-2 md:row-span-2",
    "",
    "",
    "md:col-span-2",
    "",
  ];

  return (
    <section className="bg-[#050505] px-5 py-20 text-[#f4f1ea] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c7a15a]">Gallery</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {data.galleryTitle || "Angles worth seeing in person"}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/52">
            High-quality visuals give the mockup the weight of a real automotive brand site.
          </p>
        </div>

        <div className="grid auto-rows-[190px] gap-4 md:grid-cols-4">
          {fallback.map((color, index) => (
            <div
              key={color + index}
              className={(classes[index] || "") + " flex items-end rounded-[1.5rem] border border-white/10 bg-cover bg-center p-5"}
              style={
                galleryImages[index]
                  ? { backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.7)), url("' + galleryImages[index] + '")' }
                  : { background: 'linear-gradient(145deg, ' + color + ', #050505)' }
              }
            >
              {!galleryImages[index] ? (
                <p className="rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                  Automotive image
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
