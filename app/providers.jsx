"use client";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { HomeProvider } from "./utils/useHome";
import { CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CssBaseline />

        <HomeProvider>
          <FavoritesProvider>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: { zIndex: 9999 },
              }}
            />

            {children}
          </FavoritesProvider>
        </HomeProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}