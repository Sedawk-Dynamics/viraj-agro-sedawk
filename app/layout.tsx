import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import IntroAnimation from "@/components/IntroAnimation";
import ChatWidget from "@/components/ChatWidget";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://www.virajagronaturals.com";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Viraj Agro Naturals | Premium Indian Moringa Exporter",
    template: "%s | Viraj Agro Naturals",
  },
  description:
    "Viraj Agro Naturals is a specialized exporter of premium moringa products from India — sustainably sourced, carefully processed and export-ready for global markets. APEDA, FSSAI and IEC certified.",
  keywords: [
    "moringa exporter",
    "moringa leaf powder",
    "moringa dried leaves",
    "moringa tea cut",
    "moringa capsules",
    "bulk moringa supply",
    "India moringa export",
    "moringa oleifera exporter",
    "APEDA certified moringa",
    "private label moringa",
  ],
  authors: [{ name: "Viraj Agro Naturals" }],
  creator: "Viraj Agro Naturals",
  publisher: "Viraj Agro Naturals",
  applicationName: "Viraj Agro Naturals",
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/images/logos.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Viraj Agro Naturals | Premium Indian Moringa Exporter",
    description:
      "Premium moringa products exported globally — sustainably sourced, carefully processed, export-ready. APEDA, FSSAI and IEC certified.",
    url: SITE_URL,
    siteName: "Viraj Agro Naturals",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/moringa-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Viraj Agro Naturals — premium Indian moringa products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viraj Agro Naturals | Premium Indian Moringa Exporter",
    description:
      "Premium moringa products exported globally — sustainably sourced, carefully processed, export-ready.",
    images: ["/images/moringa-hero.jpg"],
  },
  category: "Agriculture & Export",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Viraj Agro Naturals",
    legalName: "Viraj Agro Naturals Private Limited",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/moringa-hero.jpg`,
    description:
      "Specialized exporter of premium moringa products from India — sustainably sourced, carefully processed and export-ready for global markets.",
    email: "export@virajagronaturals.in",
    telephone: "+91-8737958006",
    taxID: "9AAMCV0085D1Z8",
    foundingDate: "2025",
    knowsAbout: ["Moringa Export", "Moringa Oleifera Products", "Agricultural Commodity Export"],
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      streetAddress: "EWS 429 A Double Storey, Barra 2",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208027",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8737958006",
      contactType: "sales",
      email: "export@virajagronaturals.in",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.instagram.com/virajagronaturals/",
      "https://www.facebook.com/virajnaturals/",
      "https://www.linkedin.com/company/viraj-agro-naturals-private-limited",
      "https://x.com/virajnaturals",
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Viraj Agro Naturals",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };

  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <Navbar />
        <main className="bg-white text-[#27313B]">{children}</main>
        <SiteFooter />
        <IntroAnimation />
        <ChatWidget />
      </body>
    </html>
  );
}
