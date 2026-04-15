import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';
import RequestList from '../components/Dashboard/RequestList';
import { Link } from 'react-router';
import StatsCardSection from '../components/Dashboard/StatsCardSection';
import useAuthContext from '../hooks/useAuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const Dashboard = () => {
    const {user} = useAuthContext();
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [sentRequests, setSentRequests] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [lentBooks, setLentBooks] = useState([]);
    const [statCardData, setStatCardData] = useState(null);
    const [isStatCardLoading, setIsStatCardLoading] = useState(false);
    useEffect(()=>{
        setIsStatCardLoading(true);
        authApiClient.get('users/me/dashboard')
        .then(data =>{
            console.log(data);
            setStatCardData(data.data);
        })
        .catch(err => console.log(err))
        .finally(()=> setIsStatCardLoading(false))
        // console.log(response);
        
    },[]);
    useEffect(()=>{
        authApiClient.get('borrow/requests/received/')
        .then(data =>{
            // console.log(data.data);
            setReceivedRequests(data.data);
        })
        .catch(err => console.log(err))
    },[]);
    useEffect(()=>{
        authApiClient.get('borrow/requests/sent/')
        .then(data=>{
            // console.log(data.data);
            setSentRequests(data.data);
        })
    },[])
    useEffect(()=>{
        if(user){
            authApiClient.get(`borrow/records/?owner=${user.id}`)
            .then(data=>{
                // console.log(data.data);
                setLentBooks(data.data);
            })
        }
    },[user])
    useEffect(()=>{
        if(user){
            authApiClient.get(`borrow/records/?borrower=${user.id}`)
            .then(data=>{
                // console.log(data.data);
                setBorrowedBooks(data.data);
            })
        }
    },[user])
    return (
        <section>
            <h1 className='text-2xl font-semibold text-center my-4'>Your Dashboard</h1>
            <div className='my-4 px-4'>
                {!isStatCardLoading && statCardData? (
                    <StatsCardSection statCardData={statCardData}/>
                ):!isStatCardLoading && !statCardData? (
                    <div>Could Not Load Dashboard Stats</div>
                ):(
                    <LoadingSpinner/>
                )}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-md'>
                <div className="rounded-md p-2 bg-gray-100 shadow-md">
                    <h3 className='font-semibold text-lg my-4'>Received Requests</h3>
                    {receivedRequests && (
                        <RequestList objects={receivedRequests} role={'received'} type={'request'}/>
                    )}
                    <div className='flex justify-end my-2'>
                        <div>
                            <Link to={'/dashboard/requests'}>
                                <button className='p-1 px-2 rounded-2xl bg-gray-200 hover:bg-gray-300 shadow-2xl'>
                                    See Full List
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="rounded-md bg-gray-100 shadow-md p-2">
                    <h3 className='font-semibold text-lg my-4'>Sent Requests</h3>
                    {sentRequests && (
                        <RequestList objects={sentRequests} role={'sent'} type={'request'} />
                    )}
                    <div className='flex justify-end my-2'>
                        <div>
                            <Link to={'/dashboard/requests'}>
                                <button className='p-1 px-2 rounded-2xl bg-gray-200 hover:bg-gray-300 shadow-2xl'>
                                    See Full List
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-gray-100 shadow-md p-2">
                    <h3 className='font-semibold text-lg my-4'>Borrowed Books</h3>
                    {borrowedBooks && (
                        <RequestList objects={borrowedBooks} role={'received'} type={'record'} />
                    )}
                    <div className='flex justify-end my-2'>
                        <div>
                            <Link to={'/dashboard/records'}>
                                <button className='p-1 px-2 rounded-2xl bg-gray-200 hover:bg-gray-300 shadow-2xl'>
                                    See Full List
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-gray-100 shadow-md p-2">
                    <h3 className='font-semibold text-lg my-4'>Lent Books</h3>
                    {lentBooks && (
                        <RequestList objects={lentBooks} role={'sent'} type={'record'} />
                    )}
                    <div className='flex justify-end my-2'>
                        <div>
                            <Link to={'/dashboard/records'}>
                                <button className='p-1 px-2 rounded-2xl bg-gray-200 hover:bg-gray-300 shadow-2xl'>
                                    See Full List
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;