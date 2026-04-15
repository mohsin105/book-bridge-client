import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchCategories = () =>{
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        apiClient.get('categories/')
        .then(data =>{
            // console.log(data.data);
            setCategories(data.data);
        })
        .catch(err => console.log(err))
    },[]);

    return categories;
};

export default useFetchCategories;