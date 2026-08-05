"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import ArticleCard from "../ArticleCard";
import SectionHeading from "../SectionHeading";

const TrendingArticles = ({ articles = [] }) => {


  return (
    <Container maxWidth="xl" disableGutters>
      <SectionHeading
        eyebrow="latest"
        title="Recently written"
        to="/categories"
        linkLabel="All articles"
      /><hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {articles.map((article) => (
          <Link key={article._id} href={`/blog/${article.slug}`}>
            <ArticleCard article={article} variant="editorial" key={article._id} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default TrendingArticles;