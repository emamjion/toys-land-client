import React from 'react';
import car1 from '../../../assets/images/car_gallery/car1.png';
import car2 from '../../../assets/images/car_gallery/car2.png';
import car3 from '../../../assets/images/car_gallery/car3.png';
import car4 from '../../../assets/images/car_gallery/car4.png';
import car6 from '../../../assets/images/car_gallery/car6.png';
import car7 from '../../../assets/images/car_gallery/car7.png';

const CarGallery = () => {
    return (
        <div>
            <h4 className='mx-auto text-center p-2 rounded font-semibold text-[#f39c12] bg-slate-600 w-[100px]'>Gallery</h4>
            <h1 className='text-center font-medium text-2xl mb-4 mt-3'>Car Gallery</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <img className='rounded-lg border-4 border-[#f39c12] w-[100%] h-[100%]' src={car1} />
                <img className='rounded-lg border-4 border-[#f39c12] w-[100%] h-[100%]' src={car2} />
                <img className='rounded-lg border-4 border-[#f39c12] w-[100%] h-[100%]' src={car3} />
                <img className='rounded-lg border-4 border-[#f39c12] w-[100%] h-[100%]' src={car4} />
                <img className='rounded-lg border-4 border-[#f39c12] w-[100%] h-[100%]' src={car6} />
                <img className='rounded-lg border-4 border-[#f39c12] w-[100%] h-[100%]' src={car7} />
            </div>
        </div>
    );
};

export default CarGallery;