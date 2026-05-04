"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import { useParams } from "next/navigation";
import { useLessonContent } from "@/app/hooks/useServices";
import { useSeriesContext } from "./seriesContext";
import { useThemeContext } from "@/app/context/ThemeContext";

export default function LessonPage() {
  const { seriesSlug, lessonSlug } = useParams();
  const { lessons } = useSeriesContext(); // Get lessons from context
  const { themeData } = useThemeContext()
  const { data: lesson = null, loading: lessonLoading } = useLessonContent(
    seriesSlug,
    lessonSlug
  );

  if (lessonLoading) {
    return (
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <div>Loading lesson...</div>
      </Container>
    );
  }

  if (!lesson) {
    return (
      <Container maxWidth="xl">
        <div>Lesson not found</div>
      </Container>
    );
  }

  // Navigation from context lessons
  const currentIndex = lessons.findIndex((l) => l.slug === lessonSlug);
  const prev = lessons[currentIndex - 1];
  const next = lessons[currentIndex + 1];

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
     <Box
  dangerouslySetInnerHTML={{
    __html: lesson.content
      ?.replace(/<p>(&nbsp;|\s)*<\/p>/g, "") // remove empty paragraphs
      ?.replace(/<p>\s*<\/p>/g, "")
  }}
  sx={{
    maxWidth: "900px",
    mx: "auto",
    lineHeight: 1.8,

    // Headings
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      mt: 4,
      mb: 2,
      fontWeight: 600,
      color: themeData.text.heading,
      lineHeight: 1.3,
    },

    "& h1": { fontSize: "2.5rem" },
    "& h2": {
      fontSize: "2rem",
      borderBottom: "1px solid",
      borderColor: "divider",
      pb: 1,
    },
    "& h3": { fontSize: "1.6rem" },
    "& h4": { fontSize: "1.3rem" },

    // Paragraphs
    "& p": {
      mb: 2,
      color: themeData.text.secondary,
      fontSize: "1rem",
    },

    // Strong (important fix)
    "& strong": {
      fontWeight: 600,
      color: themeData.text.heading,
    },

    // Lists
    "& ul, & ol": {
      mb: 2,
      pl: 4,
    },

    "& ul": {
      listStyleType: "disc",
    },

    "& ul ul": { listStyleType: "circle" },
    "& ul ul ul": { listStyleType: "square" },

    "& ol": {
      listStyleType: "decimal",
    },

    "& ol ol": { listStyleType: "lower-alpha" },
    "& ol ol ol": { listStyleType: "lower-roman" },

    "& li": {
      mb: 0.8,
      color: themeData.text.secondary,
    },

    // Nested spacing fix
    "& li > ul, & li > ol": {
      mt: 1,
      mb: 1,
    },

    // Code blocks
    "& pre": {
      bgcolor: "#1e1e1e",
      color: "#d4d4d4",
      p: 2,
      borderRadius: 2,
      overflowX: "auto",
      mb: 2,
      fontFamily: "Consolas, Monaco, monospace",
      fontSize: "0.85rem",
    },

    "& code": {
      bgcolor: "action.hover",
      px: 0.6,
      py: 0.3,
      borderRadius: 1,
      fontFamily: "Consolas, Monaco, monospace",
      fontSize: "0.85rem",
    },

    // Blockquotes
    "& blockquote": {
      borderLeft: "4px solid",
      borderColor: "primary.main",
      bgcolor: "action.hover",
      py: 1,
      px: 2,
      my: 2,
      fontStyle: "italic",
      color: themeData.text.secondary,
    },

    // Tables
    "& table": {
      width: "100%",
      mb: 2,
      borderCollapse: "collapse",
    },

    "& th, & td": {
      border: "1px solid",
      borderColor: "divider",
      p: 1,
      textAlign: "left",
    },

    "& th": {
      bgcolor: "action.hover",
      fontWeight: "bold",
    },

    // Horizontal rule
    "& hr": {
      my: 4,
      borderColor: "divider",
    },

    // Images
    "& img": {
      maxWidth: "100%",
      height: "auto",
      borderRadius: 2,
      my: 2,
      display: "block",
    },

    // Links
    "& a": {
      color: themeData.text.primary,
      textDecoration: "none",
      fontWeight: 500,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  }}
/>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
        {prev ? (
          <Button
            href={`/series/${seriesSlug}/${prev.slug}`}
            variant="outlined"
          >
            ← {prev.title}
          </Button>
        ) : (
          <div />
        )}
        {next && (
          <Button
            href={`/series/${seriesSlug}/${next.slug}`}
            variant="contained"
            color="error"
          >
            {next.title} →
          </Button>
        )}
      </Box>
    </Container>
  );
}