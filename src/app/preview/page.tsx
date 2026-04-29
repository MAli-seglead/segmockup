import MockupPreviewClient from "@/components/mockup/MockupPreviewClient";
import { defaultImageSets } from "@/data/mockupImages";
import { defaultServices } from "@/data/templates";
import type { Industry, MockupStyle, MockupData } from "@/types/mockup";

type Props = {
  searchParams: Promise<{
    businessName?: string;
    name?: string;
    industry?: string;
    primary?: string;
    secondary?: string;
    accent?: string;
    background?: string;
    text?: string;
    style?: MockupStyle;
    services?: string;
    serviceDescriptions?: string;
    servicesTitle?: string;
    galleryTitle?: string;
    testimonialsTitle?: string;
    contactTitle?: string;
    brandTone?: string;
    colorSuggestions?: string;
    layoutSuggestions?: string;
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

function semicolonList(value: string | undefined) {
  return value
    ? value
        .split(";")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}

function resolveIndustry(value: string | undefined): Industry {
  return value === "salon" || value === "car" ? value : "dentist";
}

function industryFallback(
  industry: Industry,
  dentist: string,
  salon: string,
  car: string,
) {
  if (industry === "salon") {
    return salon;
  }

  if (industry === "car") {
    return car;
  }

  return dentist;
}

function imagesWithFallback(images: string[], fallbackImages: string[]) {
  if (images.length === 0) {
    return fallbackImages;
  }

  return [...images, ...fallbackImages.slice(images.length)];
}

export default async function PreviewPage({ searchParams }: Props) {
  const params = await searchParams;
  const industry = resolveIndustry(params.industry);
  const imageSet = defaultImageSets[industry];
  const services = commaList(params.services);
  const serviceDescriptions = semicolonList(params.serviceDescriptions);
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
    primaryColor: params.primary || industryFallback(industry, "#2563eb", "#a16207", "#c7a15a"),
    secondaryColor:
      params.secondary ||
      params.background ||
      industryFallback(industry, "#ffffff", "#17130f", "#090909"),
    accentColor: optionalValue(params.accent),
    backgroundColor: optionalValue(params.background || params.secondary),
    textColor: optionalValue(params.text),
    style: params.style || (industry === "dentist" ? "basic" : "luxury"),
    services: services.length > 0 ? services : defaultServices[industry],
    serviceDescriptions,
    servicesTitle: valueOrFallback(
      params.servicesTitle,
      industryFallback(industry, "Treatments made clear", "Signature services", "Featured inventory"),
    ),
    galleryTitle: valueOrFallback(
      params.galleryTitle,
      industryFallback(industry, "Clinic moments", "A visual reason to book", "Angles worth seeing in person"),
    ),
    testimonialsTitle: valueOrFallback(
      params.testimonialsTitle,
      industryFallback(industry, "Client words that build trust", "Client words, softly spoken", "What drivers say after the handover"),
    ),
    contactTitle: valueOrFallback(
      params.contactTitle,
      industryFallback(industry, "Make the next step feel obvious", "Turn the mood into a reservation", "Reserve the car before it moves"),
    ),
    brandTone: optionalValue(params.brandTone),
    colorSuggestions: optionalValue(params.colorSuggestions),
    layoutSuggestions: optionalValue(params.layoutSuggestions),
    logoText: valueOrFallback(params.logoText, businessName),
    logoImage: optionalValue(params.logoImage),
    slogan: valueOrFallback(
      params.slogan,
      industryFallback(industry, "Designed around client trust", "Beauty, composed with taste", "Selected cars. Serious presence."),
    ),
    heroHeadline: valueOrFallback(
      params.heroHeadline,
      industryFallback(
        industry,
        "Calm, clear dental care for " + businessName + ".",
        "A boutique beauty experience for " + businessName + ".",
        "Premium cars for people who notice the details.",
      ),
    ),
    heroDescription: valueOrFallback(
      params.heroDescription || params.shortDescription,
      industryFallback(
        industry,
        "Premium dental care for families and professionals.",
        "A compact luxury salon preview built around visual confidence and easy booking.",
        "Curated rentals and sales with clear choices, polished handovers, and cars that photograph as well as they drive.",
      ),
    ),
    shortDescription: optionalValue(params.shortDescription || params.heroDescription),
    aboutTitle: valueOrFallback(
      params.aboutTitle,
      industryFallback(
        industry,
        "A softer first impression for serious care.",
        "Atmosphere comes before the appointment.",
        "A sharper way to choose your next drive.",
      ),
    ),
    aboutText: valueOrFallback(
      params.aboutText,
      industryFallback(
        industry,
        businessName + " feels premium, patient, and trustworthy, with clear treatment language that helps visitors feel oriented before reaching out.",
        businessName + " feels editorial, intimate, and premium, with a compact page that gives clients a strong sense of taste before booking.",
        businessName + " presents its cars with the confidence of an automotive house: clean inventory, strong imagery, and a direct route to book, test drive, or buy.",
      ),
    ),
    mainCta: valueOrFallback(params.mainCta, industryFallback(industry, "Book Free Consultation", "Reserve A Visit", "Book A Viewing")),
    secondaryCta: valueOrFallback(params.secondaryCta, industryFallback(industry, "View Services", "Explore Treatments", "View Cars")),
    specialOffer: valueOrFallback(
      params.specialOffer,
      industryFallback(industry, "Free smile assessment this month", "New client glow package available this month", "Priority handover slots this week"),
    ),
    phone: valueOrFallback(params.phone, "+90 555 000 00 00"),
    location: valueOrFallback(params.location, "Istanbul, Turkey"),
    workingHours: valueOrFallback(params.workingHours, "Mon-Sat 09:00-18:00"),
    audience: valueOrFallback(
      params.audience,
      industryFallback(
        industry,
        "Families, professionals, and cosmetic treatment clients",
        "Style-conscious clients, bridal guests, and beauty regulars",
        "Luxury buyers, business travelers, and weekend drivers",
      ),
    ),
    heroImage: optionalValue(params.heroImage) || imageSet.heroImage,
    galleryImages: imagesWithFallback(galleryImages, imageSet.galleryImages),
    serviceImages: imagesWithFallback(serviceImages, imageSet.serviceImages),
    teamImages: imagesWithFallback(teamImages, imageSet.teamImages),
    backgroundImages: imagesWithFallback(
      backgroundImages,
      imageSet.backgroundImages,
    ),
    reviews:
      reviews.length > 0
        ? reviews
        : [
            industryFallback(industry, "The whole visit felt calm and professional.", "The atmosphere felt beautiful from the first look.", "The car was ready, detailed, and exactly as described."),
            industryFallback(industry, "Booking was simple and the team explained everything.", "My booking was effortless and the result looked polished.", "The handover felt premium and the process was clear."),
            industryFallback(industry, "The website immediately made the business feel trustworthy.", "The page made the studio feel worth booking.", "The inventory presentation made it easy to choose quickly."),
          ],
  };

  return <MockupPreviewClient data={data} imageSession={params.imageSession} />;
}
