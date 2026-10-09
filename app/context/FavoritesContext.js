"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { getFavorites } from "../service/favs";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const { user, authLoading } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setFavorites([]);
      setError(null);
      setLoading(false);
      return;
    }

    let cancelled = false;

    const fetchFavorites = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getFavorites();
        if (!cancelled) {
          setFavorites(res.data.favorites.articles || []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to fetch favorites");
          setFavorites([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchFavorites();

    return () => {
      cancelled = true;
    };
  }, [authLoading, user]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, loading, error, setFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
