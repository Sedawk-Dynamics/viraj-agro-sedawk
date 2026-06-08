import type { Metadata } from "next";
import ProductPageContent, { type ProductData } from "@/components/ProductPageContent";

export const metadata: Metadata = {
  title: "Chicory Roots | Premium Bulk Export | Viraj Agro Naturals",
  description:
    "Premium quality chicory roots for bulk export. Natural prebiotic and coffee alternative. Lab tested, APEDA certified, with complete traceability from farm to shipment.",
};

const chicory: ProductData = {
  name: "Chicory Roots",
  heroImage: "/images/chicory-hero.jpg",
  heroTagline: "Premium Quality from Indian Farms",
  overviewImage: "/images/chicory-roots.jpg",
  overviewImageAlt: "Premium Indian Chicory Roots",
  overviewTitle: "Premium Indian Chicory Roots",
  overviewParagraphs: [
    "Chicory (Cichorium intybus) has been cultivated for centuries for its versatile root, which offers numerous applications in the food and beverage industry. Our premium chicory roots are sourced from established farming regions in India known for producing the highest quality chicory.",
    "We ensure complete traceability from farm to shipment, with every batch tested for quality, purity, and consistency. Our processing facilities maintain strict hygiene standards to deliver export-quality chicory roots that meet international specifications.",
  ],
  specs: [
    { label: "Botanical Name", value: "Cichorium Intybus" },
    { label: "Part Used", value: "Roots" },
    { label: "Forms Available", value: "Dried, Roasted, Powder" },
    { label: "Inulin Content", value: "15-20%" },
    { label: "Moisture", value: "< 8%" },
    { label: "Shelf Life", value: "24 Months" },
  ],
  benefits: [
    "Natural Prebiotic",
    "Coffee Alternative",
    "Low Glycemic",
    "Fiber-Rich",
    "Natural Sweetener Base",
    "Antioxidant Properties",
  ],
  packOptions: [
    { size: "25 KG", desc: "Food Grade HDPE Bags" },
    { size: "50 KG", desc: "Multi-layer Jute Bags" },
    { size: "Bulk", desc: "Container loads available" },
  ],
  ctaTitle: "Interested in Bulk Chicory Roots?",
};

export default function ChicoryRootsPage() {
  return <ProductPageContent product={chicory} />;
}
