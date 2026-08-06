"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation";

import Breadcumps from "@/app/components/shared/Breadcrumbs";
import ArticleCard from "@/app/components/shared/ArticleCard";
import Text from "@/app/components/shared/Text";
import { TravelSkeleton } from "@/app/components/features/Skeleton";

import { useThemeContext } from "@/app/context/ThemeContext";
import { useArticleCollection } from "@/app/utils/useArticleCollection";

const CategoryPage = () => {
  const { title } = useParams();
  const { themeData } = useThemeContext();

  const { article, loading } = useArticleCollection(title);

  const categoryName = title
    ?.replaceAll("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const pageTitle = `${categoryName} • Still Writing`;

  const pageDescription = `Read thoughtful articles from the ${categoryName} category.`;

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={pageDescription}
        />
      </Head>

      <Breadcumps heading={title} />

      <section
        style={{
          background: themeData?.background?.body,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-14">
          {/* Hero */}

          <div className="max-w-3xl">
            <Text type="heroLabel">
              Category
            </Text>

            <Text
              type="sectionTitle"
              mt={2}
            >
              {categoryName}
            </Text>

            {!loading && (
              <Text
                type="bodyLarge"
              >
                {article.length} article
                {article.length !== 1 && "s"} published in this category.
              </Text>
            )}
          </div>

          {/* Loading */}

          {loading ? (
            <div className="mt-12">
              <TravelSkeleton />
            </div>
          ) : article.length === 0 ? (
            <div className="py-24 text-center">
              <Text type="cardTitle">
                No articles found
              </Text>

              <Text
                type="bodyLarge"
                mt={2}
              >
                There aren't any articles in this category yet.
              </Text>
            </div>
          ) : (
            <div className="mt-14 grid gap-12 md:grid-cols-2">
              {article.map((item) => (
                <Link
                  key={item._id}
                  href={`/blog/${item.slug}`}
                >
                  <ArticleCard
                    article={item}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;