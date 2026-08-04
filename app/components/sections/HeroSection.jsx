import React from "react";
import {
  Container,
  Box,
} from "@mui/material";

import Text from "../Text";
import Button from "../Button";
import Link from "next/link";

export default function HeroSection() {


  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="fade-up">
          <Text type="heroLabel">
            A journal by Ranjani Varsani
          </Text>

          <Text
            type="heroTitle"
            mt={6}
            maxWidth="15ch"
          >
            Every experience has something to teach.
          </Text>

          <Text
            type="bodyLarge"
            mt={4}
            maxWidth="62ch"
          >
            Welcome to <mark>my little corner of the internet</mark> — a place where I
            write about life, growth, lessons, dreams, failures, books, relationships,
            and everything that shapes who we become. I don't write because I know
            everything. I write because I'm still learning.
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
        <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
          <img
            src="hero_image.jpg"
            alt="A cup of coffee and an open notebook on a linen table in morning light"
            width={1600}
            height={1100}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>

  );
}