"use client";

import Link from "next/link";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Button from "@/app/components/shared/Button";
import Text from "@/app/components/shared/Text";
import { useThemeContext } from "@/app/context/ThemeContext";

export default function NotFound() {
    const { themeData } = useThemeContext();

    return (
        <main
            className="min-h-screen flex items-center justify-center px-6"
            style={{
                background: themeData?.background?.body,
            }}
        >
            <div className="max-w-xl text-center">
                <div
                    className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full"
                    style={{
                        background: themeData?.background?.card,
                    }}
                >
                    <ConstructionRoundedIcon
                        sx={{
                            fontSize: 52,
                            color: themeData?.background?.button,
                        }}
                    />
                </div>

                <Text
                    type="header"
                    component="h1"
                    sx={{
                        color: themeData?.text?.header,
                        mb: 2,
                    }}
                >
                    Page Under Construction
                </Text>

                <Text
                    type="body"
                    component="p"
                    sx={{
                        color: themeData?.text?.body,
                        mb: 4,
                        maxWidth: "520px",
                        mx: "auto",
                        lineHeight: 1.8,
                    }}
                >
                    We're working on something exciting! This page is currently under
                    development and will be available soon. Thank you for your patience.
                </Text>

                <div className="flex justify-center">
                    <Link href="/">
                        <Button
                            type="primary"
                            startIcon={<ArrowBackRoundedIcon />}
                        >
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}