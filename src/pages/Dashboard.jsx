import React from 'react';

const Dashboard = () => {
    return (
        <section>
            <h1 className='text-2xl font-semibold text-center'>Your Dashboard</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-md'>
                <div className="rounded-md p-2 bg-gray-100 shadow-md">
                    <h3 className='font-semibold text-lg my-4'>Received Requests</h3>
                </div>
                <div className="rounded-md bg-gray-100 shadow-md p-2">
                    <h3 className='font-semibold text-lg my-4'>Sent Requests</h3>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;