import React from 'react';
import bannerImg from '../../../assets/images/banner/banner-img.png';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2'>
            <div className=''>
                <h1 className='my-5 text-3xl font-medium text-[#2c3e50]'>We Are Keeping Premium <br /> Quality Toy Car</h1>
                <p className='mb-3'>
                    A toy car is used for the entertainment of kids. It is the miniature depiction of an automobile and its working principle is simple. The car is pulled back so to wind the internal coil spring.
                </p>
                <button className='px-6 py-2 bg-[#f39c12] mt-2 text-white font-semibold rounded'>Visit Our Land</button>
            </div>
            
            <div>
                <img className='rounded-lg' src={bannerImg} />
            </div>
        </div>
    );
};

export default Banner;