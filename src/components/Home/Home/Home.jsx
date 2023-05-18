import React from 'react';
import Banner from '../Banner/Banner';
import CarGallery from '../CarGallery/CarGallery';

const Home = () => {
    return (
        <div className='my-24'>
            {/* Banner */}
            <section className='my-20'>
                <Banner/>
            </section>
            {/* Car Gallery */}
            <section className='my-24'>
                <CarGallery/>
            </section>
        </div>
    );
};

export default Home;