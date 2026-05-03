import { Box, Typography, Container, Button } from "@mui/material";
import SeriesSidebar from "@/app/components/seriesSidebar";
import { pythonBasics } from "@/app/data/seriesData";

export default function LessonPage({ params }) {
  const { seriesSlug, lessonSlug } = params;

  // 👉 Use dummy data
  const series = pythonBasics;

  const lesson = series.find(l => l.slug === lessonSlug);

  const sorted = [...series].sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex(l => l.slug === lessonSlug);

  const prev = sorted[currentIndex - 1];
  const next = sorted[currentIndex + 1];

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <Box sx={{ display: "flex" }}>

      {/* Sidebar */}
      <SeriesSidebar />

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 6 }}>

        <Typography variant="h4" fontWeight="bold">
          {lesson.title}
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Day {lesson.day} • Python Basics
        </Typography>

        <Box
          dangerouslySetInnerHTML={{ __html: lesson.content }}
          sx={{
            lineHeight: 1.8,
            "& p": { mb: 2 },
            "& h2": { mt: 4, mb: 2 },
            "& pre": {
              bgcolor: "#111",
              color: "#fff",
              p: 2,
              borderRadius: 2,
              overflowX: "auto"
            }
          }}
        />

        {/* Navigation */}
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 6
        }}>
          {prev ? (
            <Button href={`/series/${seriesSlug}/${prev.slug}`} variant="outlined">
              ← {prev.title}
            </Button>
          ) : <div />}

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