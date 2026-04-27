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
        galleryImages:
          images.galleryImages && images.galleryImages.length > 0
            ? images.galleryImages
            : data.galleryImages,
        serviceImages:
          images.serviceImages && images.serviceImages.length > 0
            ? images.serviceImages
            : data.serviceImages,
        teamImages:
          images.teamImages && images.teamImages.length > 0
            ? images.teamImages
            : data.teamImages,
        backgroundImages:
          images.backgroundImages && images.backgroundImages.length > 0
            ? images.backgroundImages
            : data.backgroundImages,
      };
    } catch {
      return data;
    }
  });

  return <MockupRenderer data={mockupData} />;
}
