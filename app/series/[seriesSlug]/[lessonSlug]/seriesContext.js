"use client";

import { createContext, useContext } from "react";
import { useSeries, useLessons } from "@/app/hooks/useServices";

const SeriesContext = createContext();

export function SeriesProvider({ children, seriesSlug }) {
  const { data: seriesList = [] } = useSeries();
  const currentSeries = seriesList.find((s) => s.slug === seriesSlug);
  const seriesId = currentSeries?._id;
  
  const { data: lessons = [], loading: lessonsLoading } = useLessons(seriesId);
  const sortedLessons = [...lessons].sort((a, b) => a.day - b.day);

  return (
    <SeriesContext.Provider
      value={{
        series: currentSeries,
        lessons: sortedLessons,
        loading: lessonsLoading,
        seriesSlug,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
}

export function useSeriesContext() {
  const context = useContext(SeriesContext);
  if (!context) {
    throw new Error("useSeriesContext must be used within SeriesProvider");
  }
  return context;
}