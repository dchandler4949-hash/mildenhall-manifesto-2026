import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const BASE_URL = "https://davidchandler.uk";
const DEFAULT_IMAGE = `${BASE_URL}/opengraph.jpg`;
const SITE_NAME = "David Chandler — Mildenhall Division";

export function PageSEO({ title, description, path = "/", image = DEFAULT_IMAGE }: PageSEOProps) {
  const fullTitle = title.includes("David Chandler")
    ? title
    : `${title} | David Chandler — Mildenhall Division`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
