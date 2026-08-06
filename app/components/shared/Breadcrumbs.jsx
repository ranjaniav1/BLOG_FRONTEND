"use client";

import Link from "next/link";
import { Breadcrumbs } from "@mui/material";
import Text from "./Text";

const Breadcumps = ({ heading }) => {
  return (
    <Breadcrumbs separator="/" sx={{ pb: 5 }}>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          textDecoration: "none",
          color: "inherit",
        }}
      >

        <Text type="body">Home</Text>
      </Link>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          textDecoration: "none",
          color: "inherit",
        }}
      >

        <Text type="body">Articles</Text>
      </Link>

      <Text type="body">{heading?.category?.name || heading}</Text>
    </Breadcrumbs>
  );
};

export default Breadcumps;