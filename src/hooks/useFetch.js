
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setData(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error, isLoaded };
};