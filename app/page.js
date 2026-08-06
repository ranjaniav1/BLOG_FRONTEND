"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

import HeroSection from "./components/sections/HeroSection";
import FeaturedArticles from "./components/sections/FeaturedArtices";
import { getHome } from "./service/home";
import QuoteSection from "./components/sections/QuoteSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import ArticleSection from "./components/sections/ArticleSection";


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

 

  return (
    <>
      <Head>
        <title>Ranjani Varsani | Still Learning</title>

        <meta
          name="description"
          content="Essays about life, self-growth, happiness, books, relationships, and everything I'm still learning."
        />
      </Head>

      <>
        <HeroSection hero={homeData?.hero} loading={loading}/>

        <FeaturedArticles
          featured={homeData?.featured} loading={loading}
        />

        <ArticleSection
          articles={homeData?.articles} loading={loading}
        />
        <QuoteSection />
        <CategoriesSection category={homeData?.categories} />
      </>

    </>
  );
}