import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

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
  metadataBase: new URL("https://virajagronaturals.com"),
  title: "Viraj Agro Naturals | Premium Indian Moringa Exporter",
  description:
    "Viraj Agro Naturals is a specialized exporter of premium moringa products from India — sustainably sourced, carefully processed and export-ready for global markets. APEDA, FSSAI and IEC certified.",
  keywords: [
    "moringa exporter",
    "moringa leaf powder",
    "moringa dried leaves",
    "bulk moringa supply",
    "India moringa export",
    "APEDA certified",
    "private label moringa",
  ],
  authors: [{ name: "Viraj Agro Naturals" }],
  icons: { icon: "/images/logos.png" },
  openGraph: {
    title: "Viraj Agro Naturals | Premium Indian Moringa Exporter",
    description:
      "Premium moringa products exported globally — sustainably sourced, carefully processed, export-ready.",
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
        <Navbar />
        <main className="bg-white text-[#27313B]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
