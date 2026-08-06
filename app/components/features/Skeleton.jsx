import React from "react";
import {
  Skeleton,
  Container,
  Box,
  Grid,
} from "@mui/material";

import { useThemeContext } from "@/app/context/ThemeContext";

export const CardSkeleton = ({ height = "191px" }) => {
  const { config } = useThemeContext()
  return (
    <Box sx={{ width: "100%", height, backgroundColor: "#f0f0f0", padding: 2, borderRadius: config?.borderRadius }}>
      <Skeleton variant="rectangular" width="100%" height={height} />
      <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
      <Skeleton variant="text" width="60%" />
    </Box>
  );
};


export const NewsDetailSkeleton = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Container maxWidth="xl" sx={{ mt: "2%" }}>
        <Grid container spacing={3}>
          {/* Left Side - Main Article Skeleton */}
          <Grid item xs={12} md={8}>
            <Skeleton variant="text" width={150} height={30} />
            <Skeleton variant="text" width="80%" height={40} />
            <Skeleton variant="text" width="50%" height={20} />
            <div className="flex justify-between items-center my-4">
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
            </div>
            <Skeleton variant="rectangular" width="100%" height={400} />
            <Skeleton variant="text" width="100%" height={100} />
            <Skeleton variant="text" width="90%" height={60} />
          </Grid>
          {/* Right Side - Related Articles Skeleton */}
          <Grid item xs={12} md={4}>
            <Skeleton variant="text" width={150} height={30} />
            {[...Array(3)].map((_, index) => (
              <div key={index} className="my-4">
                <Skeleton variant="rectangular" width="100%" height={120} />
                <Skeleton variant="text" width="80%" height={30} />
                <Skeleton variant="text" width="60%" height={20} />
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};


export const ArticleCardSkeleton = ({ editorial = false }) => {
  return (
    <article>
      <Skeleton
        variant="rounded"
        animation="wave"
        className={`w-full ${editorial ? "aspect-[3/2]" : "aspect-[16/10]"
          } rounded-[28px]`}
      />

      <Skeleton
        variant="text"
        width={110}
        height={18}
        sx={{ mt: 3 }}
      />

      <Skeleton
        variant="text"
        width="90%"
        height={46}
      />

      <Skeleton
        variant="text"
        width="100%"
        height={22}
      />

      <Skeleton
        variant="text"
        width="75%"
        height={22}
      />

      <div className="flex gap-3 mt-4">
        <Skeleton width={90} height={18} />
        <Skeleton width={80} height={18} />
      </div>
    </article>
  );
};
export const ArticleSectionSkeleton = () => {
  return (
    <>
      <div className="flex items-end justify-between mb-12">
        <div>
          <Skeleton width={90} height={18} />

          <Skeleton
            width={260}
            height={48}
            sx={{ mt: 1 }}
          />
        </div>

        <Skeleton
          variant="rounded"
          width={110}
          height={36}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {Array.from({ length: 4 }).map((_, index) => (
          <ArticleCardSkeleton
            key={index}
            editorial
          />
        ))}
      </div>
    </>
  );
};
export const HeroSkeleton = () => {
  return (
    <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] items-center">
      <div>
        <Skeleton width={120} height={22} />

        <Skeleton
          width="90%"
          height={80}
          sx={{ mt: 2 }}
        />

        <Skeleton
          width="95%"
          height={28}
          sx={{ mt: 3 }}
        />

        <Skeleton width="80%" height={28} />

        <Skeleton width="70%" height={28} />

        <div className="flex gap-3 mt-8">
          <Skeleton
            variant="rounded"
            width={150}
            height={48}
          />

          <Skeleton
            variant="rounded"
            width={180}
            height={48}
          />
        </div>
      </div>

      <Skeleton
        variant="rounded"
        className="aspect-[4/3] w-full rounded-[36px]"
      />
    </div>
  );
};

export const FeaturedSkeleton = () => {
  return (
    <section className="pt-16 pb-20">
      <Skeleton width={120} height={20} />

      <Skeleton
        width={260}
        height={48}
        sx={{ mt: 2 }}
      />

      <div className="mt-10">
        <ArticleCardSkeleton />
      </div>
    </section>
  );
};


export const ArticleDetailSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Skeleton width={120} height={20} />

      <Skeleton
        width="90%"
        height={70}
        sx={{ mt: 2 }}
      />

      <div className="flex gap-4 mt-3">
        <Skeleton width={120} height={18} />
        <Skeleton width={90} height={18} />
      </div>

      <Skeleton
        variant="rounded"
        className="aspect-[16/9] w-full mt-8 rounded-[28px]"
      />

      {Array.from({ length: 9 }).map((_, i) => (
        <Skeleton
          key={i}
          height={26}
          sx={{ mt: 2 }}
        />
      ))}
    </div>
  );
};


export const CategorySkeleton = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-14">
        {/* Header */}
        <div className="max-w-3xl">
          <Skeleton width={80} height={20} />
          <Skeleton
            width="60%"
            height={70}
            sx={{ mt: 1 }}
          />
          <Skeleton
            width="40%"
            height={30}
          />
        </div>

        {/* Articles */}
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <ArticleCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};