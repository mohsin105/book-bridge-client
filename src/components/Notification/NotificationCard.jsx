import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const NotificationCard = ({notification}) => {
    const[frontEndLink, setFrontEndLink] = useState('/');
    
    const getFrontEndUrl = ()=>{
        // let frontendUrl = '/dashboard/notifications';
        const backEndLink = notification.link
        console.log((backEndLink));
        const type = notification.notification_type
        const idStartFrom =  backEndLink.lastIndexOf('/');
        if(type==='borrow_request' || type === 'request_rejected'){
            // console.log((notification.link));            
            // console.log(idStartFrom);
            // console.log(backEndLink[idStartFrom]);
            const requestId = backEndLink.slice(idStartFrom+1);
            // console.log(requestId);
            // frontendUrl = `/dashboard/requests/${requestId}`;
            setFrontEndLink(`/dashboard/requests/${requestId}`);
            // console.log(frontendUrl);
        }
        else if(type === 'request_accepted' || type === 'extension_request' || type === 'extension_accepted'){
            console.log(idStartFrom);
            const recordId = backEndLink.slice(idStartFrom+1);
            console.log(recordId);
            setFrontEndLink(`/dashboard/records/${recordId}`);
        }
    };
    useEffect(()=>{
        getFrontEndUrl();
    },[]);
    return (
        <div>
            <Link to={frontEndLink}
                                                
                className='p-2  rounded-md shadow-md'>
                    <p className='p-2 rounded-2xl bg-cyan-300 shadow-2xl w-fit'>
                        {notification.notification_type_display}
                    </p>
                    <p>{notification.message}</p>
                    <p>{dayjs(notification.created_at).format("DD MMM YYYY, hh:mm A")}</p>
            </Link>
        </div>
    );
};

export default NotificationCard;