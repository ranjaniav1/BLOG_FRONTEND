"use client";

import React from "react";
import parse from "html-react-parser";
import { useThemeContext } from "@/app/context/ThemeContext";
import Link from "next/link";

const NewsContent = ({ article }) => {
  const { themeData } = useThemeContext();

  return (
    <>
      <img
        src={article.image_url || "/placeholder.jpg"}
        alt={article.title}
        className="rounded-xl object-cover"
      />

      {article.content && (
        <div
          className="article-content mt-10"
          style={{
            "--article-text": themeData?.text?.secondary,
            "--article-heading": themeData?.text?.heading,
            "--article-link": themeData?.background?.button,
            "--article-border": themeData?.text?.border,
            "--article-muted": themeData?.text?.secondary,
          }}
        >
          {parse(article.content)}
        </div>
      )}

      {article.tags?.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-4">
          {article.tags.map((tag) => (
            <Link
              key={tag._id}
              href={`/tags/${tag.slug}`}
              className="inline-flex items-center rounded-full border px-6 py-3 text-[15px] font-medium transition-all duration-300"
              style={{
                borderColor: themeData?.text?.border,
                color: themeData?.text?.primary,
                background: themeData?.text?.button,
              }}
            >
              # {tag.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NewsContent;