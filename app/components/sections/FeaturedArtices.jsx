"use client";

import React from "react";
import Link from "next/link";
import Text from "../shared/Text";
import { FeaturedSkeleton } from "../features/Skeleton";
import SectionHeading from "../shared/SectionHeading";
import { Container } from "@mui/material";
import ArticleCard from "../shared/ArticleCard";

const FeaturedArticles = ({ articles = [], loading }) => {
  if (loading) {
    return <FeaturedSkeleton />;
  }

  if (!articles.length) {
    return null;
  }

  return (
    <Container maxWidth="xl" disableGutters className="mt-5">
      <SectionHeading
        eyebrow="Featured articles"
        title="Stories worth reading"
        to="/articles"
        linkLabel="All articles"
      />



      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {articles.map((article) => (
          <ArticleCard article={article} variant="editorial" key={article._id} />
                   
        ))}
      </div>
    </Container>
  );
};

export default FeaturedArticles;