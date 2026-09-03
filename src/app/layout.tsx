import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SmartKids AI — KI-gestützter Erziehungsguide | Elternberatung",
    template: "%s | SmartKids AI",
  },
  description:
    "Personalisierte, altersgerechte Aktivitäten für Kinder von 0–18 Jahren. Unterstützen Sie Lernen, Neugier und Entwicklung mit KI-Empfehlungen. Kostenlos und datenschutzkonform.",
  keywords: [
    "Erziehung",
    "Kinder",
    "Aktivitäten",
    "KI",
    "Bildung",
    "Lernen",
    "Kinderentwicklung",
    "Elternberatung",
    "Altersgerecht",
    "0-18 Jahre",
    "SmartKids",
    "parenting",
    "children activities",
    "AI education",
  ],
  authors: [{ name: "SmartKids AI" }],
  creator: "SmartKids AI",
  publisher: "SmartKids AI",
  metadataBase: new URL("https://smartkids-ai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "SmartKids AI",
    title: "SmartKids AI — KI-gestützter Erziehungsguide",
    description:
      "Personalisierte, altersgerechte Aktivitäten für Kinder von 0–18 Jahren. Kostenlose KI-Empfehlungen für Eltern.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartKids AI — KI-gestützter Erziehungsguide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartKids AI — KI-gestützter Erziehungsguide",
    description:
      "Personalisierte, altersgerechte Aktivitäten für Kinder von 0–18 Jahren.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#18181b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
