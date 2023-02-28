import {useState,useEffect} from 'react';
import axios from '../api/axios';
import { useToken } from './useToken';

export const useResources = (resourceURL) =>{
    const [resource,setResource] = useState(null);
    
    const token = useToken("userToken");
    useEffect(()=>{
        (async () =>{
            const response = await axios.get(resourceURL,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setResource(response.data);
        })();
    },[resourceURL,token]);
    return resource;
}
