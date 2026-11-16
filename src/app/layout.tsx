import type { Metadata, Viewport } from "next";
import { Inter, Caudex } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site, solutions } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const caudex = Caudex({ variable: "--font-caudex", weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: site.colors.paper,
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: `${site.url}/logo.svg`,
      email: site.email,
      telephone: site.phone,
      description: site.description,
      address: { "@type": "PostalAddress", addressCountry: site.country },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        areaServed: site.country,
        availableLanguage: ["English", "Amharic"],
      },
      slogan: "Customer first. Manual to digital.",
      knowsAbout: ["Digital transformation", "Custom business software", ...solutions.map((m) => m.name)],
      makesOffer: solutions.map((m) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: m.name, description: m.body, areaServed: site.country },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${caudex.variable}`}>
      <body className="font-sans leading-relaxed">
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
