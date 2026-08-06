"use client";

import React from "react";
import Text from "../shared/Text";
import { Box } from "@mui/material";
import NewsIcons from "./NewsIcons";
import { formatDate } from "@/app/utils/formateDate";

const NewsHeader = ({ article }) => {
  return (
    <Box sx={{ mb: 8 }}>
      <Text type="heroLabel">
        {article.category?.name}
      </Text>

      <Text
        type="sectionTitle"
        mt={2}
      >
        {article.title}
      </Text>

      {article.excerpt && (
        <Text
          type="bodyLarge"
          italic
          mt={3}
        >
          {article.excerpt}
        </Text>
      )}

      <Box
        sx={{
          my: 5,
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Text type="body">
          {article.createdBy?.fullname}
        </Text>

        <Text type="body">•</Text>

        <Text type="body">
          {formatDate(article.published_at)}
        </Text>

        <Text type="body">•</Text>

        <Text type="body">
          {article.read_time} min read
        </Text>

        <Box sx={{
          ml: { xs: 0, md: "auto" },
          width: { xs: "100%", md: "auto" },
          display: "flex",
          justifyContent: { xs: "flex-start", md: "flex-end" },
        }}>
          <NewsIcons />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsHeader;