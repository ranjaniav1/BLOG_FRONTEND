import { Cormorant_Garamond, Fraunces, Karla } from "next/font/google";
import ClientLayout from "./layout/ClientLayout";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";
import { FavoritesProvider } from "./context/FavoritesContext";
import { HomeProvider } from "./utils/useHome";
import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/react";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://stillwriting.in"), // Change if using another domain

  title: {
    default: "Still Writing | Philosophy, Self-Reflection & Life Lessons",
    template: "%s | Still Writing",
  },

  description:
    "Explore thoughtful essays on philosophy, self-reflection, psychology, mindfulness, relationships, and personal growth. Still Writing is a place to slow down, think deeply, and discover meaningful perspectives on life.",

  keywords: [
    "Still Writing",
    "philosophy",
    "philosophy blog",
    "self reflection",
    "life lessons",
    "mindfulness",
    "personal growth",
    "psychology",
    "meaning of life",
    "self improvement",
    "deep thinking",
    "mental wellness",
    "relationships",
    "Stoicism",
    "journaling",
    "essays",
  ],

  authors: [
    {
      name: "Ranjani Varsani",
      url: "https://stillwriting.in",
    },
  ],

  creator: "Ranjani Varsani",
  publisher: "Still Writing",

  category: "Philosophy",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Still Writing | Philosophy, Self-Reflection & Life Lessons",
    description:
      "Thoughtful essays exploring philosophy, psychology, mindfulness, relationships, and personal growth.",

    url: "https://blog.ranjanivarsani.com",
    siteName: "Still Writing",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg", // Add this image to your /public folder
        width: 1200,
        height: 630,
        alt: "Still Writing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Still Writing | Philosophy, Self-Reflection & Life Lessons",
    description:
      "Essays on philosophy, mindfulness, psychology, and meaningful living.",

    images: ["/og-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6580779703282784"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`${karla.variable} ${cormorant.variable} ${fraunces.variable} flex flex-col`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              zIndex: 9999,
            },
          }}
        />

        <AuthProvider>
          <ThemeProvider>
            <CssBaseline />

            <HomeProvider>
              <FavoritesProvider>
                <ClientLayout>{children}</ClientLayout>
              </FavoritesProvider>
            </HomeProvider>
          </ThemeProvider>
        </AuthProvider>

        <Analytics />
      </body>
    </html>
  );
}