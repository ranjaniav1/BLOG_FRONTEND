"use client";

import React from "react";
import { Container, Box } from "@mui/material";
import Link from "next/link";
import { TechnologySkeleton } from "../features/Skeleton";
import Card2 from "../cards/Card2";
import NewsSlider from "../features/Slider";
import { useHomeContext } from "@/app/utils/useHome";

const DevTech = () => {
  const { homeData: news, loading } = useHomeContext();


  if (loading || !news.mindset) {
    return <TechnologySkeleton />;
  }

  const articles = news.mindset;

  if (articles.length === 0) {
    return <h2>article not found</h2>;
  }



  return (
    <Container maxWidth="xl">
      <NewsSlider slidesToShow={4}>
        {articles.map((article, index) => (
          <Link key={index} href={`/blog/${article?.slug}`}>
            <Card2
              className="h-[300px]"
              article={article}
              category={article.category.name}
              title={article.title}
              imageUrl={article.image_url}
            />
          </Link>
        ))}
      </NewsSlider>


    </Container >
  );
};

export default DevTech;
