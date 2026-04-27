import MockupPreviewClient from "@/components/mockup/MockupPreviewClient";
import { defaultServices } from "@/data/templates";
import type { Industry, MockupStyle, MockupData } from "@/types/mockup";

type Props = {
  searchParams: Promise<{
    businessName?: string;
    name?: string;
    industry?: Industry;
    primary?: string;
    secondary?: string;
    style?: MockupStyle;
    services?: string;
    logoText?: string;
    logoImage?: string;
    slogan?: string;
    heroHeadline?: string;
    heroDescription?: string;
    shortDescription?: string;
    aboutTitle?: string;
    aboutText?: string;
    mainCta?: string;
    secondaryCta?: string;
    specialOffer?: string;
    phone?: string;
    location?: string;
    workingHours?: string;
    audience?: string;
    heroImage?: string;
    galleryImages?: string;
    serviceImages?: string;
    teamImages?: string;
    backgroundImages?: string;
    reviews?: string;
    imageSession?: string;
  }>;
};

function valueOrFallback(value: string | undefined, fallback: string) {
  return value && value.trim().length > 0 ? value.trim() : fallback;
}

function optionalValue(value: string | undefined) {
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

function commaList(value: string | undefined) {
  return value
    ? value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}

function pipeList(value: string | undefined) {
  return value
    ? value
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}

export default async function PreviewPage({ searchParams }: Props) {
  const params = await searchParams;

  const industry: Industry = params.industry || "dentist";

  const services = commaList(params.services);
  const galleryImages = commaList(params.galleryImages);
  const serviceImages = commaList(params.serviceImages);
  const teamImages = commaList(params.teamImages);
  const backgroundImages = commaList(params.backgroundImages);
  const reviews = pipeList(params.reviews);

  const businessName = valueOrFallback(
    params.businessName || params.name,
    "Client Business",
  );

  const data: MockupData = {
    businessName,
    industry,
    primaryColor: params.primary || "#2563eb",
    secondaryColor: params.secondary || "#f8fafc",
    style: params.style || "clean",
    services: services.length > 0 ? services : defaultServices[industry],
    logoText: valueOrFallback(params.logoText, businessName),
    logoImage: optionalValue(params.logoImage),
    slogan: valueOrFallback(params.slogan, "Designed around client trust"),
    heroHeadline: valueOrFallback(
      params.heroHeadline,
      industry === "salon"
        ? `A boutique beauty experience for ${businessName}.`
        : `Calm, clear dental care for ${businessName}.`,
    ),
    heroDescription: valueOrFallback(
      params.heroDescription || params.shortDescription,
      "Premium dental care for families and professionals",
    ),
    shortDescription: optionalValue(
      params.shortDescription || params.heroDescription,
    ),
    aboutTitle: valueOrFallback(
      params.aboutTitle,
      industry === "salon"
        ? "Atmosphere comes before the appointment."
        : "A softer first impression for serious care.",
    ),
    aboutText: valueOrFallback(
      params.aboutText,
      industry === "salon"
        ? `${businessName} feels editorial, intimate, and premium, with a compact page that gives clients a strong sense of taste before booking.`
        : `${businessName} feels premium, patient, and trustworthy, with clear treatment language that helps visitors feel oriented before reaching out.`,
    ),
    mainCta: valueOrFallback(params.mainCta, "Book Free Consultation"),
    secondaryCta: valueOrFallback(params.secondaryCta, "View Services"),
    specialOffer: valueOrFallback(
      params.specialOffer,
      "Free smile assessment this month",
    ),
    phone: valueOrFallback(params.phone, "+90 555 000 00 00"),
    location: valueOrFallback(params.location, "Istanbul, Turkey"),
    workingHours: valueOrFallback(params.workingHours, "Mon-Sat 09:00-18:00"),
    audience: valueOrFallback(
      params.audience,
      "Families, professionals, and cosmetic treatment clients",
    ),
    heroImage: optionalValue(params.heroImage),
    galleryImages,
    serviceImages,
    teamImages,
    backgroundImages,
    reviews:
      reviews.length > 0
        ? reviews
        : [
            "The whole experience felt polished and professional.",
            "Booking was simple and the team explained everything.",
            "The website immediately made the business feel trustworthy.",
          ],
  };

  return <MockupPreviewClient data={data} imageSession={params.imageSession} />;
}
