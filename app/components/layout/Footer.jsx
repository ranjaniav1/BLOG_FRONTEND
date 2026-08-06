"use client";

import Link from "next/link";
import { useThemeContext } from "@/app/context/ThemeContext";
import Text from "../shared/Text";
import Icons from "../shared/Icons";
import { sections, socialIcons, tabs } from "@/app/data/seriesData";



export default function Footer() {
  const { themeData } = useThemeContext();

  return (
    <footer
      style={{
        background: themeData?.background?.body,
        borderTop: `1px solid ${themeData?.text?.border}`,
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Text type="cardTitle">
                <span style={{ color: themeData?.text?.primary }}>Still</span>{" "}
                <span style={{ color: themeData?.background?.button }}>Writing</span>
              </Text>
            </Link>

            <Text
              type="nav"
              component={"div"}
              mt={3}
              sx={{
                maxWidth: 340,
                color: themeData?.text?.secondary,
              }}
            >
              A quiet place for life lessons, honest reflections and everything I'm
              still learning. Written by Ranjani Varsani.
            </Text>

            <div className="mt-6 flex items-center gap-1">
              {socialIcons.map((item) => (
                <Icons
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  ariaLabel={item.ariaLabel}
                />
              ))}
            </div>
          </div>

          {/* Read */}
          <div>
            <Text type="heroLabel" mb={3}>
              Read
            </Text>

            <div className="flex flex-col gap-3">
              {tabs
                .filter((item) => item.label !== "Categories")
                .map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Text
                      type="caption"
                      sx={{
                        "&:hover": {
                          color: themeData.background.button,
                        },
                      }}
                    >
                      {item.label}
                    </Text>
                  </Link>
                ))}
            </div>
          </div>

          {/* Topics */}
          <div>
            <Text type="heroLabel" mb={3}>
              Topics
            </Text>

            <div className="flex flex-col gap-3">
              {sections.map((item) => (
                <Link
                  key={item.slug}
                  href={`/categories/${item.slug}`}
                >
                  <Text
                    type="caption"
                    sx={{
                      "&:hover": {
                        color: themeData.background.button,
                      },
                    }}
                  >
                    {item.eyebrow
                      .toLowerCase()
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-20 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between"
          style={{
            borderColor: themeData?.text?.border,
          }}
        >
          <Text
            type="caption"
            sx={{
              color: themeData?.text?.secondary,
            }}
          >
            © {new Date().getFullYear()} StillWriting. Crafted by
            Ranjani Varsani.
          </Text>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy">
              <Text
                type="caption"
                component="span"
                sx={{
                  color: themeData?.text?.secondary,
                  "&:hover": {
                    color: themeData?.background?.button,
                  },
                }}
              >
                Privacy
              </Text>
            </Link>

            <Link href="/terms-and-conditions">
              <Text
                type="caption"
                component="span"
                sx={{
                  color: themeData?.text?.secondary,
                  "&:hover": {
                    color: themeData?.background?.button,
                  },
                }}
              >
                Terms
              </Text>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}