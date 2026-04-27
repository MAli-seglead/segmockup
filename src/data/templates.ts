import type { Industry } from "@/types/mockup";

export const industries: { label: string; value: Industry }[] = [
  { label: "Dentist", value: "dentist" },
  { label: "Beauty Salon", value: "salon" },
];

export const defaultServices = {
  dentist: ["Teeth Whitening", "Dental Implants", "Smile Design"],
  salon: ["Hair Styling", "Skin Care", "Nail Design"],
};