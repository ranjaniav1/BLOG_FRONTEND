"use client";

import React from "react";
import { Container, Button, Box, Typography } from "@mui/material";
import Link from "next/link";

import { useThemeContext } from "@/app/context/ThemeContext";
import {  useLessons, useSeries } from "@/app/hooks/useServices";

export default function HeroSection() {
  const { themeData, config, settings, loading } = useThemeContext();

  const { data: seriesList = [], loading:seriesLoading } = useSeries();
  const pythonSeries = seriesList?.find(
    (s) => s.slug === "python-for-begginers"
  );

  const seriesId = pythonSeries?._id;

  // 🔥 Get lessons of that series
  const {
    data: lessons = [],
    loading: lessonsLoading,
  } = useLessons(seriesId);


console.log("seriesList:", seriesList);
console.log("pythonSeries:", pythonSeries);
console.log("seriesId:", seriesId);
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
    <>
      <Container maxWidth="xl">
        {/* 🔥 HERO */}
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
              variant="h3"
              fontWeight="bold"
              sx={{ color: themeData?.text?.heading || "#0F172A" }}
            >
              Learn Python{" "}
              <span
                style={{
                  color: themeData?.background?.button || "#ef4444",
                }}
              >
                From Scratch
              </span>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: themeData?.text?.secondary || "#4B5563",
              }}
            >
              Beginner to advanced — step-by-step tutorials with real examples and hands-on projects.
            </Typography>

            <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
              {/* {firstLesson && (
                <Link
                  href={`/series/${pythonSeries?.slug}/${firstLesson.slug}`}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: themeData?.background?.button,
                      color: themeData?.text?.button,
                      "&:hover": {
                        bgcolor: themeData?.background?.button,
                        opacity: 0.9,
                      },
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Start Learning – Day {firstLesson.day}
                  </Button>
                </Link>
              )} */}

              <Link href={`/series/${pythonSeries?.slug}`}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: themeData?.background?.button,
                    color: themeData?.background?.button,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: themeData?.background?.button,
                      bgcolor: themeData?.background?.button + "10",
                    },
                  }}
                >
                  Explore All Lessons
                </Button>
              </Link>
            </Box>
          </Box>

          {/* RIGHT IMAGE */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="hero-py.jpg"
              alt="Python Logo"
              style={{
                maxWidth: "400px",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>

        {/* 🔥 SERIES SECTION */}
        <Box sx={{ py: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: themeData?.text?.heading || "#0F172A" }}
            >
              Start Python Series
            </Typography>

            <Link href={`/series/${pythonSeries?.slug}`}>
              <Typography
                sx={{
                  color: themeData?.background?.button || "#ef4444",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                View All →
              </Typography>
            </Link>
          </Box>

          {/* GRID */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {seriesId && lessons?.map((item) => (
              <Link
                key={item.slug}
                href={`/series/${pythonSeries?.slug}/${item.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: config?.borderRadius || "8px",
                    bgcolor: themeData?.background?.card || "#FFFFFF",
                    boxShadow: 2,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-4px)",
                    },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                 

                  <Typography
                    variant="h6"
                    sx={{
                      mt: 1,
                      color: themeData?.text?.primary || "#1F2937",
                      fontWeight: 600,
                      flex: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      color: themeData?.background?.button || "#ef4444",
                      fontWeight: 500,
                    }}
                  >
                    Start →
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>

          
        </Box>
      </Container>
    </>
  );
}