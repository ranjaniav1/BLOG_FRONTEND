"use client";

import Link from "next/link";
import { Card } from "@mui/material";
import Text from "./Text";

export default function CategoryCard({
    name,
    slug,
    description,
    totalArticles = 0,
}) {
    return (
        <Link href={`/categories/${slug}`} style={{ textDecoration: "none" }}>
            <Card
                sx={{
                    p: 4,
                    borderRadius: "24px",
                    transition: ".3s",
                    cursor: "pointer",

                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 4,
                    },
                }}
            >
                <Text
                    type="heroLabel"
                    mb={2}
                >
                    {totalArticles} Articles
                </Text>

                <Text
                    type="cardTitle"
                    mb={2}
                >
                    {name}
                </Text>

                <Text
                    type="cardDescription"
                >
                    {description}
                </Text>
            </Card>
        </Link>
    );
}