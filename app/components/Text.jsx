"use client";

import { Typography } from "@mui/material";
import { useThemeContext } from "@/app/context/ThemeContext";

const Text = ({
  children,

  // Typography preset
  type = "body",

  // Override any preset
  variant,
  component,
  size,
  weight,
  color = "primary",
  align = "left",
  transform,
  spacing,
  lineHeight,
  italic = false,
  underline = false,

  // Spacing
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  pt,
  pb,

  maxWidth,

  sx = {},
  ...props
}) => {
  const { themeData } = useThemeContext();

  const colors = {
    primary: themeData?.text?.primary,
    secondary: themeData?.text?.secondary,
    button: themeData?.text?.button,
    accent: themeData?.background?.button,
    success: "#10B981",
    danger: "#EF4444",
    white: "#FFFFFF",
    black: "#111827",
  };

  const variants = {
    heroLabel: {
      component: "p",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.24em",
      color: colors.secondary,
    },

    heroTitle: {
      component: "h1",
      fontFamily: "var(--font-heading)",
      fontSize: {
        xs: "2.75rem",
        sm: "3.75rem",
        lg: "4.25rem",
      },
      fontWeight: 500,
      lineHeight: 1.06,
      letterSpacing: "-0.03em",
      color: colors.primary,
    },

    bodyLarge: {
      component: "p",
      fontSize: "17px",
      lineHeight: 1.85,
      color: colors.secondary,
    },

    body: {
      component: "p",
      fontSize: "16px",
      lineHeight: 1.8,
      color: colors.primary,
    },

    sectionEyebrow: {
      component: "p",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.24em",
      color: colors.secondary,
    },

    sectionHeading: {
      component: "h2",
      fontFamily: "var(--font-heading)",
      fontSize: {
        xs: "2rem",
        sm: "2.5rem",
      },
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: colors.primary,
    },

    cardTitle: {
      component: "h3",
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.35,
      color: colors.primary,
    },

    cardDescription: {
      component: "p",
      fontSize: "15px",
      lineHeight: 1.7,
      color: colors.secondary,
    },

    caption: {
      component: "span",
      fontSize: "13px",
      fontWeight: 500,
      color: colors.secondary,
    },
  };

  const preset = variants[type] || variants.body;

  return (
    <Typography
      component={component || preset.component}
      variant={variant}
      sx={{
        fontFamily: preset.fontFamily,
        fontSize: size || preset.fontSize,
        fontWeight: weight || preset.fontWeight,
        color: color
          ? (colors[color] || color)
          : preset.color,
        textAlign: align,
        textTransform: transform ?? preset.textTransform,
        letterSpacing: spacing ?? preset.letterSpacing,
        lineHeight: lineHeight || preset.lineHeight,

        fontStyle: italic ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",

        maxWidth,

        mt,
        mb,
        ml,
        mr,
        mx,
        my,
        pt,
        pb,

        "& mark": {
          background: "transparent",
          color: themeData?.background?.button,
          fontWeight: 600,
        },

        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Text;