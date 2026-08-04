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
  const { themeData, config } = useThemeContext();

  const presets = {
    primary: {
      variant: "contained",
      bg: themeData?.background?.button,
      color: themeData?.text?.button,
      border: themeData?.background?.button,
    },

    secondary: {
      variant: "outlined",
      bg: "transparent",
      color: themeData?.text?.primary,
      border: themeData?.background?.button,
    },

    ghost: {
      variant: "text",
      bg: "transparent",
      color: themeData?.text?.primary,
    },

    success: {
      variant: "contained",
      bg: "#10B981",
      color: "#fff",
      border: "#10B981",
    },

    danger: {
      variant: "contained",
      bg: "#EF4444",
      color: "#fff",
      border: "#EF4444",
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
        px: 4,
        py: 1.5,
        fontSize: "15px",
        fontWeight: 600,
        textTransform: "none",
        borderRadius: "20px",

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
      {loading ? (
        <CircularProgress size={18} color="inherit" />
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;