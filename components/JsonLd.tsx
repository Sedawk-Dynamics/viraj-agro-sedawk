// Renders a JSON-LD structured-data <script> for search engines.
// Server component — the JSON is inlined into the HTML at render time.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
