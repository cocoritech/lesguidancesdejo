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
  title: "Les Guidances de Jo | Cartomancienne & Guide de transition",
  description:
    "Johanna, cartomancienne et guide de transition. Accompagne les femmes à reprendre les rênes de leur vie avec clarté et pragmatisme.",
  openGraph: {
    title: "Les Guidances de Jo",
    description:
      "Cartomancienne & Guide de transition - Accompagnement des femmes dans leurs transitions de vie",
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
