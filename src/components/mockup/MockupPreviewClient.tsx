"use client";

import { useState } from "react";
import MockupRenderer from "@/components/mockup/MockupRenderer";
import type { MockupData } from "@/types/mockup";

type StoredImages = {
  logoImage?: string;
  heroImage?: string;
  galleryImages?: string[];
  serviceImages?: string[];
  teamImages?: string[];
  backgroundImages?: string[];
};

function mergeImageList(
  uploadedImages: string[] | undefined,
  fallbackImages: string[] | undefined,
) {
  const cleanUploads = uploadedImages?.filter(Boolean) || [];

  if (cleanUploads.length === 0) {
    return fallbackImages;
  }

  return [...cleanUploads, ...(fallbackImages || []).slice(cleanUploads.length)];
}

export default function MockupPreviewClient({
  data,
  imageSession,
}: {
  data: MockupData;
  imageSession?: string;
}) {
  const [mockupData] = useState(() => {
    if (typeof window === "undefined" || !imageSession) {
      return data;
    }

    const stored = window.sessionStorage.getItem(
      `mockup-images:${imageSession}`,
    );

    if (!stored) {
      return data;
    }

    try {
      const images = JSON.parse(stored) as StoredImages;
      return {
        ...data,
        logoImage: images.logoImage || data.logoImage,
        heroImage: images.heroImage || data.heroImage,
        galleryImages: mergeImageList(images.galleryImages, data.galleryImages),
        serviceImages: mergeImageList(images.serviceImages, data.serviceImages),
        teamImages: mergeImageList(images.teamImages, data.teamImages),
        backgroundImages: mergeImageList(
          images.backgroundImages,
          data.backgroundImages,
        ),
      };
    } catch {
      return data;
    }
  });

  return <MockupRenderer data={mockupData} />;
}
