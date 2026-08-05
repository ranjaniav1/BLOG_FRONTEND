"use client";

import React from "react";
import ArticleCard from "../ArticleCard";
import SectionHeading from "../SectionHeading";
import Text from "../Text";


const FeaturedArticles = ({ featured }) => {




  return (
    <section aria-labelledby="featured" className="pt-16 pb-20  sm:pt-24">
      <Text type="heroLabel">
        Featured story
      </Text>
      <Text
        type="sectionHeading"
        mt={2}
      >
        The one I'd hand you first
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
