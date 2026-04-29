import type { Industry } from "@/types/mockup";

type MockupImageSet = {
  heroImage: string;
  galleryImages: string[];
  serviceImages: string[];
  teamImages: string[];
  backgroundImages: string[];
};

const img = (id: string, width = 1400) =>
  "https://images.unsplash.com/" +
  id +
  "?auto=format&fit=crop&w=" +
  width +
  "&q=82";

export const defaultImageSets: Record<Industry, MockupImageSet> = {
  dentist: {
    heroImage: img("photo-1629909613654-28e377c37b09", 1600),
    serviceImages: [
      img("photo-1609840114035-3c981b782dfe", 1100),
      img("photo-1588776814546-1ffcf47267a5", 1100),
      img("photo-1606811971618-4486d14f3f99", 1100),
    ],
    galleryImages: [
      img("photo-1629909615184-74f495363b67", 1200),
      img("photo-1588776814546-daab30f310ce", 1200),
      img("photo-1606811841689-23dfddce3e95", 1200),
      img("photo-1609840114035-3c981b782dfe", 1200),
      img("photo-1606811971618-4486d14f3f99", 1200),
    ],
    teamImages: [
      img("photo-1559839734-2b71ea197ec2", 900),
      img("photo-1594824476967-48c8b964273f", 900),
      img("photo-1582750433449-648ed127bb54", 900),
    ],
    backgroundImages: [img("photo-1629909613654-28e377c37b09", 1800)],
  },
  salon: {
    heroImage: img("photo-1560066984-138dadb4c035", 1600),
    serviceImages: [
      img("photo-1521590832167-7bcbfaa6381f", 1100),
      img("photo-1522337660859-02fbefca4702", 1100),
      img("photo-1605497788044-5a32c7078486", 1100),
    ],
    galleryImages: [
      img("photo-1487412947147-5cebf100ffc2", 1200),
      img("photo-1522337660859-02fbefca4702", 1200),
      img("photo-1560066984-138dadb4c035", 1200),
      img("photo-1521590832167-7bcbfaa6381f", 1200),
      img("photo-1516975080664-ed2fc6a32937", 1200),
    ],
    teamImages: [
      img("photo-1487412720507-e7ab37603c6f", 900),
      img("photo-1517841905240-472988babdf9", 900),
      img("photo-1508214751196-bcfd4ca60f91", 900),
    ],
    backgroundImages: [img("photo-1560066984-138dadb4c035", 1800)],
  },
  car: {
    heroImage: img("photo-1503376780353-7e6692767b70", 1800),
    serviceImages: [
      img("photo-1492144534655-ae79c964c9d7", 1200),
      img("photo-1542362567-b07e54358753", 1200),
      img("photo-1511919884226-fd3cad34687c", 1200),
    ],
    galleryImages: [
      img("photo-1503376780353-7e6692767b70", 1400),
      img("photo-1541899481282-d53bffe3c35d", 1200),
      img("photo-1553440569-bcc63803a83d", 1200),
      img("photo-1492144534655-ae79c964c9d7", 1200),
      img("photo-1542362567-b07e54358753", 1200),
    ],
    teamImages: [
      img("photo-1560250097-0b93528c311a", 900),
      img("photo-1507003211169-0a1dd7228f2d", 900),
      img("photo-1500648767791-00dcc994a43e", 900),
    ],
    backgroundImages: [img("photo-1503376780353-7e6692767b70", 1800)],
  },
};
