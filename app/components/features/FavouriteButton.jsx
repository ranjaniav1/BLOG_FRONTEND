"use client";

import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import toast from "react-hot-toast";

import { useAuth } from "@/app/context/AuthContext";
import { useThemeContext } from "@/app/context/ThemeContext";
import Icons from "../shared/Icons";

const FavoriteButton = ({ isFavorite, toggleFavorite }) => {
  const { user } = useAuth();
  const { themeData } = useThemeContext();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast.error("Please log in to add to favorites!");
      return;
    }

    toggleFavorite();
  };

  return (
    <div className="absolute top-2 right-2">
      <Icons
        ariaLabel="Toggle Favorite"
        onClick={handleClick}
        icon={isFavorite ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          backgroundColor: isFavorite
            ? themeData?.background?.button
            : themeData?.background?.card,
          color: isFavorite
            ? themeData?.text?.button
            : themeData?.icon?.default,
          border: `1px solid ${themeData?.text?.border}`,
          backdropFilter: "blur(8px)",

          "&:hover": {
            backgroundColor: themeData?.background?.button,
            color: themeData?.text?.button,
            transform: "scale(1.05)",
          },
        }}
      />
    </div>
  );
};

export default FavoriteButton;