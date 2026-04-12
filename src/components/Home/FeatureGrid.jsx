import React from 'react';
import FeatureCard from './FeatureCard';
import featureBg from '../../assets/bookbridge_feature_bg.jpg'

const FeatureGrid = () => {
    const featureData = [
        {
            'title':'Peer-to-Peer Book Sharing',
            'points':[
                'Borrow books directly from other users',
                'no centralized library required.',
                ''
            ],
        },
        {
            'title':'Smart Borrowing System',
            'points':[
                'Seamless request',
                'approval, and tracking',
                ' all in one place'
            ],
        },
        {
            'title':'Flexible Borrowing & Extensions',
            'points':[
                'Request extensions easily',
                'manage your reading time without hassle.',
                ''
            ],
        },
        {
            'title':'Trust & Rating System',
            'points':[
                'Build credibility through reviews',
                'ratings from other users',
                ''
            ],
        },
        {
            'title':'Real-Time Notifications',
            'points':[
                'Stay updated on requests, approvals',
                'due dates instantly',
                ''
            ],
        },
        {
            'title':'Premium Membership',
            'points':[
                'Unlock higher limits',
                'longer durations, and priority access.',
                ''
            ],
        },
    ];
    const gradientCombo = [
        "from-pink-100 to-blue-100",          // your original
        "from-blue-200 to-indigo-300",      // soft purple to indigo
        "from-cyan-200 to-teal-100",         // fresh green to teal
        "from-pink-200 to-orange-100",
    ];
    return (
        <div 
            style={{backgroundImage:`url(${featureBg})`, }}
            className='relative border rounded-sm p-4 py-8'>
            <div className='absolute bg-black/50 inset-0'></div>
            <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black'>
                {featureData.map((feature, indx)=>(
                    <FeatureCard key={indx} feature={feature} gradient={gradientCombo[indx%gradientCombo.length]}/>
                ))}
            </div>
        </div>
    );
};

export default FeatureGrid;