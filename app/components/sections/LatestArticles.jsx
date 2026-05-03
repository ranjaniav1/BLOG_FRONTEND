"use client";
import React from "react";
import { Container } from "@mui/material"; // Keep Container
import Link from "next/link";
import { RecentSkeleton } from "../features/Skeleton";
import Card2 from "../cards/Card2";
import Card1 from "../cards/Card1";
import { useHomeContext } from "@/app/utils/useHome";

const LatestArticles = () => {
  const { homeData: news, loading } = useHomeContext();

  if (loading || !news.frontend) {
    return <RecentSkeleton />;
  }

  const articles = news.frontend;

  return (
    <Container maxWidth="xl">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
        {/* Left Column */}
        <div className="sm:col-span-9">
          <Link href={`/blog/${articles[0]?.slug}`}>
            <Card2
              article={articles[0]}
              category={articles[0]?.category?.name}
              title={articles[0]?.title}
              imageUrl={articles[0]?.image_url}
              className="h-[300px] md:h-[600px]"
            />
          </Link>
        </div>

        {/* Right Column */}
        <div className="sm:col-span-3 flex flex-col gap-2">
          {articles.slice(1, 4).map((article) => (
            <Link key={article?._id} href={`/blog/${article.slug}`}>
              <Card1
                article={article}
                category={article?.category?.name}
                title={article?.title}
                imageUrl={article?.image_url}
                className="h-[300px]sm:h-[95px] md:h-[195px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default  LatestArticles
