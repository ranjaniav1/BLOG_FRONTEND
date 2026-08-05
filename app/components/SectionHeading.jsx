"use client";

import Link from "next/link";
import { Box, Container } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Text from "./Text";
import { useThemeContext } from "@/app/context/ThemeContext";

const SectionHeading = ({
    id,
    eyebrow,
    title,
    to,
    linkLabel = "View all",
    sx = {},
}) => {
    const { themeData } = useThemeContext();

    return (
        <Container maxWidth="xl">

            <Box
                id={id}
                sx={{
                    borderBottom: `1px solid ${themeData?.border}`,
                    pb: 4,
                    mb: 6,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: 3,
                    ...sx,
                }}
            >
                <Box>
                    {eyebrow && (
                        <Text
                            type="heroLabel"
                            mb={1}
                        >
                            {eyebrow}
                        </Text>
                    )}

                    <Text type="sectionHeading" >
                        {title}
                    </Text>
                </Box>

                {to && (
                    <Link
                        href={to}
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            color: themeData?.text?.secondary,
                            fontSize: "15px",
                            fontWeight: 500,
                            transition: ".25s",
                        }}
                    >
                        {linkLabel}
                        <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                    </Link>
                )}
            </Box>
        </Container>
    );
};

export default SectionHeading;