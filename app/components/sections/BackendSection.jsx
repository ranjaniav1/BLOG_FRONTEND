"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { TravelSkeleton } from "../features/Skeleton";
import Card1 from "../cards/Card1";
import { useHomeContext } from "@/app/utils/useHome";

const BackendSection = () => {
  const { homeData: news, loading } = useHomeContext();


  if (loading || !news.self-growth) {
    return <TravelSkeleton />;
  }

  const articles = news.self-growth;

  return (
    <Container maxWidth="xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {articles.slice(0, 4).map((article) => (
          <Link
            key={article?._id}
            href={`/blog/${article.slug}`}
          >
            <Card1
              article={article}
              category={article.category.name}
              title={article.title}
              imageUrl={article.image_url}
              className="h-[300px]"
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default BackendSection;
