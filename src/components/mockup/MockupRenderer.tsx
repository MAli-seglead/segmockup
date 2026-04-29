import About from "@/components/sections/About";
import CarInventory from "@/components/sections/CarInventory";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { themeStyle, variantFromStyle } from "@/components/sections/shared";
import type {
  ContactItem,
  ServiceItem,
  TestimonialItem,
  VehicleItem,
  ColorTheme,
} from "@/components/sections/types";
import type { MockupData, SectionVariant } from "@/types/mockup";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const variantShell: Record<SectionVariant, string> = {
  luxury: "min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]",
  basic: "min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]",
  bold: "min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]",
};

const fallbackThemes: Record<SectionVariant, ColorTheme> = {
  luxury: {
    primary: "#d7b46a",
    secondary: "#17130f",
    accent: "#f7dfaa",
    background: "#0b0907",
    text: "#f8efe3",
  },
  basic: {
    primary: "#2563eb",
    secondary: "#f8fafc",
    accent: "#0f172a",
    background: "#ffffff",
    text: "#0f172a",
  },
  bold: {
    primary: "#fff200",
    secondary: "#ffffff",
    accent: "#ff4d00",
    background: "#050505",
    text: "#ffffff",
  },
};

function colorOrFallback(value: string | undefined, fallback: string) {
  return value && value.trim().length > 0 ? value : fallback;
}

function buildTheme(data: MockupData, variant: SectionVariant): ColorTheme {
  const fallback = fallbackThemes[variant];

  return {
    primary: colorOrFallback(data.primaryColor, fallback.primary),
    secondary: colorOrFallback(data.secondaryColor, fallback.secondary),
    accent: colorOrFallback(data.accentColor, data.primaryColor || fallback.accent),
    background: colorOrFallback(
      data.backgroundColor,
      data.secondaryColor || fallback.background,
    ),
    text: colorOrFallback(data.textColor, fallback.text),
  };
}

function serviceItems(data: MockupData): ServiceItem[] {
  return data.services.map((service, index) => ({
    title: service,
    description:
      data.serviceDescriptions?.[index] ||
      industryServiceDescription(data, service),
    image: data.serviceImages?.[index],
    meta: data.industry === "car" ? "Featured" : "Service",
  }));
}

function vehicleItems(data: MockupData): VehicleItem[] {
  return data.services.map((service, index) => ({
    name: service,
    description:
      data.serviceDescriptions?.[index] ||
      "A polished vehicle option with clear terms, premium presentation, and a fast route to book or buy.",
    image: data.serviceImages?.[index],
    price: index === 0 ? "From $140/day" : index === 1 ? "From $95/day" : "Quote ready",
    specs:
      index === 0
        ? ["SUV", "Automatic", "Premium trim"]
        : index === 1
          ? ["Sedan", "Executive", "Airport ready"]
          : ["Luxury", "Performance", "Limited stock"],
    category: index === 0 ? "SUV" : index === 1 ? "Sedan" : "Luxury",
  }));
}

function testimonials(data: MockupData): TestimonialItem[] {
  return (data.reviews || []).map((quote) => ({
    quote,
    name:
      data.industry === "salon"
        ? data.businessName + " Guest"
        : data.industry === "car"
          ? data.businessName + " Driver"
          : data.businessName + " Patient",
  }));
}

function contactItems(data: MockupData): ContactItem[] {
  return [
    { label: "Phone", value: data.phone || "+90 555 000 00 00" },
    { label: "Location", value: data.location || "Istanbul, Turkey" },
    { label: "Hours", value: data.workingHours || "Mon-Sat 09:00-18:00" },
  ];
}

function industryServiceDescription(data: MockupData, service: string) {
  if (data.industry === "car") {
    return service + " presented with strong visuals, clear vehicle details, and a direct enquiry path.";
  }

  if (data.industry === "salon") {
    return service + " shaped as a polished boutique treatment with visual proof and easy booking.";
  }

  return service + " explained with calm, trustworthy copy and a clear appointment path.";
}

function aboutHighlights(data: MockupData) {
  if (data.industry === "car") {
    return ["Curated stock", "Clear terms", "Premium handover"];
  }

  if (data.industry === "salon") {
    return ["Boutique mood", "Visual proof", "Easy booking"];
  }

  return ["Gentle care", "Clear planning", "Patient trust"];
}

function heroStats(data: MockupData) {
  if (data.industry === "car") {
    return ["SUV / Sedan / Luxury", "Same-day enquiry", "Premium handover"];
  }

  if (data.industry === "salon") {
    return ["Signature services", "Visual gallery", "Booking focused"];
  }

  return ["Family friendly", "Cosmetic care", "Appointment focused"];
}

function gallerySubtitle(data: MockupData) {
  if (data.industry === "car") {
    return "Large image blocks make the inventory feel real before the first enquiry.";
  }

  if (data.industry === "salon") {
    return "Visual proof carries the boutique mood and helps clients imagine the result.";
  }

  return "Clean visuals help the clinic feel credible, calm, and ready for patients.";
}

export default function MockupRenderer({ data }: { data: MockupData }) {
  const variant = variantFromStyle(data.style);
  const theme = buildTheme(data, variant);
  const logoText = data.logoText || data.businessName;
  const primaryCta = { label: data.mainCta || "Book Now", href: "#contact" };
  const secondaryCta = {
    label: data.secondaryCta || (data.industry === "car" ? "View Cars" : "View Services"),
    href: data.industry === "car" ? "#inventory" : "#services",
  };

  return (
    <main className={variantShell[variant]} style={themeStyle(theme)}>
      <Navbar
        variant={variant}
        theme={theme}
        aiGenerated={Boolean(data.brandTone || data.layoutSuggestions)}
        logoText={logoText}
        logoImage={data.logoImage}
        items={navItems}
        cta={primaryCta}
      />

      <Hero
        variant={variant}
        theme={theme}
        aiGenerated={Boolean(data.brandTone || data.layoutSuggestions)}
        industry={data.industry}
        eyebrow={data.slogan || data.industry}
        title={data.heroHeadline || data.businessName}
        subtitle={data.heroDescription || data.shortDescription}
        image={data.heroImage || data.backgroundImages?.[0]}
        logoImage={data.logoImage}
        logoText={logoText}
        location={data.location}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        badge={data.specialOffer}
        stats={heroStats(data)}
      />

      <Services
        variant={variant}
        theme={theme}
        aiGenerated={Boolean(data.serviceDescriptions?.length)}
        industry={data.industry}
        title={data.servicesTitle || (data.industry === "car" ? "Featured services" : "Services")}
        subtitle={data.brandTone}
        items={serviceItems(data)}
      />

      {data.industry === "car" ? (
        <CarInventory
          variant={variant}
          theme={theme}
          aiGenerated={Boolean(data.serviceDescriptions?.length)}
          industry={data.industry}
          title="Featured cars ready for enquiry"
          subtitle={data.layoutSuggestions || "A focused stock section for rental, sales, or viewing enquiries."}
          categories={["SUV", "Sedan", "Luxury", "Electric"]}
          vehicles={vehicleItems(data)}
        />
      ) : null}

      <About
        variant={variant}
        theme={theme}
        aiGenerated={Boolean(data.aboutText)}
        industry={data.industry}
        eyebrow={data.industry === "car" ? "Why choose us" : "About"}
        title={data.aboutTitle || "A clearer first impression"}
        body={data.aboutText || "A focused section that gives visitors enough trust, taste, and context to take the next step."}
        image={data.teamImages?.[0] || data.galleryImages?.[0]}
        highlights={aboutHighlights(data)}
      />

      <Gallery
        variant={variant}
        theme={theme}
        aiGenerated={Boolean(data.galleryImages?.length)}
        industry={data.industry}
        title={data.galleryTitle || "Gallery"}
        subtitle={gallerySubtitle(data)}
        images={data.galleryImages || []}
      />

      <Testimonials
        variant={variant}
        theme={theme}
        aiGenerated={Boolean(data.reviews?.length)}
        industry={data.industry}
        title={data.testimonialsTitle || "Client words"}
        items={testimonials(data)}
      />

      <Contact
        variant={variant}
        theme={theme}
        aiGenerated={Boolean(data.contactTitle)}
        industry={data.industry}
        title={data.contactTitle || "Ready for the next step"}
        subtitle={data.audience ? "Built for " + data.audience + "." : undefined}
        items={contactItems(data)}
        cta={primaryCta}
      />

      <Footer
        variant={variant}
        theme={theme}
        aiGenerated={Boolean(data.brandTone)}
        industry={data.industry}
        logoText={logoText}
        tagline={data.slogan}
        items={navItems}
      />
    </main>
  );
}
