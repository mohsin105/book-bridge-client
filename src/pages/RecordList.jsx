import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';
import RecordCard from '../components/RecordList/RecordCard';
import { Link } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const RecordList = () => {
    const [records, setRecords] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const {user} = useAuthContext();
    const [owner, setOwner] = useState('');
    const [borrower, setBorrower] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        fetchRecords();
    },[statusFilter, borrower, owner]);
    const fetchRecords = async()=>{
        try {
            const response = await authApiClient.get(`borrow/records/?borrower=${borrower}&owner=${owner}&status=${statusFilter}`);
            console.log(response.data);
            setRecords(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className='w-11/12 mx-auto p-4'>
            <h1 className='text-2xl text-center font-semibold my-8'>Your Records</h1>
            <div className='bg-slate-100 p-4 rounded-md my-4 space-y-4'>
                <div className='flex justify-around'>
                    <p 
                        onClick={()=>{
                            setBorrower(user.id);
                            setOwner('');
                        }}
                        className='p-1 px-2 rounded-full bg-rose-300 border border-rose-600 hover:bg-rose-500'>
                        Borrowed
                    </p>
                    <p 
                        onClick={()=>{
                            setOwner(user.id);
                            setBorrower('');
                        }}
                        className='p-1 px-2 rounded-2xl bg-rose-300 border border-rose-600 hover:bg-rose-500'>
                        Lent
                    </p>
                </div>
                <div className='flex justify-around'>
                    <p 
                        onClick={()=>setStatusFilter('active')}
                        className='p-1 px-2 rounded-full bg-rose-300 border border-rose-600 hover:bg-rose-500'>
                            Active
                    </p>
                    <p 
                        className='p-1 px-2 rounded-full bg-rose-300 border border-rose-600 hover:bg-rose-500'>
                        OverDue
                    </p>
                    <p 
                        onClick={()=>setStatusFilter('all')}
                        className='p-1 px-2 rounded-full bg-rose-300 border border-rose-600 hover:bg-rose-500'>
                            History
                    </p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-5 gap-4 p-2 bg-cyan-200 rounded-md text-lg font-semibold'>
                    <div>Book Name</div>
                    <div>Owner</div>
                    <div>Borrower</div>
                    <div>Status</div>
                    <div>Due Date</div>
                </div>
                <div>
                    {!isLoading && records.length>0? (
                        <div className='my-2'>
                            {records.map(record => (
                                <Link to={`/dashboard/records/${record.id}`} key={record.id}>
                                    <div className='my-2'>
                                        <RecordCard  record={record}/>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        ):!isLoading && records.length===0? (
                            <div className='text-xl text-center font-semibold my-4'>
                                No Records Yet
                            </div>
                        ):!isLoading && !records?(
                            <div className='text-xl text-center font-semibold my-4'>
                                Could Not Load Records
                            </div>
                        ):(
                            <LoadingSpinner/>
                        )
                    }
                </div>
            </div>

        </section>
    );
};

export default RecordList;