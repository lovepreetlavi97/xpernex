import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

const DEFAULT_METADATA = {
  siteName: "Xpernex",
  titleTemplate: "%s | Xpernex - Engineering Tomorrow. Today.",
  defaultTitle: "Xpernex | Engineering Tomorrow. Today.",
  defaultDescription: "Xpernex builds world-class AI-powered software, enterprise solutions, cloud networks, and intelligent digital experiences.",
  siteUrl: "https://xpernex.com",
  defaultOgImage: "/og-image.jpg"
};

export function getSEOMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_METADATA.defaultOgImage,
  noIndex = false
}: SEOProps): Metadata {
  const url = `${DEFAULT_METADATA.siteUrl}${path}`;
  const displayTitle = title 
    ? `${title} | Xpernex` 
    : DEFAULT_METADATA.defaultTitle;

  return {
    title: displayTitle,
    description: description || DEFAULT_METADATA.defaultDescription,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: displayTitle,
      description: description || DEFAULT_METADATA.defaultDescription,
      url,
      siteName: DEFAULT_METADATA.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || DEFAULT_METADATA.siteName,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: description || DEFAULT_METADATA.defaultDescription,
      images: [ogImage],
      creator: "@xpernex",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(DEFAULT_METADATA.siteUrl),
  };
}

// Helper to render organization schema JSON-LD
export function getOrgSchemaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xpernex",
    "url": "https://xpernex.com",
    "logo": "https://xpernex.com/logo.png",
    "sameAs": [
      "https://twitter.com/xpernex",
      "https://linkedin.com/company/xpernex",
      "https://github.com/xpernex"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98764-67697",
      "contactType": "customer service",
      "email": "hello@xpernex.com",
      "availableLanguage": "English"
    }
  };
}
