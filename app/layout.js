"use client";

import { Inter } from "next/font/google";
import ClientLayout from "./layout/ClientLayout";
import { Toaster } from "react-hot-toast";
import "./styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";
import { FavoritesProvider } from "./context/FavoritesContext";
import { HomeProvider } from "./utils/useHome";
import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex flex-col`}>
        <Toaster position="top-right" toastOptions={{ duration: 4000, style: { zIndex: 9999 } }} />
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
