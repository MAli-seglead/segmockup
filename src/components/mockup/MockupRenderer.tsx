import DentistAbout from "@/components/mockup/dentist/DentistAbout";
import DentistContact from "@/components/mockup/dentist/DentistContact";
import DentistHero from "@/components/mockup/dentist/DentistHero";
import DentistReviews from "@/components/mockup/dentist/DentistReviews";
import DentistServices from "@/components/mockup/dentist/DentistServices";
import SalonAbout from "@/components/mockup/salon/SalonAbout";
import SalonContact from "@/components/mockup/salon/SalonContact";
import SalonGallery from "@/components/mockup/salon/SalonGallery";
import SalonHero from "@/components/mockup/salon/SalonHero";
import SalonServices from "@/components/mockup/salon/SalonServices";
import type { MockupData } from "@/types/mockup";

export default function MockupRenderer({ data }: { data: MockupData }) {
  if (data.industry === "salon") {
    return (
      <main className="min-h-screen overflow-hidden bg-[#17130f] text-[#f7efe5]">
        <SalonHero data={data} />
        <SalonServices data={data} />
        <SalonAbout data={data} />
        <SalonGallery data={data} />
        <SalonContact data={data} />
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <DentistHero data={data} />
      <DentistServices data={data} />
      <DentistAbout data={data} />
      <DentistReviews data={data} />
      <DentistContact data={data} />
    </main>
  );
}
