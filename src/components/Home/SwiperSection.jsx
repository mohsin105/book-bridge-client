import React, {  } from 'react';
// import Swiper from 'swiper'; DO NOT Use This
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';
import CarouselSlide from './CarouselSlide';

import dashboardSlide from '../../assets/bookBridge_dashboard.png';
import requestSlide from '../../assets/bookbridge_request_copy.jpg';
import bookSearchSlide from '../../assets/bookBridge_search.png';
import notificationSlide from '../../assets/bookbridge_notifcation.jpg';

const SwiperSection = () => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const slides=[
        {
            'title':'Discover Books Around You',
            'subtitle':'Find books by title, author, or category in seconds.',
            'img':bookSearchSlide
        },
        {
            'title':'Request with One Click',
            'subtitle':'Borrow directly from other users effortlessly.',
            'img':requestSlide
        },
        {
            'title':'Stay in Control',
            'subtitle':'Track due dates, returns, and extensions easily.',
            'img':dashboardSlide
        },
        {
            'title':'Never Miss Updates',
            'subtitle':'Get notified instantly when actions happen',
            'img':notificationSlide
        },
    ];
    return (
        <div className='h-[70vh]'>
            <Swiper
                modules={[Autoplay,Navigation,Pagination, ]}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                // thumbs={{
                //     swiper:thumbsSwiper && !thumbsSwiper.destroyed? thumbsSwiper: null
                // }}
                className='mySwiper h-full'

            >
                {slides.map((slide, indx) =>(

                    <SwiperSlide key={indx} className='h-full bg-amber-100'>
                        <CarouselSlide slide={slide}>

                        </CarouselSlide>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    );
};

export default SwiperSection;