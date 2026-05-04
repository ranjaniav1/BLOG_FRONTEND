"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Chip,
  alpha,
  Container,
} from "@mui/material";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useThemeContext } from "../context/ThemeContext";

export default function SeriesSidebar({ lessons = [], title = "Series" }) {
  const { seriesSlug } = useParams();
  const pathname = usePathname();
  const { themeData, config } = useThemeContext();
  const sorted = [...lessons].sort((a, b) => a.day - b.day);
  const totalLessons = sorted.length;

  // Alternative: More sophisticated extraction
  const getSmartTitle = () => {
    if (title && title !== "Series") return title;

    if (seriesSlug) {
      // Handle different slug formats
      let words = seriesSlug.split('-');

      // Take first 1-2 words based on length
      let titleWords = words.slice(0, words.length > 3 ? 1 : 1);

      // Capitalize each word
      let formattedTitle = titleWords
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return `${formattedTitle} Series`;
    }

    return "Learning Series";
  };

  const displayTitle = getSmartTitle();

  return (

      <Box
        sx={{
          width: 300,
          height: "100vh",
          position: "sticky",
          top: 0,
          overflowY: "auto",
          bgcolor: themeData?.background?.card || '#fff',
          display: "flex",
          flexDirection: "column",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
        }}
      >
        {/* Header Section */}
        <Box sx={{ p: 2.5 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: themeData?.text?.heading,
            }}
          >
            {displayTitle}
          </Typography>
          <Typography sx={{ color: themeData?.text?.secondary }}>
            {totalLessons} lessons
          </Typography>
        </Box>

        {/* Lessons List */}
        <Box sx={{ flex: 1, py: 1 }}>
          <List disablePadding>
            {sorted.map((lesson, index) => {
              const isActive = pathname === `/series/${seriesSlug}/${lesson.slug}`;
              const isCompleted = lesson.completed || false;
              const isLocked = lesson.isLocked || false;

              return (
                <ListItem key={lesson.slug} disablePadding>
                  <Link
                    href={isLocked ? "#" : `/series/${seriesSlug}/${lesson.slug}`}
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      cursor: isLocked ? "not-allowed" : "pointer"
                    }}
                  >
                    <ListItemButton
                      sx={{
                        py: 1.5,
                        px: 2.5,
                        // Light background for active lesson
                        bgcolor: isActive
                          ? alpha(themeData?.background?.button || '#1976d2', 0.12)  // Light background with button color
                          : "transparent",
                        borderLeft: isActive
                          ? `3px solid ${themeData?.background?.button || '#1976d2'}`
                          : "3px solid transparent",
                        "&:hover": {
                          bgcolor: isActive
                            ? alpha(themeData?.background?.button || '#1976d2', 0.15)  // Slightly darker on hover
                            : alpha(themeData?.text?.primary || '#000', 0.04),  // Very light gray on hover
                        },
                        opacity: isLocked ? 0.6 : 1,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%" }}>
                        {/* Lesson Number Badge */}
                        <Box
                          sx={{
                            minWidth: 28,
                            height: 28,
                            borderRadius: config?.borderRadius || '50%',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: isActive
                              ? themeData?.background?.button || '#1976d2'
                              : alpha(themeData?.text?.primary || '#000', 0.08),
                            color: isActive
                              ? "#fff"
                              : themeData?.text?.secondary,
                            fontSize: "0.75rem",
                            fontWeight: "bold",
                          }}
                        >
                          {isCompleted ? (
                            <CheckCircleIcon sx={{ fontSize: 16 }} />
                          ) : isLocked ? (
                            <LockIcon sx={{ fontSize: 14 }} />
                          ) : (
                            index + 1
                          )}
                        </Box>

                        {/* Lesson Info */}
                        <Box sx={{ flex: 1 }}>

                          <Typography
                            variant="body1"
                            fontWeight={isActive ? "bold" : "normal"}

                            sx={{ color: themeData?.background?.button }}
                          >
                            Day {index + 1}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: isActive
                                ? themeData?.background?.button || '#1976d2'
                                : themeData?.text?.primary,
                              mb: 0.5,
                            }}
                          >
                            {lesson.title}
                          </Typography>
                        </Box>
                      </Box>
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
  );
}