import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Melaku | Ethiopian Specialty Coffee · Ottawa",
  description:
    "Hand-roasted Ethiopian specialty coffee at 260 Bank St, Ottawa. 4.8 stars · 4,853 reviews. Cold brew, hot espresso, pastries, and wraps.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${dmSans.variable} antialiased selection:bg-brand-gold selection:text-brand-espresso`}
      >
        {children}
      </body>
    </html>
  );
}
