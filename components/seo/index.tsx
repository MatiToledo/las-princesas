import Head from "next/head";

export const SITE_URL = "https://www.xn--cabaaslasprincesas-q0b.com";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  jsonLd?: object | object[];
};

export default function Seo({
  title,
  description,
  path,
  ogImage = `${SITE_URL}/home.webp`,
  jsonLd,
}: SeoProps) {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Cabañas Las Princesas" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []).map(
        (schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      )}
    </Head>
  );
}
