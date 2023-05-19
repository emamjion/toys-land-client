import React from 'react';
import user1 from '../../../assets/images/user/user-1.png';
import user2 from '../../../assets/images/user/user-2.png';
import user3 from '../../../assets/images/user/user-3.png';

const OurUser = () => {
    return (
        <div>
            <div className='text-center'>
            <h3 className='mx-auto text-center p-2 rounded font-semibold text-[#f39c12] bg-slate-600 w-[100px]'>User</h3>
            <h1 className='text-3xl font-semibold mt-4 mb-3'>Our User</h1>
            <p>
                Children are the primary users of toys. Toys play a crucial role in their development and provide        opportunities for imaginative play, <br /> social interaction, and learning. Toys designed for children often focus on age-appropriate features, such as vibrant colors, <br /> interactive elements, and educational aspects.
            </p>
            </div>
            <div className='flex items-center justify-center mt-6 gap-6'>
                <div className='h-96'>
                    <img className='border-4 rounded-lg' src={user1} />
                    <h2 className='text-center mt-2 text-lg font-semibold'>Jovan Halim</h2>
                    <p className='text-center'>New York</p>
                </div>
                <div className='h-96'>
                    <img className='border-4 rounded-lg' src={user2} />
                    <h2 className='text-center mt-2 text-lg font-semibold'>Rahima Khan</h2>
                    <p className='text-center'>California</p>
                </div>
                <div className='h-96'>
                    <img className='border-4 rounded-lg' src={user3} />
                    <h2 className='text-center mt-2 text-lg font-semibold'>Komol Alom</h2>
                    <p className='text-center'>Newziland</p>
                </div>
            </div>
        </div>
    );
};

export default OurUser;