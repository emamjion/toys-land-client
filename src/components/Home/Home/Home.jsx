import React from 'react';
import Banner from '../Banner/Banner';
import CarGallery from '../CarGallery/CarGallery';
import About from '../About/About';
import OurUser from '../Our_user/OurUser';
import ParentsReview from '../ParentsReview/ParentsReview';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

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

            {/* user section */}
            <section className='my-24'>
                <OurUser/>
            </section>

            {/* Shop by Category */}
            <section className='my-24'>
                <ShopByCategory/>
            </section>

            {/* Parents Review */}
            <section className='my-24'>
                <ParentsReview/>
            </section>
        </div>
    );
};

export default Home;