"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      try {
        setUser(JSON.parse(decodeURIComponent(userCookie)));
      } catch (error) {
        console.error("Invalid user cookie:", error);
      }
    }
    setAuthLoading(false);
  }, []);


  return (
    <AuthContext.Provider value={{ user, setUser, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
