"use client";

import React from "react";
import ArticleCard from "../shared/ArticleCard";
import Text from "../shared/Text";
import { FeaturedSkeleton } from "../features/Skeleton";


const FeaturedArticles = ({ featured, loading }) => {
  if (loading) {
    return <FeaturedSkeleton />;
  }



  return (
    <section aria-labelledby="featured" className="pt-16 pb-20  sm:pt-24" >
      <Text type="heroLabel">
        Featured series
      </Text>
      <Text
        type="sectionTitle"
        mt={2}
      >
        Learn from the ground up
      </Text>

      <div className="mt-10">
        {
          featured.map((article) => (

            <ArticleCard article={article} key={article._id} size="lg" />
          ))
        }
      </div>
    </section>
  );
};

export default FeaturedArticles;
