"use client";

import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import { TechnologySkeleton } from "@/app/components/features/Skeleton";
import Card5 from "../cards/Card5";
import NewsSlider from "../features/Slider";
import { useHomeContext } from "@/app/utils/useHome";

const FeaturedArticles = () => {
  const { homeData: news, loading } = useHomeContext();


  if (loading || !news.mobile) {
    return <TechnologySkeleton />;
  }

  const articles = news.mobile;

  if (articles.length === 0) {
    return <h2>Article not found...</h2>;
  }



  return (
    <Container maxWidth="xl" >
      <NewsSlider slidesToShow={4}>
        {articles.map((article) => (
          <Grid container spacing={2} justifyContent="center" key={article._id}>
            <Grid item xs={12}>
              <Link
                href={`/blog/${article?.slug}`}
              >
                <Card5
                  article={article}
                  category={article.category?.name}
                  title={article.title}
                  imageUrl={article.image_url}
                  className="h-[250px]"
                />
              </Link>
            </Grid>
          </Grid>
        ))}
      </NewsSlider>
    </Container>
  );
};

export default FeaturedArticles;
