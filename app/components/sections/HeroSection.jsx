import React from "react";
import {
  Container,
  Box,
} from "@mui/material";

import Text from "../shared/Text";
import Button from "../shared/Button";
import Link from "next/link";
import parse from "html-react-parser";
import { HeroSkeleton } from "../features/Skeleton";
export default function HeroSection({ hero, loading }) {
  if (loading) {
    return <HeroSkeleton />;
  }

  return (
    <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="fade-up">
        <Text type="heroLabel">
          A journal by Ranjani Varsani
        </Text>

        <Text
          type="heroTitle"
          mt={4}
        // maxWidth="11ch"
        >
          {parse(hero?.title || "")}
        </Text>

        <Text
          component="div"
          type="bodyLarge"
          mt={5}
          maxWidth="34rem"
        >
          {parse(hero?.content || "")}
        </Text>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Link href="/articles" passHref>
            <Button type="primary">
              Start Reading
            </Button>
          </Link>

          <Link href="/categories" passHref>
            <Button type="secondary">
              Browse Categories
            </Button>
          </Link>
        </Box>
      </div>
      <div className="overflow-hidden rounded-[2.25rem] shadow-sm">
        <img
          src={hero?.image_url}
          alt={hero?.title}
          width={1600}
          height={1100}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
    </div>


  );
}