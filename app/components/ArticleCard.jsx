"use client";

import Link from "next/link";
import parse from "html-react-parser";
import Text from "./Text";
import { formatDate } from "../utils/formateDate";
export default function ArticleCard({
  article,
  size = "sm",
  variant = "default"
}) {
  const isEditorial = variant == "editorial";

  return (
    <article className="group">
      <Link href={`/blog/${article.slug}`} className="block">
        {/* Image */}
        <div
          className={`overflow-hidden bg-neutral-100 ${isEditorial ? "rounded-[28px]" : "rounded-3xl"
            }`}
        >
          <img
            src={article.image_url}
            alt={article.title}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]
              ${isEditorial
                ? "aspect-[3/2]"
                : size === "lg"
                  ? "aspect-[16/10]"
                  : "aspect-[3/2]"
              }`}
          />
        </div>

        {/* Content */}
        <div className={isEditorial ? "mt-6" : "mt-5"}>
          {/* Category */}
          <div
            className={`flex items-center gap-2 uppercase text-neutral-500 ${isEditorial
              ? "text-[11px] tracking-[0.24em]"
              : "text-xs tracking-[0.18em]"
              }`}
          >
            <span className="font-medium text-emerald-700">
              {article.category?.name}
            </span>

            {article.is_featured && (
              <Text type="heroLabel">Featured</Text>
            )}
          </div>

          {/* Title */}
          <Text
            type={isEditorial ? "cardTitle" : "sectionTitle"}
            mt={isEditorial ? 1.5 : 2}
            maxWidth="100%"
          >
            {parse(article.title)}
          </Text>

          {/* Excerpt */}
          <Text
            type="bodyLarge"
            mt={2}
            maxWidth="100%"
          >
            {article.excerpt}
          </Text>

          {/* Footer */}
          <div
            className={`flex items-center gap-2 text-neutral-500 ${isEditorial ? "mt-6 text-[14px]" : "mt-5 text-sm"
              }`}
          >
            <span>{formatDate(article.published_at)}</span>
            <span>•</span>
            <span>{article.read_time} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}