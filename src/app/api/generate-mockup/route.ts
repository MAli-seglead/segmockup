import { NextResponse } from "next/server";
import type { Industry, MockupStyle } from "@/types/mockup";

type GenerateRequest = {
  clientContext?: string;
  industry?: Industry;
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
  style: MockupStyle;
  logoImageSuggestion?: string;
  heroImageSuggestion?: string;
  galleryImageSuggestions?: string;
  teamImageSuggestions?: string;
  serviceImageSuggestions?: string;
  backgroundImageSuggestions?: string;
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
    mainCta: { type: "string" },
    secondaryCta: { type: "string" },
    specialOffer: { type: "string" },
    phone: { type: "string" },
    workingHours: { type: "string" },
    audience: { type: "string" },
    reviews: { type: "string" },
    primaryColor: { type: "string" },
    secondaryColor: { type: "string" },
    logoImageSuggestion: { type: "string" },
    heroImageSuggestion: { type: "string" },
    galleryImageSuggestions: { type: "string" },
    teamImageSuggestions: { type: "string" },
    serviceImageSuggestions: { type: "string" },
    backgroundImageSuggestions: { type: "string" },
    style: {
      type: "string",
      enum: ["clean", "luxury", "bold"],
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
    "mainCta",
    "secondaryCta",
    "specialOffer",
    "phone",
    "workingHours",
    "audience",
    "reviews",
    "primaryColor",
    "secondaryColor",
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

function isGeneratedMockupContent(value: unknown): value is GeneratedMockupContent {
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
    "mainCta",
    "secondaryCta",
    "specialOffer",
    "phone",
    "workingHours",
    "audience",
    "reviews",
    "primaryColor",
    "secondaryColor",
    "logoImageSuggestion",
    "heroImageSuggestion",
    "galleryImageSuggestions",
    "teamImageSuggestions",
    "serviceImageSuggestions",
    "backgroundImageSuggestions",
  ];

  return (
    requiredStrings.every((key) => typeof content[key] === "string") &&
    ["clean", "luxury", "bold"].includes(content.style as string)
  );
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
  const industry = body.industry === "salon" ? "salon" : "dentist";

  if (!clientContext) {
    return NextResponse.json(
      { error: "Client context is required." },
      { status: 400 },
    );
  }

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
  const prompt = [
    "Generate concise website mockup content for a manual form.",
    "Return JSON only. Do not include React, HTML, markdown, or layout instructions.",
    "Do not use generic AI-sounding phrases like elevate, transform, unlock, seamless, cutting-edge, tailored solutions, or experience the difference.",
    "Use realistic local-business copy. Keep every field concise and specific.",
    "services must be a comma-separated string with 3 to 5 services.",
    "reviews must be one string with 3 short reviews separated by the | symbol.",
    "primaryColor and secondaryColor must be six-digit hex colors.",
    "For image suggestion fields, describe the ideal image direction. Do not invent file names or fake URLs.",
    "phone may be a plausible placeholder if not provided.",
    `Industry: ${industry}.`,
    `Client context: ${clientContext}`,
    industry === "salon"
      ? "Salon direction: luxury, elegant, compact, boutique, visual, booking focused."
      : "Dentist direction: simple, calm, premium, trustworthy, appointment focused.",
  ].join("\n");

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
          temperature: 0.7,
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

    return NextResponse.json(content);
  } catch {
    return NextResponse.json(
      { error: "Gemini response was not valid JSON." },
      { status: 502 },
    );
  }
}
