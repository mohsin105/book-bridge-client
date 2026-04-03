import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';
import RequestList from '../components/Dashboard/RequestList';

const Dashboard = () => {
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [sentRequests, setSentRequests] = useState([]);
    useEffect(()=>{
        authApiClient.get('borrow/requests/received/')
        .then(data =>{
            console.log(data.data);
            setReceivedRequests(data.data);
        })
        .catch(err => console.log(err))
    },[]);
    useEffect(()=>{
        authApiClient.get('borrow/requests/sent/')
        .then(data=>{
            console.log(data.data);
            setSentRequests(data.data);
        })
    },[])
    return (
        <section>
            <h1 className='text-2xl font-semibold text-center'>Your Dashboard</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-md'>
                <div className="rounded-md p-2 bg-gray-100 shadow-md">
                    <h3 className='font-semibold text-lg my-4'>Received Requests</h3>
                    {receivedRequests && (
                        <RequestList requests={receivedRequests} type={'received'}/>
                    )}
                </div>
                <div className="rounded-md bg-gray-100 shadow-md p-2">
                    <h3 className='font-semibold text-lg my-4'>Sent Requests</h3>
                    {sentRequests && (
                        <RequestList requests={sentRequests} type={'sent'} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;