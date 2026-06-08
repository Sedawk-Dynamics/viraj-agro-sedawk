import type { Metadata } from "next";
import ProductPageContent, { type ProductData } from "@/components/ProductPageContent";

export const metadata: Metadata = {
  title: "Moringa Powder | Premium Bulk Export | Viraj Agro Naturals",
  description:
    "Premium quality Moringa Oleifera leaf powder for bulk export. Rich in nutrients and antioxidants. Lab tested, APEDA certified, with complete traceability from farm to shipment.",
};

const moringa: ProductData = {
  name: "Moringa Powder",
  heroImage: "/images/moringa-hero.jpg",
  heroTagline: "Nature's Superfood from India",
  overviewImage: "/images/moringa-powder.jpg",
  overviewImageAlt: "Premium Moringa Oleifera Leaf Powder",
  overviewTitle: "Premium Moringa Oleifera Leaf Powder",
  overviewParagraphs: [
    "Moringa Oleifera, known as the 'Miracle Tree,' is one of the most nutrient-dense plants on earth. Our premium moringa powder is made from carefully selected, organically grown moringa leaves that are processed to preserve their exceptional nutritional profile.",
    "We source our moringa from verified farms across India, ensuring sustainable cultivation practices and complete traceability. Each batch undergoes rigorous testing at NABL accredited laboratories to meet international quality and safety standards.",
  ],
  specs: [
    { label: "Botanical Name", value: "Moringa Oleifera" },
    { label: "Part Used", value: "Leaves" },
    { label: "Processing", value: "Shade Dried & Ground" },
    { label: "Mesh Size", value: "80-100 Mesh" },
    { label: "Color", value: "Dark Green" },
    { label: "Shelf Life", value: "24 Months" },
  ],
  benefits: [
    "Rich in Nutrients",
    "Powerful Antioxidants",
    "Anti-inflammatory Properties",
    "Blood Sugar Support",
    "Heart Health",
    "Energy Boost",
  ],
  packOptions: [
    { size: "25 KG", desc: "Food Grade HDPE Bags" },
    { size: "50 KG", desc: "Multi-layer Paper Bags" },
    { size: "Custom", desc: "As per buyer requirements" },
  ],
  ctaTitle: "Interested in Bulk Moringa Powder?",
};

export default function MoringaPowderPage() {
  return <ProductPageContent product={moringa} />;
}
