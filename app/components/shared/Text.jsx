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


  const variants = {
    heroLabel: {
      component: "p",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.24em",
      color: themeData?.text?.secondary,
    },

    sectionTitle: {
      component: "h3",
      fontFamily: "var(--font-serif)",
      fontSize: {
        xs: "2.3rem",
        sm: "2.8rem",
      },
      fontWeight: 100,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      color: themeData?.text?.primary,

    },
    heroTitle: {
      component: "h2",
      fontFamily: "var(--font-serif)",
      fontSize: {
        xs: "2.5rem",
        sm: "3.8rem",
      },
      fontWeight: 300,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      color: themeData?.text?.primary,

    },

    bodyLarge: {
      component: "p",
      fontFamily: "var(--font-sans)",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.8,
      color: themeData?.text?.secondary,
    },

    body: {
      component: "p",
      fontSize: "16px",
      lineHeight: 1.8,
      color: themeData?.text?.primary,
    },

    sectionEyebrow: {
      component: "p",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.24em",
      color: themeData?.text?.secondary,
    },

    cardTitle: {
      component: "h3",
      fontFamily: "var(--font-serif)",
      fontSize: "1.25rem",
      fontWeight: 100,
      lineHeight: 1.35,
      color: themeData?.text?.primary,
    },

    cardDescription: {
      component: "p",
      fontSize: "15px",
      lineHeight: 1.7,
      color: themeData?.text?.secondary,
    },

    caption: {
      component: "span",
      fontSize: "13px",
      fontWeight: 500,
      color: themeData?.text?.secondary,
    },
    nav: {
      component: "span",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0",
      color: themeData?.text?.header,
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
        color: preset.color,

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