"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, type DragEvent, type ReactNode } from "react";
import { industries } from "@/data/templates";
import type { Industry, MockupStyle } from "@/types/mockup";

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  helper?: string;
  rows?: number;
};

type Starter = {
  label: string;
  industry: Industry;
  businessName: string;
  logoText: string;
  slogan: string;
  heroHeadline: string;
  heroDescription: string;
  aboutTitle: string;
  aboutText: string;
  services: string;
  mainCta: string;
  secondaryCta: string;
  specialOffer: string;
  audience: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor?: string;
  textColor: string;
  style: MockupStyle;
  reviews: string;
};

type GeneratedMockupContent = {
  businessName: string;
  logoText: string;
  slogan: string;
  location: string;
  heroHeadline: string;
  heroDescription: string;
  aboutTitle: string;
  aboutText: string;
  services: string;
  mainCta: string;
  secondaryCta: string;
  specialOffer: string;
  phone: string;
  workingHours: string;
  audience: string;
  reviews: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor?: string;
  textColor: string;
  style: MockupStyle;
  serviceDescriptions: string;
  servicesTitle: string;
  galleryTitle: string;
  testimonialsTitle: string;
  contactTitle: string;
  brandTone: string;
  colorSuggestions: string;
  layoutSuggestions: string;
  logoImageSuggestion?: string;
  heroImageSuggestion?: string;
  galleryImageSuggestions?: string;
  teamImageSuggestions?: string;
  serviceImageSuggestions?: string;
  backgroundImageSuggestions?: string;
};

type StockImagesResponse = {
  heroImage?: string;
  galleryImages?: string;
  serviceImages?: string;
  teamImages?: string;
  backgroundImages?: string;
};

type ImageSuggestions = {
  logoImage: string;
  heroImage: string;
  galleryImages: string;
  teamImages: string;
  serviceImages: string;
  backgroundImages: string;
};

type ManualSectionId =
  | "essentials"
  | "strategy"
  | "brand"
  | "about"
  | "contact"
  | "images";

const imageDelimiter = "||SEGIMG||";

const starters: Starter[] = [
  {
    label: "Dentist starter",
    industry: "dentist",
    businessName: "CCS Dental",
    logoText: "CCS Dental",
    slogan: "Calm, modern dental care.",
    heroHeadline: "Premium dental care for modern families",
    heroDescription:
      "Clear, gentle dental care for families, professionals, and cosmetic treatment clients in Istanbul.",
    aboutTitle: "A calmer clinic experience from first visit",
    aboutText:
      "CCS Dental combines modern treatment planning, patient-friendly explanations, and a polished clinic experience built around trust.",
    services: "Whitening, Implants, Braces",
    mainCta: "Book Free Consultation",
    secondaryCta: "View Treatments",
    specialOffer: "Free smile assessment this month",
    audience: "Families, professionals, and cosmetic treatment clients",
    primaryColor: "#2563eb",
    secondaryColor: "#ffffff",
    accentColor: "#0f172a",
    textColor: "#0f172a",
    style: "basic",
    reviews:
      "The visit felt calm and professional | Booking was simple | The clinic felt trustworthy right away",
  },
  {
    label: "Salon starter",
    industry: "salon",
    businessName: "Luma Studio",
    logoText: "Luma",
    slogan: "Boutique beauty, quietly refined.",
    heroHeadline: "A boutique beauty studio for polished everyday rituals",
    heroDescription:
      "Luxury hair, skin, and nail treatments for clients who want a calm, elegant booking experience.",
    aboutTitle: "A refined studio experience before the appointment",
    aboutText:
      "Luma Studio feels intimate, editorial, and premium, with a visual-first page that helps clients imagine the result before booking.",
    services: "Hair Styling, Skin Care, Nail Design",
    mainCta: "Reserve A Visit",
    secondaryCta: "Explore Treatments",
    specialOffer: "New client glow package available this month",
    audience: "Style-conscious clients, bridal guests, and beauty regulars",
    primaryColor: "#a16207",
    secondaryColor: "#17130f",
    accentColor: "#f7dfaa",
    textColor: "#f7efe5",
    style: "luxury",
    reviews:
      "The atmosphere felt beautiful | My booking was effortless | The result looked exactly like the photos",
  },
  {
    label: "Car starter",
    industry: "car",
    businessName: "Apex Motors",
    logoText: "Apex",
    slogan: "Selected cars. Serious presence.",
    heroHeadline: "Premium cars for drivers who expect more",
    heroDescription:
      "Luxury rentals and curated sales for business trips, weekends, and clients who want a confident handover.",
    aboutTitle: "A sharper way to choose your next drive",
    aboutText:
      "Apex Motors presents premium cars with clean inventory, high-quality visuals, transparent details, and a direct path to book, buy, or view.",
    services: "Luxury SUV, Executive Sedan, Sports Coupe",
    mainCta: "Book A Viewing",
    secondaryCta: "View Cars",
    specialOffer: "Priority handover slots this week",
    audience: "Luxury buyers, business travelers, and weekend drivers",
    primaryColor: "#c7a15a",
    secondaryColor: "#090909",
    accentColor: "#f4f1ea",
    textColor: "#f4f1ea",
    style: "luxury",
    reviews:
      "The car was ready and immaculate | The handover felt premium | Choosing a model was easy",
  },
];

const promptStarters = [
  {
    label: "Dentist",
    industry: "dentist" as Industry,
    value:
      "Premium dentist clinic in Istanbul for families and professionals. Needs a calm, trustworthy website focused on appointments, treatments, and patient confidence.",
    assets:
      "Hero: modern dental clinic reception calm daylight premium. Gallery: dentist consultation, clean treatment room, patient smile, premium clinic interior. Avoid: scary dental tools, surgery, cartoon teeth.",
  },
  {
    label: "Salon",
    industry: "salon" as Industry,
    value:
      "Boutique beauty salon for style-conscious clients. Needs an elegant visual website focused on services, atmosphere, gallery proof, and easy reservations.",
    assets:
      "Hero: luxury beauty salon interior warm light boutique. Gallery: hair styling, skincare room, nail design detail, elegant reception. Avoid: messy salon, harsh white stock photos.",
  },
  {
    label: "Car Rental",
    industry: "car" as Industry,
    value:
      "Premium car rental and sales business with luxury SUVs, executive sedans, and sports cars. Needs a sharp website focused on enquiries and vehicle presentation.",
    assets:
      "Hero: luxury car dealership showroom dark premium. Gallery: random BMW, Mercedes, Audi, SUV, executive sedan, sports car photos. Avoid: mechanic, repair shop, cheap rental cars.",
  },
];

const manualSections: {
  id: ManualSectionId;
  label: string;
  description: string;
}[] = [
  {
    id: "essentials",
    label: "Essentials",
    description: "The fields that shape the first impression.",
  },
  {
    id: "strategy",
    label: "Strategy",
    description: "Section titles, tone, layout, and service logic.",
  },
  {
    id: "brand",
    label: "Brand",
    description: "Logo text, slogan, offer, audience, and reviews.",
  },
  {
    id: "about",
    label: "About",
    description: "Credibility, story, and secondary action.",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Location, phone, and working hours.",
  },
  {
    id: "images",
    label: "Images",
    description: "Upload visuals or use generated image direction.",
  },
];

const styleOptions: { label: string; value: MockupStyle }[] = [
  { label: "Luxury", value: "luxury" },
  { label: "Basic", value: "basic" },
  { label: "Bold", value: "bold" },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function safeColor(value: string, fallback = "#55f5c6") {
  return /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
}

function inferIndustryFromPrompt(text: string, fallback: Industry): Industry {
  const value = text.toLowerCase();

  const carTerms = [
    "car",
    "cars",
    "dealership",
    "dealer",
    "auto",
    "automotive",
    "vehicle",
    "vehicles",
    "rental",
    "rent a car",
    "bmw",
    "mercedes",
    "audi",
    "suv",
    "sedan",
    "sports car",
    "showroom",
  ];

  const salonTerms = [
    "salon",
    "beauty",
    "hair",
    "nail",
    "skincare",
    "spa",
    "barber",
    "makeup",
    "lashes",
    "brows",
  ];

  const dentistTerms = [
    "dentist",
    "dental",
    "clinic",
    "teeth",
    "tooth",
    "implant",
    "whitening",
    "orthodontic",
    "smile",
  ];

  const hasCar = carTerms.some((term) => value.includes(term));
  const hasSalon = salonTerms.some((term) => value.includes(term));
  const hasDentist = dentistTerms.some((term) => value.includes(term));

  if (hasCar) return "car";
  if (hasSalon) return "salon";
  if (hasDentist) return "dentist";

  return fallback;
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  helper,
  rows,
}: FieldProps) {
  const className =
    "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-[#f7f6ed] outline-none transition placeholder:text-white/25 hover:border-[#55f5c6]/35 focus:border-[#55f5c6]/70 focus:bg-white/[0.065] focus:ring-4 focus:ring-[#55f5c6]/10";

  return (
    <div>
      <label className="text-[11px] font-black uppercase tracking-[0.16em] text-white/50">
        {label}
      </label>

      {rows ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`${className} resize-none`}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={className}
        />
      )}

      {helper ? (
        <p className="mt-2 text-[11px] leading-5 text-white/32">{helper}</p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  helper,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  helper?: string;
}) {
  return (
    <div>
      <label className="text-[11px] font-black uppercase tracking-[0.16em] text-white/50">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-[#f7f6ed] outline-none transition hover:border-[#55f5c6]/35 focus:border-[#55f5c6]/70 focus:bg-white/[0.065] focus:ring-4 focus:ring-[#55f5c6]/10"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-black">
            {option.label}
          </option>
        ))}
      </select>

      {helper ? (
        <p className="mt-2 text-[11px] leading-5 text-white/32">{helper}</p>
      ) : null}
    </div>
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-[11px] font-black uppercase tracking-[0.16em] text-white/50">
        {label}
      </label>

      <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] p-2 transition hover:border-[#55f5c6]/35">
        <input
          type="color"
          value={safeColor(value)}
          onChange={(event) => onChange(event.target.value)}
          className="h-9 w-11 cursor-pointer rounded-lg border border-white/10 bg-transparent"
        />

        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm text-[#f7f6ed] outline-none placeholder:text-white/25"
          placeholder="#55f5c6"
        />
      </div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  description,
  children,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/[0.075] bg-[#07100d]/70 shadow-2xl shadow-black/25 backdrop-blur-xl transition hover:border-[#55f5c6]/20">
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] px-5 py-5 md:flex-row md:items-start md:px-6">
        <div>
          {eyebrow ? (
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">
            {title}
          </h2>

          {description ? (
            <p className="mt-1 max-w-2xl text-sm leading-6 text-white/42">
              {description}
            </p>
          ) : null}
        </div>

        {action}
      </div>

      <div className="p-5 md:p-6">{children}</div>
    </section>
  );
}

function DetailGroup({
  title,
  description,
  children,
  defaultOpen,
}: {
  title: string;
  description: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-2xl border border-white/[0.07] bg-black/20"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-xs leading-5 text-white/38">{description}</p>
        </div>

        <span className="text-lg text-[#55f5c6] transition group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="border-t border-white/[0.07] p-5">{children}</div>
    </details>
  );
}

function readImageFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function splitImageList(value: string) {
  if (!value.trim()) return [];

  if (value.includes(imageDelimiter)) {
    return value
      .split(imageDelimiter)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (value.startsWith("data:")) return [value];

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function joinImageList(values: string[]) {
  return values.join(imageDelimiter);
}

function urlOnly(value: string) {
  return value.startsWith("data:") ? "" : value;
}

function urlListOnly(value: string) {
  return splitImageList(value)
    .filter((item) => !item.startsWith("data:"))
    .join(",");
}

function ImageDropzone({
  label,
  value,
  onChange,
  multiple,
  suggestion,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiple?: boolean;
  suggestion?: string;
}) {
  const images = splitImageList(value);
  const hasImages = images.length > 0;

  async function handleFiles(files: FileList | File[]) {
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/"),
    );

    if (imageFiles.length === 0) return;

    const dataUrls = await Promise.all(imageFiles.map(readImageFile));

    onChange(multiple ? joinImageList([...images, ...dataUrls]) : dataUrls[0]);
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    void handleFiles(event.dataTransfer.files);
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label className="text-[11px] font-black uppercase tracking-[0.16em] text-white/50">
          {label}
        </label>

        {hasImages ? (
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-[11px] font-black uppercase tracking-[0.16em] text-[#55f5c6] transition hover:text-white"
          >
            Clear
          </button>
        ) : null}
      </div>

      <label
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        className="group block cursor-pointer rounded-2xl border border-dashed border-[#55f5c6]/25 bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-[#55f5c6]/65 hover:bg-[#55f5c6]/[0.06]"
      >
        <input
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={(event) => {
            if (event.target.files) {
              void handleFiles(event.target.files);
            }
          }}
          className="hidden"
        />

        {hasImages ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {images.slice(0, multiple ? 4 : 1).map((image, index) => (
              <div
                key={`${label}-${index}-${image.slice(0, 24)}`}
                className="h-36 rounded-xl border border-white/10 bg-cover bg-center shadow-xl shadow-black/20"
                style={{ backgroundImage: `url("${image}")` }}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-white/10 bg-black/20 px-5 py-8 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#55f5c6]/12 text-lg font-black text-[#55f5c6]">
              +
            </div>

            <p className="mt-4 text-sm font-semibold text-[#f7f6ed]">
              Drop image or click to upload
            </p>

            <p className="mt-2 text-xs leading-5 text-white/38">
              {suggestion || "Fallback visuals are used when empty."}
            </p>
          </div>
        )}
      </label>
    </div>
  );
}

export default function MockupPage() {
  const router = useRouter();

  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState<Industry>("dentist");
  const [primaryColor, setPrimaryColor] = useState("#2563eb");
  const [secondaryColor, setSecondaryColor] = useState("#ffffff");
  const [accentColor, setAccentColor] = useState("#0f172a");
  const [textColor, setTextColor] = useState("#0f172a");
  const [style, setStyle] = useState<MockupStyle>("basic");

  const [services, setServices] = useState("");
  const [serviceDescriptions, setServiceDescriptions] = useState("");
  const [servicesTitle, setServicesTitle] = useState("");
  const [galleryTitle, setGalleryTitle] = useState("");
  const [testimonialsTitle, setTestimonialsTitle] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  const [brandTone, setBrandTone] = useState("");
  const [colorSuggestions, setColorSuggestions] = useState("");
  const [layoutSuggestions, setLayoutSuggestions] = useState("");

  const [logoText, setLogoText] = useState("");
  const [logoImage, setLogoImage] = useState("");
  const [slogan, setSlogan] = useState("");
  const [heroHeadline, setHeroHeadline] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [mainCta, setMainCta] = useState("");
  const [secondaryCta, setSecondaryCta] = useState("");
  const [specialOffer, setSpecialOffer] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [audience, setAudience] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [galleryImages, setGalleryImages] = useState("");
  const [serviceImages, setServiceImages] = useState("");
  const [teamImages, setTeamImages] = useState("");
  const [backgroundImages, setBackgroundImages] = useState("");
  const [reviews, setReviews] = useState("");

  const [clientContext, setClientContext] = useState("");
  const [assetInstructions, setAssetInstructions] = useState("");
  const [autoImages, setAutoImages] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [mode, setMode] = useState<"ai" | "manual">("ai");
  const [activeManualSection, setActiveManualSection] =
    useState<ManualSectionId>("essentials");

  const [imageSuggestions, setImageSuggestions] = useState<ImageSuggestions>({
    logoImage: "Simple mark or monogram on a quiet luxury background.",
    heroImage: "Premium first impression image that matches the client tone.",
    galleryImages: "A curated set of atmospheric detail and result images.",
    teamImages: "Warm, polished portraits of the people behind the business.",
    serviceImages:
      "Close-up treatment or service images with premium lighting.",
    backgroundImages: "Subtle brand texture or interior image for depth.",
  });

  const readinessItems = useMemo(
    () => [
      { label: "Business", done: Boolean(businessName.trim()) },
      { label: "Hero", done: Boolean(heroHeadline.trim()) },
      { label: "Message", done: Boolean(heroDescription.trim()) },
      { label: "Services", done: Boolean(services.trim()) },
      { label: "CTA", done: Boolean(mainCta.trim()) },
    ],
    [businessName, heroHeadline, heroDescription, services, mainCta],
  );

  const helpfulFields = readinessItems.filter((item) => item.done).length;
  const readinessPercent = Math.round(
    (helpfulFields / readinessItems.length) * 100,
  );

  const promptStrength = Math.min(
    100,
    Math.round(((clientContext + assetInstructions).trim().length / 320) * 100),
  );

  function applyStarter(starter: Starter) {
    setBusinessName(starter.businessName);
    setIndustry(starter.industry);
    setLogoText(starter.logoText);
    setSlogan(starter.slogan);
    setHeroHeadline(starter.heroHeadline);
    setHeroDescription(starter.heroDescription);
    setAboutTitle(starter.aboutTitle);
    setAboutText(starter.aboutText);
    setServices(starter.services);
    setServiceDescriptions("");

    setServicesTitle(
      starter.industry === "car"
        ? "Featured inventory"
        : starter.industry === "salon"
          ? "Signature services"
          : "Treatments made clear",
    );

    setGalleryTitle(
      starter.industry === "car"
        ? "Angles worth seeing in person"
        : starter.industry === "salon"
          ? "A visual reason to book"
          : "Clinic moments",
    );

    setTestimonialsTitle(
      starter.industry === "car"
        ? "What drivers say after the handover"
        : starter.industry === "salon"
          ? "Client words, softly spoken"
          : "Client words that build trust",
    );

    setContactTitle(
      starter.industry === "car"
        ? "Reserve the car before it moves"
        : starter.industry === "salon"
          ? "Turn the mood into a reservation"
          : "Make the next step feel obvious",
    );

    setBrandTone(
      starter.industry === "car"
        ? "Strong, precise, premium, and automotive-led."
        : starter.industry === "salon"
          ? "Elegant, compact, visual, and quietly luxurious."
          : "Calm, clear, reassuring, and premium.",
    );

    setColorSuggestions(
      "Use the selected palette as the accent system for buttons, highlights, and image overlays.",
    );

    setLayoutSuggestions(
      starter.industry === "car"
        ? "Lead with a cinematic car hero, featured inventory, filters, trust proof, gallery, and booking CTA."
        : starter.industry === "salon"
          ? "Lead with a strong visual hero, compact services, gallery proof, then booking."
          : "Lead with trust, clear treatments, doctor/team proof, reviews, then appointment CTA.",
    );

    setMainCta(starter.mainCta);
    setSecondaryCta(starter.secondaryCta);
    setSpecialOffer(starter.specialOffer);
    setAudience(starter.audience);
    setPrimaryColor(starter.primaryColor);
    setSecondaryColor(starter.secondaryColor);
    setAccentColor(starter.accentColor);
    setTextColor(starter.textColor);
    setStyle(starter.style);
    setReviews(starter.reviews);
    setLocation("Istanbul, Turkey");
    setPhone("+90 555 000 00 00");
    setWorkingHours("Mon-Sat 09:00-18:00");
  }

  function applyGeneratedContent(content: GeneratedMockupContent) {
    const combinedPrompt = `${clientContext} ${assetInstructions}`;
    const detectedIndustry = inferIndustryFromPrompt(combinedPrompt, industry);

    setIndustry(detectedIndustry);
    setBusinessName(content.businessName);
    setLogoText(content.logoText);
    setSlogan(content.slogan);
    setLocation(content.location);
    setHeroHeadline(content.heroHeadline);
    setHeroDescription(content.heroDescription);
    setAboutTitle(content.aboutTitle);
    setAboutText(content.aboutText);
    setServices(content.services);
    setServiceDescriptions(content.serviceDescriptions);
    setServicesTitle(content.servicesTitle);
    setGalleryTitle(content.galleryTitle);
    setTestimonialsTitle(content.testimonialsTitle);
    setContactTitle(content.contactTitle);
    setBrandTone(content.brandTone);
    setColorSuggestions(content.colorSuggestions);
    setLayoutSuggestions(content.layoutSuggestions);
    setMainCta(content.mainCta);
    setSecondaryCta(content.secondaryCta);
    setSpecialOffer(content.specialOffer);
    setPhone(content.phone);
    setWorkingHours(content.workingHours);
    setAudience(content.audience);
    setReviews(content.reviews);
    setPrimaryColor(content.primaryColor);
    setSecondaryColor(content.backgroundColor || content.secondaryColor);
    setAccentColor(content.accentColor || content.primaryColor);
    setTextColor(content.textColor || textColor);
    setStyle(content.style);

    setImageSuggestions({
      logoImage:
        content.logoImageSuggestion ||
        "Simple mark or monogram on a quiet luxury background.",
      heroImage:
        content.heroImageSuggestion ||
        "Premium first impression image that matches the client tone.",
      galleryImages:
        content.galleryImageSuggestions ||
        "A curated set of atmospheric detail and result images.",
      teamImages:
        content.teamImageSuggestions ||
        "Warm, polished portraits of the people behind the business.",
      serviceImages:
        content.serviceImageSuggestions ||
        "Close-up treatment or service images with premium lighting.",
      backgroundImages:
        content.backgroundImageSuggestions ||
        "Subtle brand texture or interior image for depth.",
    });
  }

  async function applyStockImages(content: GeneratedMockupContent) {
    if (!autoImages) return;

    try {
      const response = await fetch("/api/stock-images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hero: content.heroImageSuggestion,
          gallery: content.galleryImageSuggestions,
          services: content.serviceImageSuggestions,
          team: content.teamImageSuggestions,
          background: content.backgroundImageSuggestions,
        }),
      });

      if (!response.ok) return;

      const images = (await response.json()) as StockImagesResponse;

      if (images.heroImage) setHeroImage(images.heroImage);
      if (images.galleryImages) setGalleryImages(images.galleryImages);
      if (images.serviceImages) setServiceImages(images.serviceImages);
      if (images.teamImages) setTeamImages(images.teamImages);
      if (images.backgroundImages) setBackgroundImages(images.backgroundImages);
    } catch {
      // Keep generated content even when stock image fetching fails.
    }
  }

  function suggestImageDirection() {
    const combinedPrompt = `${clientContext} ${assetInstructions}`;
    const detectedIndustry = inferIndustryFromPrompt(combinedPrompt, industry);
    const subject =
      combinedPrompt || heroDescription || heroHeadline || businessName || detectedIndustry;

    const tone =
      detectedIndustry === "car"
        ? "premium automotive showroom, dark metallic finish, cinematic lighting"
        : detectedIndustry === "salon"
          ? "luxury salon, champagne light, elegant boutique interior"
          : "premium clinic, calm daylight, clean trustworthy atmosphere";

    setIndustry(detectedIndustry);

    setImageSuggestions({
      logoImage: `Logo direction: refined ${businessName || "client"} monogram, minimal ${tone}.`,
      heroImage: `Hero image direction: ${subject}. Wide premium website hero, ${tone}.`,
      galleryImages: `Gallery direction: 4-6 cohesive images showing atmosphere, details, results, and client experience for ${subject}.`,
      teamImages: `Team direction: professional portraits, warm expression, premium lighting, ${tone}.`,
      serviceImages: `Service direction: close-up service moments, hands, tools, results, and polished details for ${subject}.`,
      backgroundImages: `Background direction: subtle interior texture, soft gradients, brand mood, ${tone}.`,
    });
  }

  async function generateWithAi() {
    setAiError("");

    if (!clientContext.trim() && !assetInstructions.trim()) {
      setAiError("Add a client brief or image instructions first.");
      return;
    }

    setAiLoading(true);

    const combinedPrompt = `${clientContext} ${assetInstructions}`;
    const detectedIndustry = inferIndustryFromPrompt(combinedPrompt, industry);
    setIndustry(detectedIndustry);

    try {
      const response = await fetch("/api/generate-mockup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientContext:
            clientContext.trim() ||
            `Create a premium ${detectedIndustry} website mockup.`,
          assetInstructions,
          industry: detectedIndustry,
          autoImages,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const details =
          typeof result.details === "string" ? result.details : undefined;
        const quotaHint = details?.includes("RESOURCE_EXHAUSTED")
          ? " Gemini says this key is out of quota right now."
          : "";

        throw new Error(
          typeof result.error === "string"
            ? `${result.error}${quotaHint}`
            : "AI generation failed.",
        );
      }

      const content = result as GeneratedMockupContent;
      applyGeneratedContent(content);
      await applyStockImages(content);
    } catch (error) {
      setAiError(
        error instanceof Error
          ? error.message
          : "Could not generate content. Please try again.",
      );
    } finally {
      setAiLoading(false);
    }
  }

  function generateMockup() {
    const finalIndustry = inferIndustryFromPrompt(
      `${clientContext} ${assetInstructions} ${businessName} ${services}`,
      industry,
    );

    const imageSession =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : String(Date.now());

    sessionStorage.setItem(
      `mockup-images:${imageSession}`,
      JSON.stringify({
        logoImage,
        heroImage,
        galleryImages: splitImageList(galleryImages),
        serviceImages: splitImageList(serviceImages),
        teamImages: splitImageList(teamImages),
        backgroundImages: splitImageList(backgroundImages),
      }),
    );

    const params = new URLSearchParams({
      businessName: businessName || "Client Business",
      industry: finalIndustry,
      primary: primaryColor,
      secondary: secondaryColor,
      accent: accentColor,
      background: secondaryColor,
      text: textColor,
      style,
      services,
      serviceDescriptions,
      servicesTitle,
      galleryTitle,
      testimonialsTitle,
      contactTitle,
      brandTone,
      colorSuggestions,
      layoutSuggestions,
      logoText,
      logoImage: urlOnly(logoImage),
      slogan,
      heroHeadline,
      heroDescription,
      aboutTitle,
      aboutText,
      mainCta,
      secondaryCta,
      specialOffer,
      phone,
      location,
      workingHours,
      audience,
      heroImage: urlOnly(heroImage),
      galleryImages: urlListOnly(galleryImages),
      serviceImages: urlListOnly(serviceImages),
      teamImages: urlListOnly(teamImages),
      backgroundImages: urlListOnly(backgroundImages),
      reviews,
      imageSession,
    });

    router.push(`/preview?${params.toString()}`);
  }

  const manualContent =
    activeManualSection === "essentials" ? (
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="Business name"
          value={businessName}
          onChange={setBusinessName}
          placeholder="SegLead Motors"
          helper="Used in the logo, hero, reviews, and contact area."
        />

        <SelectField
          label="Industry"
          value={industry}
          onChange={(value) => setIndustry(value as Industry)}
          options={industries}
          helper="AI can also auto-switch this based on your prompt."
        />

        <TextField
          label="Hero headline"
          value={heroHeadline}
          onChange={setHeroHeadline}
          placeholder="Premium cars for drivers who expect more"
          helper="The main headline visitors see first."
        />

        <TextField
          label="Hero description"
          value={heroDescription}
          onChange={setHeroDescription}
          placeholder="Luxury rentals and curated vehicle sales in Istanbul."
          helper="One clear sentence about who this is for and why it matters."
        />

        <TextField
          label="Services"
          value={services}
          onChange={setServices}
          placeholder="Luxury SUV, Executive Sedan, Sports Coupe"
          helper="Separate each service with a comma."
        />

        <TextField
          label="Main CTA"
          value={mainCta}
          onChange={setMainCta}
          placeholder="Book A Viewing"
          helper="The main conversion button."
        />
      </div>
    ) : activeManualSection === "strategy" ? (
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="Services section title"
          value={servicesTitle}
          onChange={setServicesTitle}
          placeholder="Featured inventory"
        />

        <TextField
          label="Service descriptions"
          value={serviceDescriptions}
          onChange={setServiceDescriptions}
          placeholder="Premium SUVs ready for enquiry; Executive sedans for business travel; Sports cars for weekend drives"
          helper="Separate each description with a semicolon."
        />

        <TextField
          label="Gallery title"
          value={galleryTitle}
          onChange={setGalleryTitle}
          placeholder="Angles worth seeing in person"
        />

        <TextField
          label="Testimonials title"
          value={testimonialsTitle}
          onChange={setTestimonialsTitle}
          placeholder="What drivers say after the handover"
        />

        <TextField
          label="Contact title"
          value={contactTitle}
          onChange={setContactTitle}
          placeholder="Reserve the car before it moves"
        />

        <TextField
          label="Brand tone"
          value={brandTone}
          onChange={setBrandTone}
          placeholder="Strong, precise, premium, and automotive-led."
        />

        <TextField
          label="Color suggestions"
          value={colorSuggestions}
          onChange={setColorSuggestions}
          placeholder="Use teal accents over a dark premium base."
          rows={3}
        />

        <TextField
          label="Layout suggestions"
          value={layoutSuggestions}
          onChange={setLayoutSuggestions}
          placeholder="Lead with a dealership hero, inventory, trust proof, gallery, and enquiry CTA."
          rows={3}
        />
      </div>
    ) : activeManualSection === "brand" ? (
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="Logo text"
          value={logoText}
          onChange={setLogoText}
          placeholder="SegLead Motors"
        />

        <TextField
          label="Slogan"
          value={slogan}
          onChange={setSlogan}
          placeholder="Selected cars. Serious presence."
        />

        <TextField
          label="Special offer"
          value={specialOffer}
          onChange={setSpecialOffer}
          placeholder="Priority handover slots this week"
        />

        <TextField
          label="Audience"
          value={audience}
          onChange={setAudience}
          placeholder="Luxury buyers, business travelers, and weekend drivers"
        />

        <div className="md:col-span-2">
          <TextField
            label="Reviews"
            value={reviews}
            onChange={setReviews}
            placeholder="The car was ready and immaculate | The handover felt premium | Choosing a model was easy"
            helper="Separate each review with a vertical bar."
            rows={3}
          />
        </div>
      </div>
    ) : activeManualSection === "about" ? (
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="About title"
          value={aboutTitle}
          onChange={setAboutTitle}
          placeholder="A sharper way to choose your next drive"
        />

        <TextField
          label="Secondary CTA"
          value={secondaryCta}
          onChange={setSecondaryCta}
          placeholder="View Cars"
        />

        <div className="md:col-span-2">
          <TextField
            label="About text"
            value={aboutText}
            onChange={setAboutText}
            placeholder="Explain what makes the business credible, premium, and worth booking."
            rows={5}
          />
        </div>
      </div>
    ) : activeManualSection === "contact" ? (
      <div className="grid gap-5 md:grid-cols-3">
        <TextField
          label="Phone / WhatsApp"
          value={phone}
          onChange={setPhone}
          placeholder="+90 555 000 00 00"
        />

        <TextField
          label="Location"
          value={location}
          onChange={setLocation}
          placeholder="Istanbul, Turkey"
        />

        <TextField
          label="Working hours"
          value={workingHours}
          onChange={setWorkingHours}
          placeholder="Mon-Sat 09:00-18:00"
        />
      </div>
    ) : (
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#55f5c6]/20 bg-[#55f5c6]/[0.05] p-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-white">
              Image direction helper
            </p>
            <p className="mt-1 text-sm leading-6 text-white/42">
              Generate visual guidance from your brief and image instructions.
            </p>
          </div>

          <button
            type="button"
            onClick={suggestImageDirection}
            className="rounded-sm bg-[#55f5c6] px-5 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-[#03110d] transition hover:bg-white"
          >
            Suggest Images
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <ImageDropzone
            label="Logo image"
            value={logoImage}
            onChange={setLogoImage}
            suggestion={imageSuggestions.logoImage}
          />

          <ImageDropzone
            label="Hero image"
            value={heroImage}
            onChange={setHeroImage}
            suggestion={imageSuggestions.heroImage}
          />

          <ImageDropzone
            label="Gallery images"
            value={galleryImages}
            onChange={setGalleryImages}
            multiple
            suggestion={imageSuggestions.galleryImages}
          />

          <ImageDropzone
            label="Service images"
            value={serviceImages}
            onChange={setServiceImages}
            multiple
            suggestion={imageSuggestions.serviceImages}
          />

          <ImageDropzone
            label="Team images"
            value={teamImages}
            onChange={setTeamImages}
            multiple
            suggestion={imageSuggestions.teamImages}
          />

          <ImageDropzone
            label="Background images"
            value={backgroundImages}
            onChange={setBackgroundImages}
            multiple
            suggestion={imageSuggestions.backgroundImages}
          />
        </div>
      </div>
    );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] px-5 py-6 text-[#f7f6ed] md:px-8 md:py-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(85,245,198,0.1),transparent_28%),radial-gradient(circle_at_78%_4%,rgba(85,245,198,0.075),transparent_22%),linear-gradient(180deg,#020403_0%,#050706_70%,#020403_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:84px_84px] opacity-30" />

      <div className="mx-auto max-w-[1500px]">
        <header className="mb-6 flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 md:flex-row md:items-center">
          <div>
            <Link
              href="/"
              className="text-[12px] font-black uppercase tracking-[0.22em] text-white"
            >
              SegMockup
            </Link>

            <p className="mt-2 text-sm text-white/38">
              Premium website preview builder by SegLead.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-sm border border-white/10 bg-white/[0.025] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-white/60 transition hover:border-[#55f5c6]/40 hover:text-[#55f5c6]"
            >
              Home
            </Link>

            <a
              href="https://seglead.com"
              className="rounded-sm border border-white/10 bg-white/[0.025] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-white/60 transition hover:border-[#55f5c6]/40 hover:text-[#55f5c6]"
            >
              SegLead
            </a>

            <button
              type="button"
              onClick={generateMockup}
              className="rounded-sm bg-[#55f5c6] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#03110d] shadow-[0_0_30px_rgba(85,245,198,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Generate Mockup
            </button>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[310px_minmax(0,1fr)_320px] xl:items-start">
          <aside className="xl:sticky xl:top-6">
            <div className="rounded-2xl border border-white/[0.075] bg-white/[0.045] p-5 shadow-2xl shadow-black/35 backdrop-blur-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#55f5c6]">
                Client Mockup Builder
              </p>

              <h1 className="mt-4 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-white">
                Build sharp previews faster.
              </h1>

              <p className="mt-4 text-sm leading-6 text-white/42">
                Write naturally. The AI will detect car, salon, or dentist from
                your prompt.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/25 p-1.5">
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setMode("ai")}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-semibold transition",
                      mode === "ai"
                        ? "bg-[#55f5c6] text-[#03110d] shadow-[0_0_22px_rgba(85,245,198,0.16)]"
                        : "text-white/42 hover:bg-white/[0.06] hover:text-white",
                    )}
                  >
                    AI Studio
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("manual")}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-semibold transition",
                      mode === "manual"
                        ? "bg-[#55f5c6] text-[#03110d] shadow-[0_0_22px_rgba(85,245,198,0.16)]"
                        : "text-white/42 hover:bg-white/[0.06] hover:text-white",
                    )}
                  >
                    Manual
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-white">
                  Quick starters
                </p>

                <div className="mt-3 grid gap-2">
                  {starters.map((starter) => (
                    <button
                      key={starter.label}
                      type="button"
                      onClick={() => applyStarter(starter)}
                      className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left text-sm font-semibold text-white/55 transition hover:-translate-y-0.5 hover:border-[#55f5c6]/45 hover:bg-[#55f5c6]/[0.06] hover:text-white"
                    >
                      {starter.label}
                    </button>
                  ))}
                </div>
              </div>

              {mode === "manual" ? (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">
                    Manual sections
                  </p>

                  <div className="mt-3 grid gap-2">
                    {manualSections.map((section) => (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => setActiveManualSection(section.id)}
                        className={cn(
                          "rounded-xl border px-4 py-3 text-left transition",
                          activeManualSection === section.id
                            ? "border-[#55f5c6]/45 bg-[#55f5c6]/[0.08]"
                            : "border-white/10 bg-white/[0.03] hover:border-[#55f5c6]/30 hover:bg-white/[0.055]",
                        )}
                      >
                        <span className="block text-sm font-semibold text-white">
                          {section.label}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-white/35">
                          {section.description}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </aside>

          <div className="space-y-6">
            {mode === "ai" ? (
              <>
                <Section
                  eyebrow="AI Studio"
                  title="Premium brief composer"
                  description="Describe the business and the images separately. The AI will auto-select the right industry and fetch matching images when enabled."
                  action={
                    <div className="rounded-full border border-[#55f5c6]/20 bg-[#55f5c6]/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#55f5c6]">
                      Prompt {promptStrength}%
                    </div>
                  }
                >
                  <div className="grid gap-5 lg:grid-cols-[1fr_240px]">
                    <div className="space-y-5">
                      <TextField
                        label="Client brief"
                        value={clientContext}
                        onChange={setClientContext}
                        placeholder="Example: Business name is SegLead Motors. Premium car rental and dealership in Istanbul. Needs a luxury website for WhatsApp enquiries."
                        rows={6}
                        helper="Mention name, business type, location, audience, services, and goal."
                      />

                      <TextField
                        label="Image instructions"
                        value={assetInstructions}
                        onChange={setAssetInstructions}
                        placeholder="Hero: luxury car dealership showroom. Gallery: random BMW, Mercedes, Audi, sports car photos. Avoid: mechanic, repair shop, cheap rental car images."
                        rows={5}
                        helper="Tell the AI exactly what hero, gallery, service, team, and background images should look like."
                      />

                      <div className="flex flex-wrap gap-2">
                        {promptStarters.map((prompt) => (
                          <button
                            key={prompt.label}
                            type="button"
                            onClick={() => {
                              setClientContext(prompt.value);
                              setAssetInstructions(prompt.assets);
                              setIndustry(prompt.industry);
                            }}
                            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-white/50 transition hover:border-[#55f5c6]/45 hover:text-[#55f5c6]"
                          >
                            {prompt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#55f5c6]/20 bg-[radial-gradient(circle_at_70%_20%,rgba(85,245,198,0.16),transparent_28%),linear-gradient(180deg,rgba(85,245,198,0.06),rgba(255,255,255,0.02))] p-5">
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
                        AI Output
                      </p>

                      <p className="mt-4 text-2xl font-semibold leading-none tracking-[-0.04em] text-white">
                        Copy, sections, colors, image queries, and real stock
                        images.
                      </p>

                      <button
                        type="button"
                        onClick={() => setAutoImages((value) => !value)}
                        className={cn(
                          "mt-5 w-full rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] transition",
                          autoImages
                            ? "border-[#55f5c6]/45 bg-[#55f5c6]/10 text-[#55f5c6]"
                            : "border-white/10 bg-white/[0.035] text-white/40",
                        )}
                      >
                        {autoImages ? "Auto images on" : "Auto images off"}
                      </button>

                      <button
                        type="button"
                        onClick={generateWithAi}
                        disabled={aiLoading}
                        className="mt-4 w-full rounded-sm bg-[#55f5c6] px-5 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#03110d] shadow-[0_0_30px_rgba(85,245,198,0.16)] transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {aiLoading ? "Generating..." : "Generate with AI"}
                      </button>
                    </div>
                  </div>

                  {aiError ? (
                    <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100">
                      {aiError}
                    </div>
                  ) : null}
                </Section>

                <Section
                  eyebrow="Review"
                  title="AI result editor"
                  description="After generating, review and tweak the important fields before opening the final preview."
                >
                  <div className="space-y-3">
                    <DetailGroup
                      title="Core page content"
                      description="Business name, hero, services, and CTA."
                      defaultOpen
                    >
                      <div className="grid gap-5 md:grid-cols-2">
                        <TextField
                          label="Business name"
                          value={businessName}
                          onChange={setBusinessName}
                          placeholder="SegLead Motors"
                        />

                        <SelectField
                          label="Industry"
                          value={industry}
                          onChange={(value) => setIndustry(value as Industry)}
                          options={industries}
                        />

                        <TextField
                          label="Hero headline"
                          value={heroHeadline}
                          onChange={setHeroHeadline}
                          placeholder="Premium cars for drivers who expect more"
                        />

                        <TextField
                          label="Hero description"
                          value={heroDescription}
                          onChange={setHeroDescription}
                          placeholder="Luxury rentals and curated sales in Istanbul."
                        />

                        <TextField
                          label="Services"
                          value={services}
                          onChange={setServices}
                          placeholder="Luxury SUV, Executive Sedan, Sports Coupe"
                        />

                        <TextField
                          label="Main CTA"
                          value={mainCta}
                          onChange={setMainCta}
                          placeholder="Book A Viewing"
                        />
                      </div>
                    </DetailGroup>

                    <DetailGroup
                      title="Images"
                      description="Fetched images and generated image directions."
                    >
                      {manualSections.find((section) => section.id === "images")
                        ? manualContent
                        : null}
                    </DetailGroup>
                  </div>
                </Section>
              </>
            ) : (
              <Section
                eyebrow="Manual Builder"
                title={
                  manualSections.find(
                    (section) => section.id === activeManualSection,
                  )?.label || "Manual Builder"
                }
                description={
                  manualSections.find(
                    (section) => section.id === activeManualSection,
                  )?.description ||
                  "Edit the mockup in smaller, easier sections."
                }
              >
                <div className="mb-5 grid gap-2 sm:grid-cols-2 lg:hidden">
                  {manualSections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setActiveManualSection(section.id)}
                      className={cn(
                        "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition",
                        activeManualSection === section.id
                          ? "border-[#55f5c6]/45 bg-[#55f5c6]/[0.08] text-white"
                          : "border-white/10 bg-white/[0.03] text-white/45",
                      )}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>

                {manualContent}
              </Section>
            )}
          </div>

          <aside className="space-y-6 xl:sticky xl:top-6">
            <div className="rounded-2xl border border-white/[0.075] bg-white/[0.045] p-5 shadow-2xl shadow-black/35 backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
                    Readiness
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {helpfulFields}/5 fields
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#55f5c6]/30 bg-[#55f5c6]/10 text-sm font-black text-[#55f5c6]">
                  {readinessPercent}%
                </div>
              </div>

              <div className="mt-5 h-2 rounded-full bg-black/30">
                <div
                  className="h-2 rounded-full bg-[#55f5c6] shadow-[0_0_20px_rgba(85,245,198,0.35)] transition-all"
                  style={{ width: `${readinessPercent}%` }}
                />
              </div>

              <div className="mt-5 grid gap-2">
                {readinessItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2"
                  >
                    <span className="text-sm text-white/45">{item.label}</span>
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        item.done ? "bg-[#55f5c6]" : "bg-white/15",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#55f5c6]/20 bg-[radial-gradient(circle_at_70%_10%,rgba(85,245,198,0.13),transparent_30%),linear-gradient(180deg,#07100d,#030504)] p-5 shadow-2xl shadow-black/35">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
                    Live Snapshot
                  </p>

                  <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                    {businessName || "Untitled client"}
                  </p>
                </div>

                <div
                  className="h-10 w-10 rounded-full border border-white/10"
                  style={{ background: safeColor(primaryColor) }}
                />
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-lg font-semibold leading-tight tracking-[-0.04em] text-white">
                  {heroHeadline || "Hero headline preview"}
                </p>

                <p className="mt-3 text-sm leading-6 text-white/42">
                  {heroDescription ||
                    "Your main client message appears here before the full preview is generated."}
                </p>

                {heroImage ? (
                  <div
                    className="mt-5 h-32 rounded-xl border border-white/10 bg-cover bg-center"
                    style={{ backgroundImage: `url("${heroImage}")` }}
                  />
                ) : null}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.075] bg-white/[0.045] p-5 shadow-2xl shadow-black/35 backdrop-blur-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#55f5c6]">
                Visual Style
              </p>

              <div className="mt-5 space-y-4">
                <SelectField
                  label="Style"
                  value={style}
                  onChange={(value) => setStyle(value as MockupStyle)}
                  options={styleOptions}
                />

                <ColorField
                  label="Primary"
                  value={primaryColor}
                  onChange={setPrimaryColor}
                />

                <ColorField
                  label="Background"
                  value={secondaryColor}
                  onChange={setSecondaryColor}
                />

                <ColorField
                  label="Accent"
                  value={accentColor}
                  onChange={setAccentColor}
                />

                <ColorField
                  label="Text"
                  value={textColor}
                  onChange={setTextColor}
                />
              </div>

              <button
                type="button"
                onClick={generateMockup}
                className="mt-6 w-full rounded-sm bg-[#55f5c6] px-5 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#03110d] shadow-[0_0_30px_rgba(85,245,198,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Generate Mockup
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}