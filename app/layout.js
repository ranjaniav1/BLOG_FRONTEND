"use client";

import { Cormorant_Garamond, Fraunces, Karla } from "next/font/google";
import ClientLayout from "./layout/ClientLayout";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";
import { FavoritesProvider } from "./context/FavoritesContext";
import { HomeProvider } from "./utils/useHome";
import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/react"
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
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6580779703282784"
          crossOrigin="anonymous"></script>



        <meta
          name="description"
          content="Varsani DevBlog – Learn full stack development with real-world tutorials, Next.js guides, backend systems, and developer insights."
        />

        <title>Varsani DevBlog | Full Stack Tutorials & Developer Insights</title>      </head>
<body
  className={`${karla.variable} ${cormorant.variable} ${fraunces.variable} flex flex-col`}
>        <Toaster position="top-right" toastOptions={{ duration: 4000, style: { zIndex: 9999 } }} />
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
        {/* vercel analytics */}
        <Analytics />
      </body>
    </html>
  );
}
