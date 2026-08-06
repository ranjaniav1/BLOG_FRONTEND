"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  IconButton,
  Drawer,
  Avatar,
  Typography,
} from "@mui/material";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";

import { useRouter } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
import LoginDialog from "@/app/Models/Login";
import NavigationDrawer from "./NavigationDrawer";
import SearchDialog from "../features/SearchDialog";
import { useThemeContext } from "@/app/context/ThemeContext";
import { useAuth } from "@/app/context/AuthContext";
import Loading from "@/app/layout/loading";
import { tabs } from "@/app/data/seriesData";
import Text from "../Text";
import ThemeButton from "../features/ThemeButton";
import Button from "../Button";
import Icons from "../shared/Icons";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  const { user } = useAuth();
  const router = useRouter();
  const { themeData, config, settings } = useThemeContext();



  const handleSearchOpen = () => {
    setIsDialogOpen(true);
    setIsDrawerOpen(false); // Close the drawer when opening search
  };
  const handleSearchClose = () => setIsDialogOpen(false);
  const handleLoginOpen = () => setIsLoginDialogOpen(true);
  const handleLoginClose = () => setIsLoginDialogOpen(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleNavigate = (link) => {
    setLoading(true);
    setActiveTab(link);
    router.push(link);
  };

  useEffect(() => {
    setLoading(false); // hide loading once mounted on new route
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        background: themeData?.background?.navigation,
        borderColor: themeData?.text?.border,
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Text type="cardTitle">
            <span style={{ color: themeData?.text?.primary }}>
              Still
            </span>
            <span style={{ color: themeData?.background?.button }}>
              Writing
            </span>
          </Text>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              onClick={() => setActiveTab(tab.href)}
              className="transition-opacity duration-200 hover:opacity-70"
            >
              <Text
                type="nav"
                component="span"
                sx={{
                  color:
                    activeTab === tab.href
                      ? themeData?.text?.header
                      : themeData?.background?.button
                }}
              >
                {tab.label}
              </Text>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">

          <Button
            type="secondary"
            onClick={handleSearchOpen}
            startIcon={<SearchIcon />}

          >
            <>
              Search
              <kbd
                style={{
                  marginLeft: 12,
                  padding: "2px 8px",
                  borderRadius: 6,
                  background: themeData?.background?.card,
                  fontSize: "11px",
                }}
              >
                ⌘K
              </kbd>
            </>
          </Button>

          <ThemeButton />


        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <Icons
            icon={<SearchIcon />}
            onClick={handleSearchOpen}
            ariaLabel="Search" />
          <ThemeButton />
          <Icons
            icon={<MenuIcon />}
            onClick={toggleDrawer(true)}
            ariaLabel="Menu" />
        </div>

      </div>

      <SearchDialog
        open={isDialogOpen}
        onClose={handleSearchClose}
      />

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <NavigationDrawer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleDrawerClose={toggleDrawer(false)}
        />
      </Drawer>
    </header>
  );
};

export default Navigation;
