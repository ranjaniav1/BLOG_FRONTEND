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
        dangerouslySetInnerHTML={{ __html: lesson.content }}
        sx={{
          lineHeight: 1.8,
          color: themeData.text.primary,

          // Headings
          "& h1, & h2, & h3, & h4, & h5, & h6": {
            mt: 4,
            mb: 2,
            fontWeight: 600,
            color: themeData.text.heading,
          },

          "& h1": { fontSize: "2.5rem" },
          "& h2": { fontSize: "2rem", borderBottom: "1px solid", borderColor: "divider", pb: 1 },
          "& h3": { fontSize: "1.75rem" },
          "& h4": { fontSize: "1.5rem" },

          // Paragraphs
          "& p": {
            mb: 2,
            color: themeData.text.heading,
          },

          // Unordered Lists (bullet points)
          "& ul": {
            mb: 2,
            pl: 4,
            listStyleType: "disc",
            "& ul": {
              listStyleType: "circle",
              "& ul": {
                listStyleType: "square",
              }
            }
          },

          "& li": {
            mb: 1,
            color: themeData.text.primary,
            "&::marker": {
              color: themeData.text.primary,
            }
          },

          // Ordered Lists (numbered)
          "& ol": {
            mb: 2,
            pl: 4,
            listStyleType: "decimal",
            "& ol": {
              listStyleType: "lower-alpha",
              "& ol": {
                listStyleType: "lower-roman",
              }
            }
          },

          // Nested lists spacing
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
            fontFamily: "Consolas, Monaco, 'Courier New', monospace",
            fontSize: "0.875rem",
          },

          "& code": {
            bgcolor: "action.hover",
            px: 0.5,
            py: 0.2,
            borderRadius: 1,
            fontFamily: "Consolas, Monaco, 'Courier New', monospace",
            fontSize: "0.875rem",
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
            borderRadius: 1,
            my: 2,
          },

          // Links
          "& a": {
            color: themeData.text.primary,
            textDecoration: "none",
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