"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Text from "./Text";

const SectionHeading = ({
  id,
  eyebrow,
  title,
  to,
  linkLabel = "View all",
  mb = 5,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 2,
        mb,
        pb: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box>
        {eyebrow && (
          <Text type="sectionEyebrow">
            {eyebrow}
          </Text>
        )}

        <Text
          id={id}
          type="sectionHeading"
          mt={1}
        >
          {title}
        </Text>
      </Box>

      {to && (
        <Link
          href={to}
          style={{
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
            }}
          >
            <Text
              type="caption"
              sx={{
                transition: ".2s",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              {linkLabel}
            </Text>

            <ArrowForwardIcon
              sx={{
                fontSize: 18,
              }}
            />
          </Box>
        </Link>
      )}
    </Box>
  );
};

export default SectionHeading;