import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    useEffect(()=>{
        fetchNotifications();
    },[]);
    const fetchNotifications = async() =>{
        try {
            const response = await authApiClient.get('users/me/notifications');
            console.log(response.data);
            setNotifications(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-8'>Your Notifications</h1>
            <div className='bg-gray-100 rounded-md shadow-lg p-2 pt-8'>
                {notifications && (
                    <div className='space-y-4'>
                        {notifications.map(notification => (
                            <div 
                                key={notification.id}
                                className='bg-cyan-100'>

                                <a href={notification.link}
                                    
                                    className='p-2  rounded-md shadow-md'>
                                        <p className='p-2 rounded-2xl bg-cyan-300 shadow-2xl w-fit'>{notification.notification_type}</p>
                                        <p>{notification.message}</p>
                                        <p>{notification.created_at}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Notifications;