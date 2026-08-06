"use client";

import React from "react";
import Link from "next/link";
import Text from "./Text";
import FavoriteButton from "../features/FavouriteButton";
import { useThemeContext } from "@/app/context/ThemeContext";
import { useArticleLikes } from "@/app/hooks/useArticleLikes";

const SearchArticleCard = ({ article, onClick }) => {
  const { themeData } = useThemeContext();

  const { isArticleFavorite, toggleFavorite, loading } =
    useArticleLikes(article?._id);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  if (loading) return null;

  return (
    <Link
      href={`/blog/${article.slug}`}
      onClick={onClick}
      className="block transition-opacity duration-200 hover:opacity-90"
      style={{ textDecoration: "none" }}
    >
      <div
        className="flex gap-4 py-5"
        style={{
          borderBottom: `1px solid ${themeData?.text?.border}`,
        }}
      >
        {/* Image */}
        <div className="relative flex-shrink-0">
          <img
            src={article.image_url || "/placeholder.jpg"}
            alt={article.title}
            className="h-[76px] w-[110px] rounded-xl object-cover"
          />

          <FavoriteButton
            isFavorite={isArticleFavorite(article?._id)}
            toggleFavorite={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(article?._id);
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center">
          <Text
            type="heroLabel"
            sx={{
              color: themeData?.background?.button,
              mb: 0.5,
              letterSpacing: "0.18em",
            }}
          >
            {article.category?.slug?.replaceAll("-", " ").toUpperCase()}
          </Text>

          <Text
            type="cardTitle"
            sx={{
              lineHeight: 1.35,
            }}
          >
            {article.title}
          </Text>

          <Text
            type="caption"
            sx={{
              mt: 1,
              color: themeData?.text?.secondary,
            }}
          >
            {formatDate(article.created_at)}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default SearchArticleCard;