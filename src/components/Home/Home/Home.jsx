import React from 'react';
import Banner from '../Banner/Banner';
import CarGallery from '../CarGallery/CarGallery';
import About from '../About/About';

const Home = () => {
    return (
        <div className='my-24'>
            {/* Banner */}
            <section className='my-20'>
                <Banner/>
            </section>
            
            {/* About section */}
            <section className='my-24'>
                <About/>
            </section>

            {/* Car Gallery */}
            <section className='my-24'>
                <CarGallery/>
            </section>
        </div>
    );
};

export default Home;