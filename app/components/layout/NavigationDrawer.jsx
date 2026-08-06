"use client";

import React from "react";
import { Box, List } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

import { tabs } from "@/app/data/seriesData";
import Text from "../shared/Text";
import { useThemeContext } from "@/app/context/ThemeContext";
import Icons from "../shared/Icons";

const NavigationDrawer = ({
  activeTab,
  setActiveTab,
  handleDrawerClose,
}) => {
  const { themeData } = useThemeContext();

  return (
    <Box
      role="presentation"
      className="relative w-72 min-h-screen p-6 flex flex-col shadow-md"
      sx={{
        backgroundColor: themeData?.background?.body,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Text
          type="header"
          component="h2"
          sx={{
            color: themeData?.text?.header,
          }}
        >
          Menu
        </Text>

        <Icons
          icon={<CloseIcon />}
          ariaLabel="Close drawer"
          onClick={handleDrawerClose}
        />
      </div>

      {/* Navigation */}
      <List className="flex flex-col gap-5 p-0">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              onClick={() => {
                setActiveTab(tab.href);
                handleDrawerClose?.();
              }}
              className="transition-opacity hover:opacity-70"
            >
              <Text
                type="nav"
                component="span"
                sx={{
                  color: isActive
                    ? themeData?.text?.header
                    : themeData?.text?.body,
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {tab.label}
              </Text>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default NavigationDrawer;