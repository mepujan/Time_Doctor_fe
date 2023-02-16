import {useState,useEffect} from 'react';
import axios from '../api/axios';

export const useGetRoles = () =>{
    const [roles,setRoles] = useState(null);

    useEffect(()=>{
        (async () =>{
            const response = await axios.get("/api/roles");
            setRoles(response.data);
        })();
    },[]);
    return roles;
}
