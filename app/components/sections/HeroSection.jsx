"use client";

import React from "react";
import {
  Container,
  Button,
  Box,
  Typography,
} from "@mui/material";
import Link from "next/link";
import {
  MenuBook,
  Star,
  School,
  Lock,
} from "@mui/icons-material";

import { useThemeContext } from "@/app/context/ThemeContext";
import { useLessons, useSeries } from "@/app/hooks/useServices";

export default function HeroSection() {
  const { themeData, config, loading } = useThemeContext();

  const { data: seriesList = [], loading: seriesLoading } = useSeries();

  const pythonSeries = seriesList?.find(
    (s) => s.slug === "python-for-begginers"
  );

  const seriesId = pythonSeries?._id;

  const {
    data: lessons = [],
    loading: lessonsLoading,
  } = useLessons(seriesId);

  if (loading || seriesLoading || lessonsLoading) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ py: 8, textAlign: "center" }}>
          <Typography>Loading...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      {/* ================= HERO ================= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          py: 8,
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              color: themeData.text.secondary,
              mb: 1,
            }}
          >
            🚀 Start Your Python Journey
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: themeData.text.primary }}
          >
            Learn Python{" "}
            <span style={{ color: themeData.background.button }}>
              From Scratch
            </span>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: themeData.text.secondary,
              maxWidth: "500px",
            }}
          >
            Beginner to Advanced — step-by-step tutorials with
            real examples and hands-on projects.
          </Typography>

          {/* BUTTONS */}
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            {lessons[0] && (
              <Link
                href={`/series/${pythonSeries?.slug}/${lessons[0].slug}`}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: themeData.background.button,
                    color: themeData.text.button,
                    px: 3,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      opacity: 0.9,
                      bgcolor: themeData.background.button,
                    },
                  }}
                >
                  Start Learning – Day {lessons[0].day}
                </Button>
              </Link>
            )}

            <Link href={`/series/${pythonSeries?.slug}`}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#E5E7EB",
                  color: themeData.text.primary,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Explore All Lessons
              </Button>
            </Link>
          </Box>

          {/* ================= STATS ================= */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 5,
              flexWrap: "wrap",
            }}
          >
            {[
              {
                label: "Lessons",
                value: lessons.length + "+",
                icon: <MenuBook fontSize="small" />,
              },
              {
                label: "Projects",
                value: "10+",
                icon: <Star fontSize="small" />,
              },
              {
                label: "Beginner Friendly",
                value: "",
                icon: <School fontSize="small" />,
              },
              {
                label: "Lifetime Access",
                value: "",
                icon: <Lock fontSize="small" />,
              },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 1.5,
                  borderRadius: config?.borderRadius || "12px",
                  bgcolor: themeData.background.header,
                  border: "1px solid #E5E7EB",
                  minWidth: "150px",
                }}
              >
                <Box color={themeData.background.button}>
                  {item.icon}
                </Box>

                <Box>
                  <Typography fontWeight={600} fontSize="14px">
                    {item.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: themeData.text.secondary }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src="hero-py.jpg"
            alt="Python"
            style={{
              maxWidth: "420px",
              width: "100%",
            }}
          />
        </Box>
      </Box>

      {/* ================= LESSON PATH ================= */}
      <Box sx={{ py: 6 }}>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: themeData.text.primary }}
          >
            Start Learning Python (Structured Path)
          </Typography>

          <Link href={`/series/${pythonSeries?.slug}`}>
            <Typography
              sx={{
                fontSize: "14px",
                color: themeData.background.button,
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              View All Lessons →
            </Typography>
          </Link>
        </Box>

        {/* LESSON CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(5,1fr)",
            },
            gap: 2,
          }}
        >
          {seriesId &&
            lessons.slice(0, 5).map((item) => (
              <Link
                key={item.slug}
                href={`/series/${pythonSeries?.slug}/${item.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius:
                      config?.borderRadius || "14px",
                    border: "1px solid #E5E7EB",
                    bgcolor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "130px",
                    transition: "0.25s",
                    "&:hover": {
                      boxShadow:
                        "0 10px 20px rgba(0,0,0,0.08)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {/* TOP */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: themeData.text.secondary,
                      }}
                    >
                      Day {item.day}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 600,
                        mt: 0.5,
                        fontSize: "14px",
                        color: themeData.text.primary,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {/* BOTTOM */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#10B981",
                        fontWeight: 500,
                      }}
                    >
                      Start
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#9CA3AF",
                      }}
                    >
                      →
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
        </Box>
      </Box>
    </Container>
  );
}