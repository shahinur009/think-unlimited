/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Autoplay, Pagination } from 'swiper/modules';

const ClientAboutUs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('client.json');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <section
            name=''
            className="bg-[#0E0E0E] text-white py-10">
                <div className="flex justify-center items-center gap-5">
                    <div className='text-center'>
                        <p className='font-extrabold text-8xl text-[#E26E23] uppercase -ml-10'><span className="text-white">what</span> clients</p>
                        <p className='font-extrabold text-8xl -mt-4 uppercase'>say <span className="text-[#E26E23] ">about</span> us </p>
                    </div>
                    <div>
                        <p className="text-[#E26E23] text-[150px] font-extrabold mt-5">?</p>
                    </div>
                </div>
                <div className="max-w-full flex justify-center items-center">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className="flex justify-center items-center">
                            {data.map(item => (
                                <SwiperSlide key={item.id}>
                                    <ClientCard item={item} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default ClientAboutUs;
