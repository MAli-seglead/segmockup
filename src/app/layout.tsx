import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://segmockup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SegMockup | AI Website Mockup Generator by SegLead",
    template: "%s | SegMockup",
  },
  description:
    "Create premium website mockups for salons, dentists, car rentals, dealerships, and local businesses using AI or manual control.",
  keywords: [
    "website mockup generator",
    "AI mockup generator",
    "client website mockup",
    "local business website mockup",
    "car dealership website mockup",
    "salon website mockup",
    "dentist website mockup",
    "SegMockup",
    "SegLead",
  ],
  authors: [{ name: "SegLead" }],
  creator: "SegLead",
  publisher: "SegLead",
  applicationName: "SegMockup",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SegMockup | AI Website Mockup Generator by SegLead",
    description:
      "Generate client-ready website mockups for local businesses in minutes. Built for agencies, freelancers, and sales presentations.",
    url: siteUrl,
    siteName: "SegMockup",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SegMockup | AI Website Mockup Generator",
    description:
      "Create premium client website previews for salons, dentists, car rentals, and local businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020403",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SegMockup",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    description:
      "AI website mockup generator for creating premium client-ready website previews.",
    creator: {
      "@type": "Organization",
      name: "SegLead",
      url: "https://seglead.com",
    },
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#020403] text-[#f7f6ed]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}