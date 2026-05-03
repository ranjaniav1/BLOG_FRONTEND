"use client";
import { useEffect, useState, useCallback } from "react";

export const useFetch = ({
  fetchFn,
  params = null,
  enabled = true,
  transform = (res) => res, // optional data transform
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    try {
      const res = await fetchFn(params);
      const finalData = transform(res);
      setData(finalData);
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [fetchFn, params, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData, setData };
};