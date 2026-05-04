"use client";

import { Box, Container } from "@mui/material";
import SeriesSidebar from "@/app/components/seriesSidebar";
import { useParams } from "next/navigation";
import { SeriesProvider, useSeriesContext } from "./seriesContext";
import { useThemeContext } from "@/app/context/ThemeContext";


export default function SeriesLayout({ children }) {
    const { seriesSlug } = useParams();

    return (
        <SeriesProvider seriesSlug={seriesSlug}>
            <SeriesLayoutContent>{children}</SeriesLayoutContent>
        </SeriesProvider>
    );
}

function SeriesLayoutContent({ children }) {
    const { themeData } = useThemeContext()
    const { series, lessons, loading } = useSeriesContext();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container maxWidth="xl">

            <Box sx={{ display: "flex", background: themeData?.background }}>
                <SeriesSidebar lessons={lessons} title={series?.title || "Series"} />
                <Box sx={{ flex: 1 }}>{children}</Box>
            </Box>
        </Container>
    );
}