"use client";

import Link from "next/link";
import SectionHeading from "../SectionHeading";
import ArticleCard from "../ArticleCard";

const RelatedNews = ({ articles = [] }) => {
  if (!articles.length) return null;

  return (
    <section className="mt-24">
      <SectionHeading
        eyebrow="Continue Reading"
        title="You may also enjoy"
      />

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {articles.slice(0, 2).map((article) => (
          <Link
            key={article._id}
            href={`/blog/${article.slug}`}
          >
            <ArticleCard
              article={article}
              variant="editorial"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedNews;