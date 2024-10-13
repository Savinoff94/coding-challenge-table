import { useState, useEffect } from "react";
import { data as mockData } from "../data/mockData";

const useFetchData = (isError=false, delay = 2000) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null); 

                if(isError) {
                    throw new Error('Some error')
                }
       
                await new Promise((resolve) =>
                    setTimeout(() => {
            
                        setData(mockData);
            
                        resolve();
                    }, delay)
                );
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        };

        fetchData()
        
    }, [delay, isError]);
  
    return { data, loading, error };
};
  
export default useFetchData;