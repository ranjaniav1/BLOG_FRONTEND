"use client";

import { useEffect } from "react";
import Weather from "../components/layout/Weather";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { useThemeContext } from "../context/ThemeContext";

export default function ClientLayout({ children }) {
  const { themeData } = useThemeContext();

  useEffect(() => { }, [themeData])

  return (
    <div style={{ background: themeData?.background?.body }} className=" flex flex-col">
      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Weather />

        <Navigation />
        <main className="pt-12 pb-20 sm:pt-24">
          {children}
        </main>
      </section>
      <Footer />
    </div>
  );
}
