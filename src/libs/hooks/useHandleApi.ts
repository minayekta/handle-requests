import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Posts } from '../types/types';


export type ApiResponse = Posts[];
  
  interface ApiError {
    message: string;
  }
  
const useHandleApi = (apiEndpoint:string) => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any | null>(null);
    const [fetchTrigger, setFetchTrigger] = useState<number>(0);
  

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiEndpoint);
      setData(response.data);
    } catch (error ) {
      console.log(error)
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [fetchTrigger]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetchData = () => {
    setFetchTrigger(fetchTrigger + 1);
  };

  return { data, loading, error, refetchData };
};

export default useHandleApi;