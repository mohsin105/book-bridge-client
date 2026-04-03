import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';
import RequestItem from '../components/RequestList/RequestItem';

const RequestList = () => {
    const [requests, setRequests] = useState([]);
    useEffect(()=>{
        authApiClient.get('borrow/requests/sent')
        .then(data=> {
            console.log(data.data);
            setRequests(data.data);
        })
        .catch(err => console.log(err))
    },[]);
    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-10'>Your Requests:</h1>
            <div>
                <div className='grid grid-cols-4 gap-4 font-semibold bg-cyan-200 p-2 rounded-md shadow-2xl'>
                    <div>Book Name</div>
                    <div>Owner</div>
                    <div>Status</div>
                    <div>Request Day</div>
                </div>
                {requests && (
                    <div>
                        {requests.map(request =>(
                            <RequestItem key={request.id} request={request}/>
                        ))}
                    </div>
                )}
            </div>

        </section>
    );
};

export default RequestList;