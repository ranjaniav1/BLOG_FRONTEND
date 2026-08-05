"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { PopularSkeleton } from "../features/Skeleton";
import Card1 from "../cards/Card1";
import { useHomeContext } from "@/app/utils/useHome";

const TrendingArticles = ({ category }) => {
  const { homeData: articles, loading } = useHomeContext();

  if (loading) {
    return <PopularSkeleton />;
  }
  console.log(articles)


  return (
    <Container maxWidth="xl">
      <div className="grid grid-cols-12 gap-2">
        {/* Left */}
        <div className="col-span-12 sm:col-span-3 flex flex-col gap-2">
          {articles.slice(0, 2).map((article) => (
            <Link key={article._id} href={`/blog/${article.slug}`}>
              <Card1
                article={article}
                category={article.category?.name}
                title={article.title}
                imageUrl={article.image_url}
                className="h-[300px] md:h-[247px]"
              />
            </Link>
          ))}
        </div>

        {/* Center */}
        <div className="col-span-12 sm:col-span-6">
          {articles[2] && (
            <Link href={`/blog/${articles[2].slug}`}>
              <Card1
                article={articles[2]}
                category={articles[2].category?.name}
                title={articles[2].title}
                imageUrl={articles[2].image_url}
                className="h-[300px] md:h-[500px]"
              />
            </Link>
          )}
        </div>

        {/* Right */}
        <div className="col-span-12 sm:col-span-3 flex flex-col gap-2">
          {articles.slice(3, 5).map((article) => (
            <Link key={article._id} href={`/blog/${article.slug}`}>
              <Card1
                article={article}
                category={article.category?.name}
                title={article.title}
                imageUrl={article.image_url}
                className="h-[300px] md:h-[247px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TrendingArticles;