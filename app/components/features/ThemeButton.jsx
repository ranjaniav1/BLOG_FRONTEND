"use client";

import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Box } from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useThemeContext } from "@/app/context/ThemeContext";
import Icons from "../shared/Icons";

const ThemeButton = () => {
  const { setTheme, themeData, themes, currentThemeName } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (themeKey) => {
    setAnchorEl(null);
    if (themeKey) {
      setTheme(themeKey); // Update theme globally
    }
  };

  if (!themes || themes.length === 0) {
    return <div>No themes available</div>;
  }

  return (
    <>
      {/* Theme Switch Button */}
      <Icons
        onClick={handleClick}
        icon={<LightModeOutlinedIcon />}
      />

      {/* Animated Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        keepMounted
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 220,
            p: 1,
            borderRadius: "16px",
            backgroundColor: themeData?.background?.navigation,
            border: `1px solid ${themeData?.text?.border}`,
            boxShadow: "0 12px 40px rgba(0,0,0,.08)",

            "& .MuiMenuItem-root": {
              borderRadius: "10px",
              color: themeData?.text?.primary,
              py: 1,
              px: 1.5,
              transition: "all .2s ease",

              "&:hover": {
                backgroundColor: themeData?.background?.header,
              },
            },
          },
        }}
      >
        {themes.map((theme) => {
          const isSelected = theme.name === currentThemeName;

          return (
            <MenuItem
              key={theme.name}
              onClick={() => handleClose(theme.name)}
              sx={{
                backgroundColor: isSelected
                  ? themeData?.background?.button
                  : "transparent",

                color: isSelected
                  ? themeData?.text?.button
                  : themeData?.text?.primary,

                "&:hover": {
                  backgroundColor: isSelected
                    ? themeData?.background?.button
                    : themeData?.background?.header,
                },
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  mr: 1.5,
                  border: `1px solid ${themeData?.text?.border}`,
                  background: theme.background?.button,
                }}
              />

              {theme.name.replace("web-", "").replace("-", " ")}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ThemeButton;
