import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import authApiClient from '../services/auth-api-client';

const RequestDetails = () => {
    const {requestId} = useParams();
    const [requestObj, setReqeustObj] = useState(null);
    console.log(requestId);
    useEffect(()=>{
        // authApiClient.get(`borrow/requests/${requestId}`)
        // .then(data=>{
        //     console.log(data.data);
        //     setReqeustObj(data.data);
        // })
        // .catch(err => console.log(err))
        fetchRequest();
    },[requestId]);

    const fetchRequest = async()=>{
        try {
            const response = await authApiClient.get(`borrow/requests/${requestId}`);
            const data = await response.data;
            setReqeustObj(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Request Details</h1>
            <div>
                {requestObj? (

                    <div>
                        <p>{requestObj.book_copy.book.title}</p>
                        <p>{requestObj.book_copy.owner.first_name}</p>
                        <p>{requestObj.status}</p>
                        <p>{requestObj.message}</p>
                        <p>{requestObj.created_at}</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                ) :  (
                    <div>
                        Loading....
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestDetails;