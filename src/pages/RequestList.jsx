import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';
import RequestItem from '../components/RequestList/RequestItem';
import LoadingSpinner from '../components/LoadingSpinner';

const RequestList = () => {
    const [requests, setRequests] = useState([]);
    const [filterVar, setFilterVar] = useState('sent');
    const [statusFilter, setStatusFilter] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        authApiClient.get(`borrow/requests/${filterVar}/?status=${statusFilter}&?ordering=-created_at`)
        .then(data=> {
            console.log(data.data);
            setRequests(data.data);
            console.log(data.data.length);
            
        })
        .catch(err => console.log(err))
        .finally(()=> setIsLoading(false));
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
                {!isLoading && requests.length>0? (
                    <div>
                        {requests.map(request =>(
                            <RequestItem key={request.id} request={request}/>
                        ))}
                    </div>
                    ):!isLoading && !requests?(
                        <div>
                            Could Not Load Requests
                        </div>
                    ):!isLoading && requests.length===0?(
                        <div className='text-xl font-semibold my-4 text-center'>
                            No Requests Yet
                        </div>
                    ):(
                        <LoadingSpinner/>
                    )
                }
            </div>

        </section>
    );
};

export default RequestList;