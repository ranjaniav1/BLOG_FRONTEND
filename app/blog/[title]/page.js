"use client";

import React, { useEffect } from "react";
import { Container, Box } from "@mui/material";
import { useParams } from "next/navigation";

import Breadcumps from "@/app/components/shared/Breadcrumbs";
import { NewsDetailSkeleton } from "@/app/components/features/Skeleton";
import NewsHeader from "@/app/components/news-detail/NewsHeader";
import NewsContent from "@/app/components/news-detail/NewsContent";
import RelatedNews from "@/app/components/news-detail/RelatedNews";
import CommentsDrawer from "@/app/components/news-detail/CommentDrawer";
import { useSingleArticles } from "@/app/utils/useSingleArticle";

const NewsDetailPage = () => {
  const { title } = useParams();

  const {
    article: clickedArticle,
    loading,
    relatedArticles,
  } = useSingleArticles(title);

  useEffect(() => {
    document.title = title
      ? `${title} | Ranjani Varsani`
      : "Ranjani Varsani";
  }, [title]);

  if (loading || !clickedArticle) {
    return <NewsDetailSkeleton />;
  }

  return (
    <main>
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: "760px",
            mx: "auto",
            py: {
              xs: 5,
              md: 8,
            },
          }}
        >
          <Breadcumps heading={clickedArticle} />

          <NewsHeader article={clickedArticle} />

          <NewsContent article={clickedArticle} />

          <RelatedNews articles={relatedArticles} />

          <CommentsDrawer article={clickedArticle} />
        </Box>
      </Container>
    </main>
  );
};

export default NewsDetailPage;