import { useEffect, useState } from "react"


export const useToken = (tokenName) =>{
    const [token,setToken] = useState('');

    useEffect(()=>{
        const data = localStorage.getItem(tokenName);
        setToken(data);
    },[tokenName]);
    console.log(token);
    return token;
}