"use client";

import React from "react";
import Link from "next/link";
import Text from "../shared/Text";
import { FeaturedSkeleton } from "../features/Skeleton";

const FeaturedArticles = ({ series, loading }) => {
  if (loading) {
    return <FeaturedSkeleton />;
  }

  if (!series) {
    return null;
  }

  return (
    <section
      aria-labelledby="featured-series"
      className="pt-16 pb-20 sm:pt-24"
    >
      <Text type="heroLabel">
        Featured series
      </Text>

      <Text type="sectionTitle" mt={2}>
        Learn from the ground up
      </Text>

      <div className="mt-10">
        <Link
          href={`/series/${series.slug}`}
          className="group block"
        >
          <div className="grid overflow-hidden rounded-[2rem] bg-neutral-100 lg:grid-cols-2">

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={series?.thumbnail}
                alt={series?.name || "Featured series"}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <Text type="heroLabel">
                Web Development
              </Text>

              <Text
                type="cardTitle"
                mt={2}
                maxWidth="100%"
              >
                {series?.name}
              </Text>

              <Text
                type="bodyLarge"
                mt={4}
                maxWidth="100%"
              >
                {series?.description}
              </Text>

              <div className="mt-6 flex items-center gap-4 text-sm text-neutral-500">
                <span>
                  {series.totalLessons || 0} Lessons
                </span>

                <span>•</span>

                <span>
                  {series.articlesCount || 0} Articles
                </span>
              </div>

              <div className="mt-8 font-medium">
                Start learning →
              </div>

            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArticles;