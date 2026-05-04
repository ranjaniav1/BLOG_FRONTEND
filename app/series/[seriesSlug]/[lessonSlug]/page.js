"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import SeriesSidebar from "@/app/components/seriesSidebar";
import { useParams } from "next/navigation";
import {
  useLessonContent,
  useLessons,
  useSeries,
} from "@/app/hooks/useServices";

export default function LessonPage() {
  const { seriesSlug, lessonSlug } = useParams();

  // 🔥 Get all series
  const { data: seriesList = [], loading: seriesLoading } =
    useSeries();

  const currentSeries = seriesList.find(
    (s) => s.slug === seriesSlug
  );

  const seriesId = currentSeries?._id;

  // 🔥 Sidebar lessons
  const { data: lessons = [], loading: lessonsLoading } =
    useLessons(seriesId);

  // 🔥 Single lesson content
  const { data: lesson=null, loading: lessonLoading } =
    useLessonContent(seriesSlug, lessonSlug);

  if (seriesLoading || lessonsLoading || lessonLoading) {
    return <div>Loading...</div>;
  }

  if (!lesson) return <div>Lesson not found</div>;

  // 🔥 sort for sidebar + navigation
  const sorted = [...lessons].sort((a, b) => a.day - b.day);

  const currentIndex = sorted.findIndex(
    (l) => l.slug === lessonSlug
  );

  const prev = sorted[currentIndex - 1];
  const next = sorted[currentIndex + 1];

  return (
    <Box sx={{ display: "flex" }}>
      {/* ✅ Sidebar */}
      <SeriesSidebar
        lessons={sorted}
        title={currentSeries?.title}
      />

      {/* ✅ MAIN CONTENT */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          {lesson.title}
        </Typography>

        <Box
          dangerouslySetInnerHTML={{
            __html: lesson.content,
          }}
          sx={{
            lineHeight: 1.8,
            "& p": { mb: 2 },
            "& h2": { mt: 4, mb: 2 },
            "& pre": {
              bgcolor: "#111",
              color: "#fff",
              p: 2,
              borderRadius: 2,
              overflowX: "auto",
            },
          }}
        />

        {/* NAVIGATION */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 6,
          }}
        >
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
    </Box>
  );
}