"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  CircularProgress,
  InputBase,
} from "@mui/material";
import {
  Close as CloseIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import Link from "next/link";

import { useThemeContext } from "@/app/context/ThemeContext";
import { useSearch } from "@/app/utils/useSearch";
import Text from "../shared/Text";
import Icons from "../shared/Icons";
import SearchArticleCard from "../shared/SearchArticleCard";

export default function SearchDialog({ open, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  const { news, loading } = useSearch(searchQuery);
  const { themeData } = useThemeContext();





  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "24px",
          background: themeData?.background?.body,
          maxHeight: "85vh",
          boxShadow: "0 30px 80px rgba(0,0,0,.12)",
        },
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        {/* Search Bar */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: `1px solid ${themeData?.text?.border}`,
            borderRadius: 18,
            padding: "12px 18px",
            background: themeData?.background?.card,
          }}
        >
          <SearchIcon
            sx={{
              color: themeData?.icon?.default,
            }}
          />

          <InputBase
            autoFocus
            fullWidth
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            sx={{
              color: themeData?.text?.primary,
              fontSize: "1rem",
            }}
          />
          <Icons icon={<CloseIcon />} onClick={onClose} />
        </div>

        {searchQuery.trim() === "" && (
          <div
            style={{
              padding: "60px 0",
              textAlign: "center",
            }}
          >
            <Text
              type="bodyLarge"
              sx={{
                maxWidth: 420,
                mx: "auto",
              }}
            >
              Find articles by title, category, or anything you've written
              about.
            </Text>
          </div>
        )}

        {/* Loading */}

        {loading && searchQuery.trim() !== "" && news.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "60px",
            }}
          >
            <CircularProgress />
          </div>
        )}

        {/* No Results */}

        {!loading && news.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
            }}
          >
            <Text type="cardTitle">
              No articles found
            </Text>

            <Text type="bodyLarge" mt={2}>
              Try another keyword.
            </Text>
          </div>
        )}

        {/* Results */}

        {!loading && news.length > 0 && (
          <div style={{ marginTop: 24 }}>
            {news.map((article) => (
              <SearchArticleCard
                key={article._id}
                article={article}
                onClick={onClose}
              />
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}