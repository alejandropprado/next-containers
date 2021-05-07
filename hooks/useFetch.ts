import { useCallback, useState, useEffect } from 'react';

import { jsonFetch } from 'utils/fetch';

type StateType = {
  loading: boolean;
  error: any;
  data: any;
};

export const useFetch = (url: string, options: RequestInit): StateType => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(undefined);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const json = await jsonFetch(url, options);
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    if (!url) return;

    fetchData();
  }, [url]);

  return { loading, error, data };
};
