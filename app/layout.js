import { Cormorant_Garamond, Fraunces, Karla } from "next/font/google";
import "./globals.css";
import ClientLayout from "./layout/ClientLayout";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

export const metadata = {
  title: {
    default: "Still Writing | Software, Learning & Life",
    template: "%s | Still Writing",
  },
  description:
    "Still writing is Ranjani Varsani's personal blog about software development, learning, building, self-reflection, and life.",
  keywords: [
    "Ranjani Varsani",
    "software development",
    "web development",
    "programming",
    "learning",
    "technology",
    "self-reflection",
    "life lessons",
  ],
  authors: [{
    name: "Ranjani Varsani", url: "https://ranjanivarsani.com"
  }],
  creator: "Ranjani Varsani",
  metadataBase: new URL("https://blog.ranjanivarsani.com"),

  openGraph: {
    title: "Still Writing | Software, Learning & Life",
    description:
      "Notes on software, learning, building, self-reflection, and life by Ranjani Varsani.",
    url: "https://blog.ranjanivarsani.com",
    siteName: "Still Writing",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Still Writing | Software, Learning & Life",
    description:
      "Notes on software, learning, building, self-reflection, and life by Ranjani Varsani.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6580779703282784"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`${karla.variable} ${cormorant.variable} ${fraunces.variable}`}
      >
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}