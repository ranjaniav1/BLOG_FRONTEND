"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

import HeroSection from "./components/sections/HeroSection";
import FeaturedArticles from "./components/sections/FeaturedArtices";
import TrendingArticles from "./components/sections/TrendingArticles";
import SectionHeading from "./components/SectionHeading";
import { getHome } from "./service/home";
import QuoteSection from "./components/QuoteSection";
import CategoriesSection from "./components/CategoriesSection";


export default function Home() {
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const data = await getHome();
        console.log(data)
        setHomeData(data);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Ranjani Varsani | Still Learning</title>

        <meta
          name="description"
          content="Essays about life, self-growth, happiness, books, relationships, and everything I'm still learning."
        />
      </Head>

      <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24">

        <HeroSection hero={homeData?.hero} />

        <FeaturedArticles
          featured={homeData?.featured}
        />


        
      
        <TrendingArticles
          articles={homeData?.articles}
        />
        <QuoteSection />
        <CategoriesSection category={homeData?.categories} />

      </section>
    </>
  );
}