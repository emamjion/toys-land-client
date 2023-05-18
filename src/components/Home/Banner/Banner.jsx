import React from 'react';
import bannerImg from '../../../assets/images/banner/banner.png';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4'>
            <div>
                <img className='rounded-lg' src={bannerImg} />
            </div>
            <div>
                <h1 className='text-center my-3 text-2xl font-medium text-[#2c3e50]'>Toys Land</h1>
                <p className=''>
                    A toy car is used for the entertainment of kids. It is the miniature depiction of an automobile and its working principle is simple. The car is pulled back so to wind the internal coil spring.
                </p>
                <button className='px-6 py-2 bg-[#f39c12] mt-2 text-white font-semibold rounded'>Visit Our Land</button>
            </div>
        </div>
    );
};

export default Banner;