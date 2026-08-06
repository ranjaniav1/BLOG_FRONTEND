"use client";

import React from "react";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import { useThemeContext } from "@/app/context/ThemeContext";
import Text from "../Text";
import Icons from "../shared/Icons";
import { socialIcons } from "@/app/data/seriesData";

const Weather = () => {
  const { themeData } = useThemeContext();

  const getCurrentDate = () =>
    new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });



  return (
    <div
      style={{
        background: themeData?.background?.header,
        borderBottom: `1px solid ${themeData?.text?.border}`,
      }}
    >
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between">
        {/* Date */}
        <div className="flex items-center gap-2">
          <DateRangeOutlinedIcon
            sx={{
              fontSize: 17,
              color: themeData?.background?.button,
            }}
          />

          <Text
            component="span"
            sx={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: themeData?.background?.button,
            }}
          >
            {getCurrentDate()}
          </Text>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {socialIcons.map((item) => (

            <Icons
              key={item.href}
              icon={item.icon}
              href={item.href}
              ariaLabel={item.ariaLabel}
            />
          ))

          }
        </div>
      </div>
    </div>
  );
};

export default Weather;