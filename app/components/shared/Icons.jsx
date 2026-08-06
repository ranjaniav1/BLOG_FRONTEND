"use client";

import Link from "next/link";
import { IconButton } from "@mui/material";
import { useThemeContext } from "@/app/context/ThemeContext";

const Icons = ({ icon, href, onClick, ariaLabel, sx = {} }) => {
  const { themeData } = useThemeContext();

  const button = (
    <IconButton
      onClick={onClick}
      aria-label={ariaLabel}

      sx={{
        width: 35,
        height: 35,
        borderRadius: "20%",
        color: themeData?.icon?.main,
        transition: "all .25s ease",
        fontSize: "small",

        // "&:hover": {
        //   backgroundColor: "transparent",
        //   color: themeData?.icon?.main,
        //   transform: "translateY(-1px)",
        // },

        ...sx,
      }}
    >
      {icon}
    </IconButton>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {button}
    </Link>
  ) : (
    button
  );
};

export default Icons;