import {useState,useEffect} from 'react';
import axios from '../api/axios';

export const useResources = (resourceURL) =>{
    const [resource,setResource] = useState(null);
    useEffect(()=>{
        (async () =>{
            const response = await axios.get(resourceURL);
            setResource(response.data);
        })();
    },[resourceURL]);
    return resource;
}
