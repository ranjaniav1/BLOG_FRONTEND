"use client";

import React from "react";
import Card5 from "@/app/components/cards/Card5";
import Text from "../Text";
import parse from "html-react-parser";


const NewsContent = ({ article }) => {
  return (
    <>
      <Card5
        imageUrl={article.image_url}
        height="520px"
      />

      {article.content && (
        <div
          className="article-content mt-10">

            {parse(article.content)}
          </div>
        
      )}

      {article.tags?.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-3">
          {article.tags.map((tag) => (
            <span
              key={tag._id}
              className="rounded-full border px-4 py-2 text-sm"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default NewsContent;