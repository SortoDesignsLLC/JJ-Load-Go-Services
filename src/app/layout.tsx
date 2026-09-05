import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles.css";

const title = "JJ Load & Go Services | Junk Removal & Hauling in Northern Virginia";
const description = "Fast, friendly junk removal, property clean outs, debris hauling and small demolition. Free upfront quotes, same-day pickup. Call 571-428-6909.";
// Set SITE_URL when a public domain is ready. Never guess a production origin.
const configuredOrigin = process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);
const metadataBase = configuredOrigin ? new URL(configuredOrigin) : undefined;
const shareImage = metadataBase ? {
  url: new URL("/social/jj-load-and-go-preview.jpg", metadataBase).toString(),
  width: 1200,
  height: 630,
  alt: "JJ Load & Go Services — red pickup and hauling trailer. We haul it all.",
  type: "image/jpeg",
} : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase, alternates: { canonical: "/" } } : {}),
  title,
  description,
  authors: [{ name: "JJ Load & Go Services" }],
  openGraph: {
    title: "JJ Load & Go Services | We Haul It All",
    description,
    siteName: "JJ Load & Go Services",
    type: "website",
    locale: "en_US",
    ...(metadataBase ? { url: metadataBase.toString() } : {}),
    ...(shareImage ? { images: [shareImage] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "JJ Load & Go Services | We Haul It All",
    description,
    ...(shareImage ? { images: [shareImage] } : {}),
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  </head><body>{children}</body></html>;
}
