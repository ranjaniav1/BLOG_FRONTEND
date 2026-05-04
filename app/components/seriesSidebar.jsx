"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function SeriesSidebar({ lessons = [], title = "Series" }) {
  const { seriesSlug } = useParams();
  const pathname = usePathname();

  const sorted = [...lessons].sort((a, b) => a.day - b.day);

  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        position: "sticky",
        top: 0,
        overflowY: "auto",
        borderRight: "1px solid #eee",
        p: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        📘 {title}
      </Typography>

      {sorted.map((lesson) => {
        const isActive =
          pathname === `/series/${seriesSlug}/${lesson.slug}`;

        return (
          <Link
            key={lesson.slug}
            href={`/series/${seriesSlug}/${lesson.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                mb: 1,
                p: 1.5,
                borderRadius: 2,
                bgcolor: isActive ? "#fee2e2" : "transparent",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              <Typography variant="caption">
                Day {lesson.day}
              </Typography>

              <Typography
                fontWeight={isActive ? "bold" : "normal"}
              >
                {lesson.title}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}