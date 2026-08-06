"use client";

import { Button as MuiButton, CircularProgress } from "@mui/material";
import { useThemeContext } from "@/app/context/ThemeContext";

const Button = ({
  children,

  // preset
  type = "primary",

  size = "medium",
  loading = false,
  fullWidth = false,
  rounded = true,
  startIcon,
  endIcon,

  sx = {},
  ...props
}) => {
  const { themeData } = useThemeContext();

  const presets = {
    primary: {
      variant: "contained",
      bg: themeData?.background?.button,
      color: themeData?.text?.button,
      border: themeData?.background?.border,
      height: 40,
      px: 2.5,
      minWidth: "auto",
      fontSize: "14px",
      fontWeight: 200,
    },

    secondary: {
      variant: "outlined",
      bg: "transparent",
      color: themeData?.text?.primary,
      height: 40,
      px: 2.5,
      minWidth: "auto",
      border: themeData?.text?.border,
      color: themeData?.text?.secondary,
      fontSize: "14px",
      fontWeight: 100,
    },

    ghost: {
      variant: "text",
      bg: "transparent",
      color: themeData?.text?.primary,
    },


  };

  const current = presets[type] || presets.primary;

  return (
    <MuiButton
      variant={current.variant}
      size={size}
      disabled={loading}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{

        px: current.px ?? 4,
        py: current.py ?? 1.5,
        height: current.height,
        minWidth: current.minWidth,
        fontSize: current.fontSize ?? "15px",
        fontWeight: current.fontWeight ?? 600,
        textTransform: "none",
        borderRadius: current.borderRadius ?? "20px",

        ...(current.variant === "contained" && {
          backgroundColor: current.bg,
          color: current.color,
          "&:hover": {
            backgroundColor: current.bg,
            opacity: 0.9,
          },
        }),

        ...(current.variant === "outlined" && {
          borderColor: current.border,
          color: current.color,
          "&:hover": {
            borderColor: current.border,
            backgroundColor: "rgba(0,0,0,.03)",
          },
        }),

        ...(current.variant === "text" && {
          color: current.color,
          "&:hover": {
            backgroundColor: "transparent",
            opacity: 0.75,
          },
        }),

        ...sx,
      }}
      {...props}
    >
      {
        loading ? (
          <CircularProgress size={18} color="inherit" />
        ) : (
          children
        )
      }
    </MuiButton >
  );
};

export default Button;