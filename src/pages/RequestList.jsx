import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';
import RequestItem from '../components/RequestList/RequestItem';

const RequestList = () => {
    const [requests, setRequests] = useState([]);
    const [filterVar, setFilterVar] = useState('sent');
    const [statusFilter, setStatusFilter] = useState('');
    useEffect(()=>{
        authApiClient.get(`borrow/requests/${filterVar}/?status=${statusFilter}`)
        .then(data=> {
            console.log(data.data);
            setRequests(data.data);
        })
        .catch(err => console.log(err))
    },[filterVar, statusFilter]);
    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-10'>Your Requests:</h1>
            <div className='bg-slate-100 p-4 rounded-md my-4 space-y-4'>
                <div className="flex justify-around">
                    <p 
                        onClick={()=>setFilterVar('received')}
                        className='p-1 px-2 rounded-full bg-rose-300 border border-rose-600 hover:bg-rose-500'>
                        Received
                    </p>
                    <p 
                        onClick={()=>setFilterVar('sent')}
                        className='p-1 px-2 rounded-2xl bg-rose-300 border border-rose-600 hover:bg-rose-500'>
                        Sent
                    </p>
                </div>
            </div>
            <div className='flex justify-end mb-2'>
                <p 
                    onClick={()=>setStatusFilter('all')}
                    className='bg-gray-300 rounded-4xl p-2 px-4 border-gray-600 border hover:bg-gray-200'>
                    See History
                </p>
            </div>
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