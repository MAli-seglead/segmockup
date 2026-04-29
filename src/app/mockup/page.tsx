"use client";

import { useState, type DragEvent } from "react";
import { useRouter } from "next/navigation";
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

type ImageSuggestions = {
  logoImage: string;
  heroImage: string;
  galleryImages: string;
  teamImages: string;
  serviceImages: string;
  backgroundImages: string;
};

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

function TextField({
  label,
  value,
  onChange,
  placeholder,
  helper,
  rows,
}: FieldProps) {
  const className =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-[#fff8ec] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition placeholder:text-[#8d8069] hover:border-[#d7b46a]/40 focus:border-[#d7b46a]/70 focus:bg-white/[0.075] focus:ring-4 focus:ring-[#d7b46a]/10";

  return (
    <div>
      <label className="text-sm font-medium text-[#d9c9ad]">{label}</label>
      {rows ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`${className} resize-none`}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={className}
        />
      )}
      {helper ? <p className="mt-2 text-xs text-[#9f927a]">{helper}</p> : null}
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-[#17140f]/75 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-[#d7b46a]/25 md:p-6">
      <div className="mb-5 border-b border-white/10 pb-4">
        <h2 className="text-base font-semibold text-[#fff8ec]">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-[#a99b83]">{description}</p>
      </div>
      {children}
    </section>
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
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function joinImageList(values: string[]) {
  return values.join(",");
}

function urlOnly(value: string) {
  return value.startsWith("data:") ? "" : value;
}

function urlListOnly(value: string) {
  return joinImageList(
    splitImageList(value).filter((item) => !item.startsWith("data:")),
  );
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

    if (imageFiles.length === 0) {
      return;
    }

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
        <label className="text-sm font-medium text-[#d9c9ad]">{label}</label>
        {hasImages ? (
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-xs font-semibold text-[#d7b46a] transition hover:text-[#fff0bd]"
          >
            Clear
          </button>
        ) : null}
      </div>

      <label
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        className="group block cursor-pointer rounded-[1.5rem] border border-dashed border-[#d7b46a]/35 bg-white/[0.045] p-4 transition hover:-translate-y-0.5 hover:border-[#d7b46a]/70 hover:bg-[#d7b46a]/10"
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
                className="h-36 rounded-2xl bg-cover bg-center shadow-xl shadow-black/20"
                style={{ backgroundImage: `url("${image}")` }}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-5 py-8 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7b46a]/15 text-lg text-[#d7b46a]">
              +
            </div>
            <p className="mt-4 text-sm font-semibold text-[#fff8ec]">
              Drop image or click to upload
            </p>
            <p className="mt-2 text-xs leading-5 text-[#9f927a]">
              {suggestion || "Elegant placeholder used when empty."}
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
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [mode, setMode] = useState<"ai" | "manual">("ai");
  const [imageSuggestions, setImageSuggestions] = useState<ImageSuggestions>({
    logoImage: "Simple mark or monogram on a quiet luxury background.",
    heroImage: "Premium first impression image that matches the client tone.",
    galleryImages: "A curated set of atmospheric detail and result images.",
    teamImages: "Warm, polished portraits of the people behind the business.",
    serviceImages: "Close-up treatment or service images with premium lighting.",
    backgroundImages: "Subtle brand texture or interior image for depth.",
  });

  const helpfulFields = [
    businessName.trim(),
    heroHeadline.trim(),
    heroDescription.trim(),
    services.trim(),
    mainCta.trim(),
  ].filter(Boolean).length;

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
    setColorSuggestions("Use the selected palette as the accent system for buttons, highlights, and image overlays.");
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

  function suggestImageDirection() {
    const subject =
      clientContext || heroDescription || heroHeadline || businessName || industry;
    const tone =
      industry === "car"
        ? "premium automotive showroom, dark metallic finish, cinematic lighting"
        : industry === "salon"
          ? "luxury salon, champagne light, elegant boutique interior"
          : "premium clinic, calm daylight, clean trustworthy atmosphere";

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

    if (!clientContext.trim()) {
      setAiError("Add a short client context first.");
      return;
    }

    setAiLoading(true);

    try {
      const response = await fetch("/api/generate-mockup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientContext,
          industry,
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

      applyGeneratedContent(result as GeneratedMockupContent);
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
      industry,
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

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070706] px-5 py-10 text-[#fff8ec] md:px-8 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(215,180,106,0.18),transparent_28%),radial-gradient(circle_at_78%_4%,rgba(255,248,236,0.1),transparent_22%),linear-gradient(180deg,#0d0b09_0%,#050505_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b46a]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <div className="rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d7b46a]">
                Client Mockup Builder
              </p>

              <h1 className="mt-4 max-w-xs text-4xl font-semibold leading-none tracking-tight text-[#fff8ec]">
                Luxury mockups, composed faster.
              </h1>

              <p className="mt-4 text-sm leading-6 text-[#b6aa93]">
                Fill the first five recommended fields for a useful preview.
                Add images and reviews only when you have them.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMode("ai")}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      mode === "ai"
                        ? "bg-[#d7b46a] text-[#17110a] shadow-lg shadow-[#d7b46a]/20"
                        : "text-[#b6aa93] hover:bg-white/10 hover:text-[#fff8ec]"
                    }`}
                  >
                    AI Assisted
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("manual")}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      mode === "manual"
                        ? "bg-[#d7b46a] text-[#17110a] shadow-lg shadow-[#d7b46a]/20"
                        : "text-[#b6aa93] hover:bg-white/10 hover:text-[#fff8ec]"
                    }`}
                  >
                    Manual Builder
                  </button>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#d9c9ad]">
                    Preview readiness
                  </span>
                  <span className="font-semibold text-[#fff8ec]">
                    {helpfulFields}/5
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-black/30">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#a8792e] via-[#d7b46a] to-[#fff0bd] transition-all"
                    style={{ width: `${(helpfulFields / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[#d7b46a]/20 bg-gradient-to-br from-[#21170d] via-[#11100d] to-black p-4 shadow-xl shadow-black/30">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d7b46a]">
                      Preview area
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#fff8ec]">
                      {businessName || "Untitled client"}
                    </p>
                  </div>
                  <div
                    className="h-10 w-10 rounded-full"
                    style={{ background: primaryColor }}
                  />
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm font-medium text-[#fff8ec]">
                    {heroHeadline || "Hero headline preview"}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#a99b83]">
                    {heroDescription ||
                      "Your most important client message appears here."}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-[#fff8ec]">
                  Quick starters
                </p>
                <div className="mt-3 grid gap-2">
                  {starters.map((starter) => (
                    <button
                      key={starter.label}
                      type="button"
                      onClick={() => applyStarter(starter)}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-left text-sm font-semibold text-[#d9c9ad] transition hover:-translate-y-0.5 hover:border-[#d7b46a]/45 hover:bg-[#d7b46a]/10 hover:text-[#fff8ec]"
                    >
                      {starter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm leading-6 text-[#a99b83]">
                <p>
                  Start with business name, hero headline, hero description,
                  services, and CTA.
                </p>
                <p>
                  Image URLs are optional. The preview will use clean fallback
                  visuals when they are empty.
                </p>
              </div>

              <button
                type="button"
                onClick={generateMockup}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#b9893d] via-[#d7b46a] to-[#f7dfaa] px-5 py-4 font-semibold text-[#17110a] shadow-xl shadow-[#d7b46a]/20 transition hover:-translate-y-0.5 hover:shadow-[#d7b46a]/30"
              >
                Generate Mockup
              </button>
            </div>
          </aside>

          <div className="space-y-5">
            {mode === "ai" ? (
              <Section
                title="AI Assisted"
              description="Describe the client once. AI will fill the manual fields below, and you can edit every result before previewing."
            >
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                <TextField
                  label="Client context"
                  value={clientContext}
                  onChange={setClientContext}
                  placeholder="Example: Premium dentist clinic in Istanbul for families and professionals. Wants a calm trustworthy website focused on appointments."
                  helper="Mention the business type, city, audience, tone, offer, and booking goal if you know them."
                  rows={4}
                />

                <button
                  type="button"
                  onClick={generateWithAi}
                  disabled={aiLoading}
                  className="rounded-2xl bg-gradient-to-r from-[#b9893d] via-[#d7b46a] to-[#f7dfaa] px-6 py-4 font-semibold text-[#17110a] shadow-xl shadow-[#d7b46a]/20 transition hover:-translate-y-0.5 hover:shadow-[#d7b46a]/30 disabled:cursor-not-allowed disabled:from-[#4c4437] disabled:via-[#5b5142] disabled:to-[#5b5142] disabled:text-[#a99b83] md:min-w-44"
                >
                  {aiLoading ? "Generating..." : "Generate with AI"}
                </button>
              </div>

              {aiError ? (
                <p className="mt-4 rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200">
                  {aiError}
                </p>
              ) : null}
              </Section>
            ) : null}

            <Section
              title={mode === "ai" ? "1. Review generated content" : "1. Manual Builder"}
              description="The preview can already feel client-specific with these core details."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <TextField
                  label="Business name"
                  value={businessName}
                  onChange={setBusinessName}
                  placeholder="CCS Dental"
                  helper="Used in the logo, hero, reviews, and contact section."
                />

                <div>
                  <label className="text-sm font-medium text-[#d9c9ad]">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value as Industry)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#14100c] px-4 py-3 text-[#fff8ec] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition hover:border-[#d7b46a]/40 focus:border-[#d7b46a]/70 focus:ring-4 focus:ring-[#d7b46a]/10"
                  >
                    {industries.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-xs text-[#9f927a]">
                    Switches between the dentist, salon, and automotive website design.
                  </p>
                </div>

                <TextField
                  label="Hero headline"
                  value={heroHeadline}
                  onChange={setHeroHeadline}
                  placeholder="Premium dental care for modern families"
                  helper="The main headline visitors see first."
                />

                <TextField
                  label="Hero description"
                  value={heroDescription}
                  onChange={setHeroDescription}
                  placeholder="Premium dental care for families and professionals"
                  helper="One clear sentence about who this is for and why it matters."
                />

                <TextField
                  label="Services"
                  value={services}
                  onChange={setServices}
                  placeholder="Whitening, Implants, Braces"
                  helper="Separate each service with a comma."
                />

                <TextField
                  label="Main CTA"
                  value={mainCta}
                  onChange={setMainCta}
                  placeholder="Book Free Consultation"
                  helper="The main booking button text."
                />
              </div>
            </Section>

            <Section
              title="2. AI strategy and section plan"
              description="Editable AI suggestions for tone, colors, layout, section titles, and service descriptions."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <TextField
                  label="Services section title"
                  value={servicesTitle}
                  onChange={setServicesTitle}
                  placeholder="Signature services"
                />

                <TextField
                  label="Service descriptions"
                  value={serviceDescriptions}
                  onChange={setServiceDescriptions}
                  placeholder="A concise benefit for service one; A concise benefit for service two"
                  helper="Separate each description with a semicolon."
                />

                <TextField
                  label="Gallery title"
                  value={galleryTitle}
                  onChange={setGalleryTitle}
                  placeholder="A visual reason to book"
                />

                <TextField
                  label="Testimonials title"
                  value={testimonialsTitle}
                  onChange={setTestimonialsTitle}
                  placeholder="Client words that build trust"
                />

                <TextField
                  label="Contact title"
                  value={contactTitle}
                  onChange={setContactTitle}
                  placeholder="Make the next step feel obvious"
                />

                <TextField
                  label="Brand tone"
                  value={brandTone}
                  onChange={setBrandTone}
                  placeholder="Calm, premium, reassuring, and direct."
                />
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <TextField
                  label="Color suggestions"
                  value={colorSuggestions}
                  onChange={setColorSuggestions}
                  placeholder="Use champagne accents over a dark luxury base."
                  rows={3}
                />

                <TextField
                  label="Layout suggestions"
                  value={layoutSuggestions}
                  onChange={setLayoutSuggestions}
                  placeholder="Lead with a strong hero, then services, trust proof, gallery, and CTA."
                  rows={3}
                />
              </div>
            </Section>

            <Section
              title="3. Brand and trust"
              description="These details make the mockup feel less generic without needing real assets."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <TextField
                  label="Logo text"
                  value={logoText}
                  onChange={setLogoText}
                  placeholder="CCS Dental"
                />

                <TextField
                  label="Slogan"
                  value={slogan}
                  onChange={setSlogan}
                  placeholder="Calm, modern dental care."
                />

                <TextField
                  label="Special offer"
                  value={specialOffer}
                  onChange={setSpecialOffer}
                  placeholder="Free smile assessment this month"
                />

                <TextField
                  label="Audience"
                  value={audience}
                  onChange={setAudience}
                  placeholder="Families, professionals, and cosmetic treatment clients"
                />
              </div>
            </Section>

            <Section
              title="3. About section"
              description="Use this to explain why the client is credible, premium, or different."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <TextField
                  label="About title"
                  value={aboutTitle}
                  onChange={setAboutTitle}
                  placeholder="A calmer clinic experience from first visit"
                />

                <TextField
                  label="Secondary CTA"
                  value={secondaryCta}
                  onChange={setSecondaryCta}
                  placeholder="View Services"
                />
              </div>

              <div className="mt-5">
                <TextField
                  label="About text"
                  value={aboutText}
                  onChange={setAboutText}
                  placeholder="Tell visitors what makes the business credible, personal, and worth booking."
                  rows={4}
                />
              </div>
            </Section>

            <Section
              title="4. Contact details"
              description="These appear near the booking area so the preview feels like a real local business."
            >
              <div className="grid gap-5 md:grid-cols-5">
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
            </Section>

            <details className="group rounded-[1.75rem] border border-white/10 bg-[#17140f]/75 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-[#d7b46a]/25">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6">
                <div>
                  <h2 className="text-base font-semibold text-[#fff8ec]">
                    Images, background and reviews
                  </h2>
                  <p className="mt-1 text-sm text-[#a99b83]">
                    Upload files, paste image URLs, or use AI-suggested image
                    directions as placeholders.
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-semibold text-[#d9c9ad] group-open:hidden">
                  Open
                </span>
                <span className="hidden rounded-full bg-[#d7b46a] px-4 py-2 text-sm font-semibold text-[#17110a] group-open:inline">
                  Close
                </span>
              </summary>

              <div className="border-t border-white/10 p-5 md:p-6">
                <div className="mb-5 flex flex-col justify-between gap-3 rounded-2xl border border-[#d7b46a]/20 bg-[#d7b46a]/10 p-4 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-semibold text-[#fff8ec]">
                      AI-assisted image direction
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#a99b83]">
                      Uses your client context and current copy to suggest what
                      each image slot should contain.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={suggestImageDirection}
                    className="rounded-2xl border border-[#d7b46a]/40 px-4 py-3 text-sm font-semibold text-[#f7dfaa] transition hover:bg-[#d7b46a]/15"
                  >
                    Suggest image plan
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
                    label="Service images"
                    value={serviceImages}
                    onChange={setServiceImages}
                    multiple
                    suggestion={imageSuggestions.serviceImages}
                  />

                  <ImageDropzone
                    label="Gallery images"
                    value={galleryImages}
                    onChange={setGalleryImages}
                    multiple
                    suggestion={imageSuggestions.galleryImages}
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

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <TextField
                    label="Logo image URL"
                    value={logoImage}
                    onChange={setLogoImage}
                    placeholder="https://example.com/logo.png"
                  />

                  <TextField
                    label="Hero image URL"
                    value={heroImage}
                    onChange={setHeroImage}
                    placeholder="https://example.com/clinic.jpg"
                  />

                  <TextField
                    label="Service image URLs"
                    value={serviceImages}
                    onChange={setServiceImages}
                    placeholder="https://example.com/service-1.jpg, https://example.com/service-2.jpg"
                    helper="Comma separated."
                  />

                  <TextField
                    label="Gallery image URLs"
                    value={galleryImages}
                    onChange={setGalleryImages}
                    placeholder="https://example.com/photo-1.jpg, https://example.com/photo-2.jpg"
                    helper="Comma separated."
                  />

                  <TextField
                    label="Team image URLs"
                    value={teamImages}
                    onChange={setTeamImages}
                    placeholder="https://example.com/team-1.jpg, https://example.com/team-2.jpg"
                    helper="Comma separated."
                  />

                  <TextField
                    label="Background image URLs"
                    value={backgroundImages}
                    onChange={setBackgroundImages}
                    placeholder="https://example.com/background.jpg"
                    helper="Comma separated."
                  />
                </div>

                <div className="mt-5">
                  <TextField
                    label="Reviews"
                    value={reviews}
                    onChange={setReviews}
                    placeholder="Amazing service | Beautiful result | Easy booking"
                    helper="Separate reviews with the | symbol."
                  />
                </div>
              </div>
            </details>

            <Section
              title="5. Visual style"
              description="Small styling controls for the generated page."
            >
              <div className="grid gap-5 md:grid-cols-5">
                <div>
                  <label className="text-sm font-medium text-[#d9c9ad]">
                    Style
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value as MockupStyle)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#14100c] px-4 py-3 text-[#fff8ec] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition hover:border-[#d7b46a]/40 focus:border-[#d7b46a]/70 focus:ring-4 focus:ring-[#d7b46a]/10"
                  >
                    <option value="basic">Basic</option>
                    <option value="luxury">Luxury</option>
                    <option value="bold">Bold</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#d9c9ad]">
                    Primary color
                  </label>
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/[0.055] p-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#d9c9ad]">
                    Background color
                  </label>
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/[0.055] p-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#d9c9ad]">
                    Accent color
                  </label>
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/[0.055] p-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#d9c9ad]">
                    Text color
                  </label>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-white/[0.055] p-1"
                  />
                </div>
              </div>
            </Section>

            <button
              type="button"
              onClick={generateMockup}
              className="w-full rounded-2xl bg-gradient-to-r from-[#b9893d] via-[#d7b46a] to-[#f7dfaa] px-5 py-4 font-semibold text-[#17110a] shadow-xl shadow-[#d7b46a]/20 transition hover:-translate-y-0.5 hover:shadow-[#d7b46a]/30"
            >
              Generate Mockup
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
