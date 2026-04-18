import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const useAuth=()=>{
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const getToken = ()=>{
        const token = localStorage.getItem('authTokens');
        return token? JSON.parse(token) : null;
    };
    const [authToken, setAuthToken] = useState(getToken());

    const handleApiError = (error, defaultMessage = "Something went wrong, Try Again") =>{
        console.log(error);
        if(error.response && error.response.data){
            const errorMessage = Object.values(error.response.data).flat().join("\n");
            setErrorMessage(errorMessage);
        }
        else{
            setErrorMessage(defaultMessage);
        }
    };

    const getCurrentUser = async() =>{
        try {
            const response = await authApiClient.get('auth/users/me');
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.log(error);
            handleApiError(error);
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
        setErrorMessage("");
        try {
            const response = await apiClient.post('auth/users/', userData);
            console.log(response);
            return {'success':true, 'message':'Registration Successfull!!!. An email has been sent to you with activation-link!'}
        } catch (error) {
            console.log(error.response.data);
            handleApiError(error);
            return {'success':false}
        }
    };

    const activateAccount = async(userData)=>{
        setErrorMessage("");
        try {
            const response = await apiClient.post(`auth/users/activation/`, userData);
            console.log(response);
            return{'success': true, 'message':'Account activated Successfully!!!'};
        } catch (error) {
            console.log(error);
        }
    }

    const  loginUser = async(userData) =>{
        setErrorMessage("");
        try {
            const response = await apiClient.post('auth/jwt/create', userData);
            console.log(response);
            setAuthToken(response.data);
            localStorage.setItem('authTokens', JSON.stringify(response.data));
            await getCurrentUser();
            return {'success':true, 'message':'Login Successful'}
        } catch (error) {
            // setErrorMessage(error.response.data?.detail);
            handleApiError(error);
            return{'success':false};
        }
    };

    const logOutUser = () =>{
        localStorage.removeItem('authTokens');
        setUser(null);
        setAuthToken(null);
    };

    const updateUserProfile = () =>{
        setErrorMessage("");

    };

    // set_password -> Logged In User
    const passwordChange = async(userData) =>{
        setErrorMessage("");
        try {
            const response = authApiClient.post('auth/users/set_password', userData);
            console.log(response);
            return {'success':true, 'message':"Password Changed Successfully!!!"}
        } catch (error) {
            console.log(error);
            handleApiError(error);
        }
    };

    // Forgot Password -> Logged Out User
    const resetPassword = async(userData) =>{
        setErrorMessage("");
        try {
            const response = await apiClient.post('auth/users/reset_password/', userData);
            console.log(response);
            return {'success':true, 'message':'An email has been sent with verification link'};
        } catch (error) {
            console.log(error);
            handleApiError(error);
        }
    };

    const resetPasswordConfirm = async(userData)=>{
        setErrorMessage("");
        try {
            const response = await apiClient.post('auth/users/reset_password_confirm/', userData);
            console.log(response);
            // Check response before returning success message. Response could be unsuccessful. 
            return {'success':true, 'message':'Password Reset Successfully!!!'}
        } catch (error) {
            console.log(error);
            handleApiError(error);
        }
    };

    

    return {
        user,
        registerUser, 
        loginUser, 
        logOutUser, 
        updateUserProfile, 
        passwordChange, 
        activateAccount,
        resetPassword,
        resetPasswordConfirm,
        errorMessage
     };
};

export default useAuth;