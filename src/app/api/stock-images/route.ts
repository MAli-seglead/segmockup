import { NextResponse } from "next/server";

type StockImageRequest = {
  hero?: string;
  gallery?: string;
  services?: string;
  team?: string;
  background?: string;
};

type PexelsPhoto = {
  id?: number;
  alt?: string;
  src?: {
    original?: string;
    large2x?: string;
    large?: string;
    landscape?: string;
    medium?: string;
  };
};

type PexelsResponse = {
  photos?: PexelsPhoto[];
};

function splitQueries(value?: string) {
  return value
    ? value
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}

function randomPage() {
  return Math.floor(Math.random() * 8) + 1;
}

function pickRandom<T>(items: T[]) {
  if (items.length === 0) {
    return undefined;
  }

  return items[Math.floor(Math.random() * items.length)];
}

function cleanQuery(query: string) {
  return query
    .replace(/\s+/g, " ")
    .replace(/fake url/gi, "")
    .replace(/stock photo/gi, "")
    .trim();
}

function imageFromPhoto(photo: PexelsPhoto | undefined) {
  if (!photo?.src) {
    return "";
  }

  return (
    photo.src.large2x ||
    photo.src.large ||
    photo.src.landscape ||
    photo.src.original ||
    photo.src.medium ||
    ""
  );
}

async function searchImage(query: string) {
  const apiKey = process.env.PEXELS_API_KEY;
  const cleanedQuery = cleanQuery(query);

  if (!apiKey || !cleanedQuery) {
    return "";
  }

  const url = new URL("https://api.pexels.com/v1/search");
  url.searchParams.set("query", cleanedQuery);
  url.searchParams.set("orientation", "landscape");
  url.searchParams.set("per_page", "8");
  url.searchParams.set("page", String(randomPage()));

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return "";
    }

    const data = (await response.json()) as PexelsResponse;
    const photo = pickRandom(data.photos || []);

    return imageFromPhoto(photo);
  } catch {
    return "";
  }
}

async function searchMultiple(queries: string[], limit: number) {
  const images = await Promise.all(
    queries.slice(0, limit).map((query) => searchImage(query)),
  );

  return Array.from(new Set(images.filter(Boolean)));
}

export async function POST(request: Request) {
  const body = (await request.json()) as StockImageRequest;

  const heroQuery = body.hero || "";
  const galleryQueries = splitQueries(body.gallery);
  const serviceQueries = splitQueries(body.services);
  const teamQueries = splitQueries(body.team);
  const backgroundQueries = splitQueries(body.background);

  const [heroImage, galleryImages, serviceImages, teamImages, backgroundImages] =
    await Promise.all([
      searchImage(heroQuery),
      searchMultiple(galleryQueries, 4),
      searchMultiple(serviceQueries, 3),
      searchMultiple(teamQueries, 2),
      searchMultiple(backgroundQueries, 2),
    ]);

  return NextResponse.json({
    heroImage,
    galleryImages: galleryImages.join(","),
    serviceImages: serviceImages.join(","),
    teamImages: teamImages.join(","),
    backgroundImages: backgroundImages.join(","),
  });
}