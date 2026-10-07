"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import ArticleCard from "../shared/ArticleCard";
import SectionHeading from "../shared/SectionHeading";
import { ArticleSectionSkeleton } from "../features/Skeleton";

const ArticleSection = ({ articles = [], loading }) => {
  if (loading) {
    return <ArticleSectionSkeleton />;
  }

  return (
    <Container maxWidth="xl" disableGutters>
      <SectionHeading
        eyebrow="latest articles"
        title="What i've been learning & writing"
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

export default ArticleSection;