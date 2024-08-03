import React, { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const navigate = useNavigate()
    const [info,setInfo] = useState({})
    const url = "http://localhost:4000"
    const cache  = useRef({})
    const fetchInfo = async (id) => {
        if (cache.current[id]) {
            // If the data for the given ID is already in the cache, use it
            console.log("inside cache")
            const record = cache.current[id];
            setInfo(record);
            toast.success("News Found (from cache)");
            navigate('/news');
        } else {
            // If the data is not in the cache, fetch it from the API
            try {
                const response = await axios.post(url + "/fetch", { value: id });
                if (response.data.success) {
                    console.log("outside cache")
                    const record = response.data.data[0];
                    setInfo(record);
                    cache.current[id] = record;  // Store the result in the cache
                    toast.success("News Found");
                    navigate('/news');
                } else {
                    navigate('/');
                    toast.error(response.data.message);
                    
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error("An error occurred while fetching the data.");
                navigate('/');
            }
        }
    };
    
    useEffect(() => {
        console.log("Updated info:", info);
    }, [info]);
    
    const contextValue = {
        fetchInfo,
        info,
    };
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}    

export default StoreContextProvider;