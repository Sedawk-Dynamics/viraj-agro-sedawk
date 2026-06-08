import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  metadataBase: new URL("https://virajagronaturals.com"),
  title: "Viraj Agro Naturals | Premium Agricultural Export Company",
  description:
    "India-based export trading company supplying premium agricultural products including Moringa Powder and Chicory Roots to UK, USA, Australia, and Europe. APEDA, FSSAI, and IEC compliant.",
  keywords: [
    "agricultural export",
    "moringa powder",
    "chicory roots",
    "bulk export",
    "India export",
    "APEDA certified",
    "organic products",
  ],
  authors: [{ name: "Viraj Agro Naturals" }],
  icons: { icon: "/images/logos.png" },
  openGraph: {
    title: "Viraj Agro Naturals | Premium Agricultural Export Company",
    description:
      "Premium agricultural products exported globally with verified farm sourcing and reliable supply chains.",
    url: "https://virajagronaturals.com",
    siteName: "Viraj Agro Naturals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
