import Link from "next/link";
import Text from "./Text";
import { Card } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

export default function CategoryCard({
    name,
    slug,
    description,
    totalArticles = 0,
}) {
    const { themeData } = useThemeContext();
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
                    size="11px"
                    color="secondary"
                    spacing={3}
                    transform="uppercase"
                >
                    {totalArticles} Articles
                </Text>

                <h2
                    className="mt-4 font-serif text-2xl tracking-tight group-hover:underline"
                    style={{ color: themeData?.text?.primary }}
                >
                    {name}
                </h2>

                <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: themeData?.text?.secondary }}
                >
                    {description}
                </p>

            </Card>
        </Link>
    );
}