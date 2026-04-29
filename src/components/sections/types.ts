import type { Industry, SectionVariant } from "@/types/mockup";

export type ColorTheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export type VariantProps = {
  variant: SectionVariant;
  theme: ColorTheme;
  aiGenerated?: boolean;
  industry?: Industry;
};

export type NavItem = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href?: string;
};

export type ServiceItem = {
  title: string;
  description?: string;
  image?: string;
  meta?: string;
};

export type TestimonialItem = {
  quote: string;
  name?: string;
  role?: string;
};

export type ContactItem = {
  label: string;
  value: string;
};

export type VehicleItem = {
  name: string;
  description?: string;
  image?: string;
  price?: string;
  specs?: string[];
  category?: string;
};
