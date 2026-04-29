import { NextResponse } from "next/server";
import type { Industry, MockupStyle } from "@/types/mockup";

type GenerateRequest = {
  clientContext?: string;
  assetInstructions?: string;
  industry?: Industry;
  autoImages?: boolean;
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
  serviceDescriptions: string;
  servicesTitle: string;
  galleryTitle: string;
  testimonialsTitle: string;
  contactTitle: string;
  brandTone: string;
  colorSuggestions: string;
  layoutSuggestions: string;
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
  backgroundColor: string;
  textColor: string;
  logoImageSuggestion: string;
  heroImageSuggestion: string;
  galleryImageSuggestions: string;
  teamImageSuggestions: string;
  serviceImageSuggestions: string;
  backgroundImageSuggestions: string;
  style: MockupStyle;
};

type GeminiResponse = {
  candidates?: {
    content?: {
      parts?: {
        text?: string;
      }[];
    };
  }[];
};

type GeminiErrorResponse = {
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
};

const responseSchema = {
  type: "object",
  properties: {
    businessName: { type: "string" },
    logoText: { type: "string" },
    slogan: { type: "string" },
    location: { type: "string" },
    heroHeadline: { type: "string" },
    heroDescription: { type: "string" },
    aboutTitle: { type: "string" },
    aboutText: { type: "string" },
    services: { type: "string" },
    serviceDescriptions: { type: "string" },
    servicesTitle: { type: "string" },
    galleryTitle: { type: "string" },
    testimonialsTitle: { type: "string" },
    contactTitle: { type: "string" },
    brandTone: { type: "string" },
    colorSuggestions: { type: "string" },
    layoutSuggestions: { type: "string" },
    mainCta: { type: "string" },
    secondaryCta: { type: "string" },
    specialOffer: { type: "string" },
    phone: { type: "string" },
    workingHours: { type: "string" },
    audience: { type: "string" },
    reviews: { type: "string" },
    primaryColor: { type: "string" },
    secondaryColor: { type: "string" },
    accentColor: { type: "string" },
    backgroundColor: { type: "string" },
    textColor: { type: "string" },
    logoImageSuggestion: { type: "string" },
    heroImageSuggestion: { type: "string" },
    galleryImageSuggestions: { type: "string" },
    teamImageSuggestions: { type: "string" },
    serviceImageSuggestions: { type: "string" },
    backgroundImageSuggestions: { type: "string" },
    style: {
      type: "string",
      enum: ["basic", "luxury", "bold"],
    },
  },
  required: [
    "businessName",
    "logoText",
    "slogan",
    "location",
    "heroHeadline",
    "heroDescription",
    "aboutTitle",
    "aboutText",
    "services",
    "serviceDescriptions",
    "servicesTitle",
    "galleryTitle",
    "testimonialsTitle",
    "contactTitle",
    "brandTone",
    "colorSuggestions",
    "layoutSuggestions",
    "mainCta",
    "secondaryCta",
    "specialOffer",
    "phone",
    "workingHours",
    "audience",
    "reviews",
    "primaryColor",
    "secondaryColor",
    "accentColor",
    "backgroundColor",
    "textColor",
    "logoImageSuggestion",
    "heroImageSuggestion",
    "galleryImageSuggestions",
    "teamImageSuggestions",
    "serviceImageSuggestions",
    "backgroundImageSuggestions",
    "style",
  ],
};

function extractGeminiText(response: GeminiResponse) {
  return response.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .filter(Boolean)
    .join("");
}

function isHexColor(value: unknown) {
  return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
}

function cleanHexColor(value: string, fallback: string) {
  return /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
}

function normalizeIndustry(value: unknown): Industry {
  return value === "salon" || value === "car" ? value : "dentist";
}

function isGeneratedMockupContent(
  value: unknown,
): value is GeneratedMockupContent {
  if (!value || typeof value !== "object") {
    return false;
  }

  const content = value as Record<string, unknown>;

  const requiredStrings = [
    "businessName",
    "logoText",
    "slogan",
    "location",
    "heroHeadline",
    "heroDescription",
    "aboutTitle",
    "aboutText",
    "services",
    "serviceDescriptions",
    "servicesTitle",
    "galleryTitle",
    "testimonialsTitle",
    "contactTitle",
    "brandTone",
    "colorSuggestions",
    "layoutSuggestions",
    "mainCta",
    "secondaryCta",
    "specialOffer",
    "phone",
    "workingHours",
    "audience",
    "reviews",
    "logoImageSuggestion",
    "heroImageSuggestion",
    "galleryImageSuggestions",
    "teamImageSuggestions",
    "serviceImageSuggestions",
    "backgroundImageSuggestions",
  ];

  const colorFields = [
    "primaryColor",
    "secondaryColor",
    "accentColor",
    "backgroundColor",
    "textColor",
  ];

  return (
    requiredStrings.every((key) => typeof content[key] === "string") &&
    colorFields.every((key) => isHexColor(content[key])) &&
    ["basic", "luxury", "bold"].includes(content.style as string)
  );
}

function normalizeGeneratedContent(
  content: GeneratedMockupContent,
  industry: Industry,
): GeneratedMockupContent {
  const defaultColors =
    industry === "car"
      ? {
          primary: "#55f5c6",
          secondary: "#050706",
          accent: "#f7f6ed",
          background: "#020403",
          text: "#f7f6ed",
        }
      : industry === "salon"
        ? {
            primary: "#55f5c6",
            secondary: "#080706",
            accent: "#f7d8a8",
            background: "#020403",
            text: "#f7f6ed",
          }
        : {
            primary: "#55f5c6",
            secondary: "#f8fafc",
            accent: "#0f172a",
            background: "#ffffff",
            text: "#0f172a",
          };

  return {
    ...content,
    businessName: content.businessName.trim() || "Client Business",
    logoText: content.logoText.trim() || content.businessName.trim() || "Client",
    services: content.services.trim(),
    serviceDescriptions: content.serviceDescriptions.trim(),
    reviews: content.reviews.trim(),
    primaryColor: cleanHexColor(content.primaryColor, defaultColors.primary),
    secondaryColor: cleanHexColor(
      content.secondaryColor,
      defaultColors.secondary,
    ),
    accentColor: cleanHexColor(content.accentColor, defaultColors.accent),
    backgroundColor: cleanHexColor(
      content.backgroundColor,
      defaultColors.background,
    ),
    textColor: cleanHexColor(content.textColor, defaultColors.text),
    style: ["basic", "luxury", "bold"].includes(content.style)
      ? content.style
      : industry === "dentist"
        ? "basic"
        : "luxury",
  };
}

function parseGeminiError(errorText: string) {
  try {
    const parsed = JSON.parse(errorText) as GeminiErrorResponse;
    const message = parsed.error?.message;
    const status = parsed.error?.status;

    if (!message) {
      return "Gemini generation failed.";
    }

    if (status === "RESOURCE_EXHAUSTED" || message.includes("quota")) {
      return "Gemini quota is exhausted for this API key. Check the Google AI Studio quota/billing settings or try again later.";
    }

    if (message.includes("API key")) {
      return "Gemini API key is invalid. Check GEMINI_API_KEY in .env.local.";
    }

    return message;
  } catch {
    return "Gemini generation failed.";
  }
}

function industryDirection(industry: Industry) {
  if (industry === "car") {
    return [
      "Car direction:",
      "Premium automotive brand.",
      "Use dark metallic visuals, dealership/showroom imagery, featured inventory, category filters, and strong enquiry CTAs.",
      "Car image language should prefer luxury dealership, showroom, premium car exterior, executive sedan, black SUV, sports car, and interior detail.",
      "Avoid mechanic, repair shop, damaged cars, cheap rental visuals, cartoon cars, and low-quality parking lot images.",
    ].join(" ");
  }

  if (industry === "salon") {
    return [
      "Salon direction:",
      "Elegant boutique visuals.",
      "Use warm luxury lighting, beauty studio interiors, styling details, services, gallery proof, and booking-focused CTAs.",
      "Avoid messy salon images, generic white-background stock models, harsh medical visuals, and low-quality selfies.",
    ].join(" ");
  }

  return [
    "Dentist direction:",
    "Calm premium clinic visuals.",
    "Use clean clinic reception, modern treatment room, dentist consultation, smile confidence, trust, treatment clarity, and appointment-focused CTAs.",
    "Avoid scary dental tools, surgery closeups, cartoon teeth, and aggressive medical imagery.",
  ].join(" ");
}

function buildPrompt({
  clientContext,
  assetInstructions,
  industry,
  autoImages,
}: {
  clientContext: string;
  assetInstructions: string;
  industry: Industry;
  autoImages: boolean;
}) {
  return [
    "You are SegMockup's premium website mockup director.",
    "Your job is to turn a messy client brief into structured website mockup content for a website preview builder.",
    "",
    "HIGHEST PRIORITY RULES:",
    "1. Treat the user's instructions as direct commands, not loose inspiration.",
    "2. Do not ignore image instructions.",
    "3. If the user asks for pictures, photos, random images, dealership images, hero images, gallery images, car images, clinic images, or salon images, convert those requests into precise stock-image search queries.",
    "4. Do not invent fake image URLs.",
    "5. Do not claim that you fetched images.",
    "6. Only produce search-ready image direction strings in the image suggestion fields.",
    "7. Keep all copy specific, premium, realistic, and useful for a local-business sales preview.",
    "8. Avoid generic AI phrases like elevate, transform, unlock, seamless, cutting-edge, tailored solutions, revolutionize, or experience the difference.",
    "",
    "OUTPUT RULES:",
    "Return JSON only.",
    "Do not include React, HTML, markdown, comments, explanations, or extra text.",
    "Every required field must be filled.",
    "",
    "COPY FORMAT RULES:",
    "services must be a comma-separated string with 3 to 5 services.",
    "serviceDescriptions must be a semicolon-separated string with one concise benefit-led description per service.",
    "reviews must be one string with 3 short realistic reviews separated by the | symbol.",
    "primaryColor, secondaryColor, accentColor, backgroundColor, and textColor must be six-digit hex colors.",
    "style must be one of: basic, luxury, bold.",
    "phone may be a plausible placeholder if not provided.",
    "workingHours may be a plausible placeholder if not provided.",
    "location may be a plausible placeholder if not provided.",
    "",
    "IMAGE FIELD RULES:",
    "logoImageSuggestion must be one concise search query or visual direction.",
    "heroImageSuggestion must be one precise search query for the hero image.",
    "galleryImageSuggestions must contain exactly 4 search queries separated by the | symbol.",
    "serviceImageSuggestions must contain exactly 3 search queries separated by the | symbol.",
    "teamImageSuggestions must contain exactly 2 search queries separated by the | symbol.",
    "backgroundImageSuggestions must contain exactly 2 search queries separated by the | symbol.",
    "",
    "IMAGE COMMAND EXAMPLES:",
    "User says: fetch random car pictures here get dealership pic for hero",
    "heroImageSuggestion: luxury car dealership showroom exterior dark premium",
    "galleryImageSuggestions: black luxury SUV dealership | executive sedan showroom | sports car dealership night | premium car interior detail",
    "",
    "User says: use calm dentist clinic pictures",
    "heroImageSuggestion: modern dental clinic reception calm daylight premium",
    "galleryImageSuggestions: dentist consultation modern clinic | clean dental treatment room | confident patient smile dental clinic | premium clinic reception detail",
    "",
    "User says: salon, make hero beauty studio interior",
    "heroImageSuggestion: luxury beauty salon interior warm light boutique",
    "galleryImageSuggestions: hair styling salon warm light | skincare room boutique salon | nail design detail luxury salon | elegant salon reception interior",
    "",
    `Selected industry: ${industry}.`,
    `Auto image fetching requested: ${autoImages ? "yes" : "no"}.`,
    "",
    "INDUSTRY DIRECTION:",
    industryDirection(industry),
    "",
    "CLIENT BRIEF:",
    clientContext,
    "",
    "IMAGE / ASSET INSTRUCTIONS:",
    assetInstructions ||
      "No separate image instructions provided. Infer image direction from the client brief.",
  ].join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as GenerateRequest;
  const clientContext = body.clientContext?.trim();
  const assetInstructions = body.assetInstructions?.trim() || "";
  const autoImages = Boolean(body.autoImages);
  const industry = normalizeIndustry(body.industry);

  if (!clientContext) {
    return NextResponse.json(
      { error: "Client context is required." },
      { status: 400 },
    );
  }

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";

  const prompt = buildPrompt({
    clientContext,
    assetInstructions,
    industry,
    autoImages,
  });

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.35,
          responseMimeType: "application/json",
          responseSchema,
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    return NextResponse.json(
      { error: parseGeminiError(errorText), details: errorText },
      { status: response.status },
    );
  }

  const result = (await response.json()) as GeminiResponse;
  const outputText = extractGeminiText(result);

  if (!outputText) {
    return NextResponse.json(
      { error: "Gemini did not return JSON content." },
      { status: 502 },
    );
  }

  try {
    const content = JSON.parse(outputText) as unknown;

    if (!isGeneratedMockupContent(content)) {
      return NextResponse.json(
        { error: "Gemini response was missing required fields." },
        { status: 502 },
      );
    }

    return NextResponse.json(normalizeGeneratedContent(content, industry));
  } catch {
    return NextResponse.json(
      { error: "Gemini response was not valid JSON." },
      { status: 502 },
    );
  }
}