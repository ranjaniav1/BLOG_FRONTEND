import { useEffect, useState, useCallback, useRef } from "react";

export const useFetch = ({
  fetchFn,
  params = null,
  enabled = true,
  transform = (res) => res,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);
  
  // Store the latest params and fetchFn in refs
  const paramsRef = useRef(params);
  const fetchFnRef = useRef(fetchFn);
  const transformRef = useRef(transform);
  
  // Update refs when values change (but don't trigger effects)
  useEffect(() => {
    paramsRef.current = params;
    fetchFnRef.current = fetchFn;
    transformRef.current = transform;
  });

  const fetchData = useCallback(async () => {
    if (!enabled) return;
    
    setLoading(true);
    try {
      const res = await fetchFnRef.current(paramsRef.current);
      const finalData = transformRef.current(res);
      setData(finalData);
      setError(null);
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [enabled]); // Only depends on enabled!

  // Initial fetch and refetch when dependencies change
  useEffect(() => {
    if (!enabled) return;
    
    fetchData();
  }, [enabled, fetchData]); // Only depends on enabled and fetchData
  // fetchData only changes when enabled changes, so this is stable

  return { 
    data, 
    loading, 
    error, 
    refetch: () => fetchData(), 
    setData 
  };
};