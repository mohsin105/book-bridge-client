import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const useAuth=()=>{
    const [user, setUser] = useState(null);

    const getToken = ()=>{
        const token = localStorage.getItem('authTokens');
        return token? JSON.parse(token) : null;
    };
    const [authToken, setAuthToken] = useState(getToken());

    const getCurrentUser = async() =>{
        try {
            const response = await authApiClient.get('auth/users/me');
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        // const fetchCurrentUser = async()=>{
        //     await getCurrentUser();
        // };
        // if(authToken){
        //     fetchCurrentUser();
        // }
        if(authToken) getCurrentUser();
        else setUser(false);
    },[authToken]);

    const registerUser = async(userData)=>{
        try {
            const response = await apiClient.post('auth/users/', userData);
            console.log(response);
            return {'success':true, 'message':'Registration Successfull!!!'}
        } catch (error) {
            console.log(error);
        }
    };

    const  loginUser = async(userData) =>{
        try {
            const response = await apiClient.post('auth/jwt/create', userData);
            console.log(response);
            setAuthToken(response.data);
            localStorage.setItem('authTokens', JSON.stringify(response.data));
            await getCurrentUser();
            return {'success':true, 'message':'Login Successful'}
        } catch (error) {
            console.log(error);
        }
    };

    const logOutUser = () =>{
        localStorage.removeItem('authTokens');
        setUser(null);
        setAuthToken(null);
    };

    const updateUserProfile = () =>{

    };

    const passwordChange = () =>{

    };

    return {user,registerUser, loginUser, logOutUser, updateUserProfile, passwordChange };
};

export default useAuth;