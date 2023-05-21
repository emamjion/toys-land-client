import React, { useEffect, useState } from 'react';
import Category from './Category';

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('sportscar');
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`https://toys-land-server.vercel.app/categories/${activeTab}`)
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [activeTab])

    const handleToyes = (tabName) => {
        setActiveTab(tabName);
    }
    
    return (
        <div>
            <h3 className='mx-auto text-center p-2 rounded font-semibold text-[#f39c12] bg-slate-600 w-[100px]'>Category</h3>
            <h1 className='text-3xl font-semibold mt-4 mb-3 text-center'>Shop By Category</h1>

            <div className='flex items-center justify-center mt-6 mb-12'>
                <div className="tabs">
                    <a 
                        onClick={() => handleToyes('sportscar')} 
                        className={`tab tab-lifted tab-active sportscar ${activeTab == 'sportscar' ? 'font-medium text-[#f39c12]' : ''}`}
                    >
                        Sports Car
                    </a> 
                    <a
                        onClick={() => handleToyes('truck')} 
                        className={`tab tab-lifted tab-active truck ${activeTab == 'truck' ? 'font-medium text-[#f39c12]' : ''}`}
                    >
                        Truck
                    </a> 
                    <a 
                        onClick={() => handleToyes('regularcar')}
                        className={`tab tab-lifted tab-active regularcar ${activeTab == 'regularcar' ? 'font-medium text-[#f39c12]' : ''}`}
                    >
                        Regular Car
                    </a>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    />)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;