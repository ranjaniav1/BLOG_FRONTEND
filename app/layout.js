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
    default: "Still Writing | Philosophy, Self-Reflection & Life Lessons",
    template: "%s | Still Writing",
  },
  description:
    "Explore thoughtful essays on philosophy, self-reflection, psychology, mindfulness, relationships, and personal growth.",
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