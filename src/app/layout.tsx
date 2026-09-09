import type { Metadata } from "next";
import type { ReactNode } from "react";

import { siteMetadata } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: `${siteMetadata.name} — ${siteMetadata.role}`,
    template: `%s — ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteMetadata.locale,
    url: siteMetadata.url,
    title: `${siteMetadata.name} — ${siteMetadata.role}`,
    description: siteMetadata.description,
  },
  twitter: {
    card: "summary",
    title: `${siteMetadata.name} — ${siteMetadata.role}`,
    description: siteMetadata.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
