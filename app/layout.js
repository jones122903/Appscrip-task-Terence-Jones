import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discover Our Products | Mettā Muse",

  description:
    "Discover the Mettā Muse product collection. Explore clothing, accessories, jewellery and more with filtering and sorting options.",

  keywords: [
    "Mettā Muse",
    "products",
    "fashion",
    "clothing",
    "accessories",
    "jewellery",
    "online shopping",
  ],

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}