"use client";

import { useEffect } from "react";
import Head from "next/head";

import LazyComponent from "./components/shared/LazyComponent";
import { useThemeContext } from "./context/ThemeContext";
import TrendingArticles from "./components/sections/TrendingArticles";
import LatestArticles from "./components/sections/LatestArticles";
import DevTech from "./components/sections/DevTech";
import BackendSection from "./components/sections/BackendSection";
import FeaturedArticles from "./components/sections/FeaturedArtices";
import HeroSection from "./components/sections/HeroSection";
import SectionHeading from "./components/SectionHeading";


export default function Home() {
  const { themeData } = useThemeContext();

  useEffect(() => {
    document.title = "Varsani DevBlog | Learn Full Stack Development";
  }, []);

  return (
    <main className="flex flex-col justify-between" style={{ background: themeData?.background }}>
      <Head>
        <title>Varsani DevBlog | Full Stack Tutorials</title>
        <meta
          name="description"
          content="Explore full stack development tutorials, Next.js guides, backend systems, and real-world coding projects."
        />
      </Head>


      <div className="hidden md:block">
        <HeroSection />
        <SectionHeading
          eyebrow="LATEST"
          title="Recently written"
          to="/articles"
          linkLabel="All articles"
        />
      </div>
<TrendingArticles/>
      <LazyComponent component={TrendingArticles} />
      <SectionHeading
        title={"Latest Articles"}
        subtitle="Fresh tutorials and development insights"
        buttonText="View Latest Articles"
        to="/categories/latest"
      />
      <LazyComponent component={LatestArticles} />
      <SectionHeading
        title={"Development & Tech"}
        subtitle="Explore modern frameworks, tools, and technologies"
        buttonText="Explore Technologies"
        to="/categories/dev"
      />
      <LazyComponent component={DevTech} />
      <SectionHeading
        title={"AI & ML"}
        subtitle="Learn Artificial Intelligent and Machine Learning"
        buttonText="Explore Backend"
        to="/categories/artificial-intelligence"
      />
      <LazyComponent component={BackendSection} />

      <SectionHeading
        title={"Featured Guides"}
        subtitle="Handpicked in-depth tutorials for serious developers"
        buttonText="View Featured Guides"
        to="/categories/featured"
      />
      <LazyComponent component={FeaturedArticles} />
    </main>
  );
}
