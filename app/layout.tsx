import type { Metadata } from "next";
import { Playfair_Display, Raleway, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Les Guidances de Jo | Johanna Richard",
  description:
    "Johanna Richard, guide de transition pour les femmes en métamorphose. Une guidance canalisée, sans jugement, quoi que tu traverses.",
  openGraph: {
    title: "Les Guidances de Jo",
    description:
      "Johanna Richard — Guide de transition pour les femmes en métamorphose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${raleway.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
