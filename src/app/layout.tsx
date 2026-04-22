import type { Metadata, Viewport } from "next";
import "aos/dist/aos.css";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://vilay1702.github.io/portfolio/"),
  title: "Vilay Bende - Full Stack Developer Portfolio",
  description:
    "Vilay Bende - Full Stack Developer specializing in React, Node.js, Shopify development, and AI integrations. View my portfolio, projects, and experience.",
  authors: [{ name: "Vilay Bende" }],
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Shopify",
    "Portfolio",
    "Web Development",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://vilay1702.github.io/portfolio/",
    title: "Vilay Bende - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React, Node.js, and Shopify development. View my projects and experience.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilay Bende - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React, Node.js, and Shopify development. View my projects and experience.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
