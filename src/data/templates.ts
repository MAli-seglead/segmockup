import type { Industry } from "@/types/mockup";

export const industries: { label: string; value: Industry }[] = [
  { label: "Dentist", value: "dentist" },
  { label: "Beauty Salon", value: "salon" },
  { label: "Car Rental / Sales", value: "car" },
];

export const defaultServices: Record<Industry, string[]> = {
  dentist: ["Teeth Whitening", "Dental Implants", "Smile Design"],
  salon: ["Hair Styling", "Skin Care", "Nail Design"],
  car: ["Luxury SUV", "Executive Sedan", "Sports Coupe"],
};
