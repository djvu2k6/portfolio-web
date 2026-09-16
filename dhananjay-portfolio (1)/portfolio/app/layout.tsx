import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhananjay Mohan — Frontend & Full Stack",
  description:
    "I like building things that people actually end up using. Third-year CS student and co-founder of Nore, a small dev agency in Thiruvananthapuram.",
  openGraph: {
    title: "Dhananjay Mohan — Frontend & Full Stack",
    description:
      "I like building things that people actually end up using.",
    url: "https://dhananjaymohan.dev",
    siteName: "Dhananjay Mohan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhananjay Mohan — Frontend & Full Stack",
    description: "I like building things that people actually end up using.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="font-sans">
        <div className="paper-grain" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
