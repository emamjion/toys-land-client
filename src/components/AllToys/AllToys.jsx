import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys = useLoaderData();
    
    return (
        <div className=' my-12'>
            <div className='text-center'>
                <h3 className='text-3xl font-semibold mt-4 mb-1'>All Toys : {allToys.length}</h3>
                <p>
                    All Toys page is a page which user will can all Toys that he added.
                </p>
            </div>
        </div>
    );
};

export default AllToys;