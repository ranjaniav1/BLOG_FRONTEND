"use client";

import Link from "next/link";
import parse from "html-react-parser";
import Text from "./Text";
export default function ArticleCard({
  article,
  size = "sm",
}) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <article className="group">
      <Link href={`/blog/${article.slug}`} className="block">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-neutral-100">
          <img
            src={article.image_url}
            alt={parse(article.title)}
            loading="lazy"
            className={`w-full object-cover transition-all duration-700 group-hover:scale-[1.04] ${size === "lg"
              ? "aspect-[16/10]"
              : "aspect-[3/2]"
              }`}
          />
        </div>

        {/* Content */}
        <div className="mt-5">
          {/* Category */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
            <span className="font-medium text-emerald-700">
              {article.category?.name}
            </span>

            {article.is_featured && (

              <Text type="heroLabel">
                Featured
              </Text>
            )}
          </div>

          {/* Title */}
          <Text
            type="heroTitle"
            mt={6}
            maxWidth="50rem"
          >
            {parse(article.title)}
          </Text>


          {/* Excerpt */}
          <Text
            type="bodyLarge"
            mt={2}
            maxWidth="40rem"
          >
            {article.excerpt}
          </Text>

          {/* Footer */}
          <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
            <span>{formatDate(article.published_at)}</span>

            <span>•</span>

            <span>{article.read_time} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}