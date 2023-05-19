import React from 'react';
import aboutImg from '../../../assets/images/about/about-img.png'

const About = () => {
    return (
        <div className='flex items-center'>
            <div>
                <img src={aboutImg} />
            </div>
            <div>
                <h4 className='mx-auto text-center p-2 rounded font-semibold text-[#f39c12] bg-slate-600 w-[100px]'>About Us</h4>
                <h2 className='text-3xl font-semibold mt-4 mb-3'>Toy Land</h2>
                <p>
                    A Toy Land marketplace is an online platform or physical store <br /> where individuals can buy, sell, and trade toy cars. These marketplaces <br /> cater to toy car enthusiasts, collectors, and hobbyists who are interested <br /> in purchasing or exchanging toy cars of various types, brands, and models.
                </p>
                <button className='px-6 py-2 bg-[#f39c12] mt-3 text-white font-semibold rounded'>About More</button>
            </div>
        </div>
    );
};

export default About;