import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.name.value;
        const photoUrl = form.photo.value;
        const sellerName = form.sellername.value;
        const email = user?.email;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;

        const newToy = { 
            toyName, photoUrl, sellerName, email, category, price, rating, quantity 
            };
        console.log(newToy);

        // send toy data
        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Toy Added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    }
    
    return (
        <div className='my-12 bg-orange-200 p-6'>
            <div className='text-center'>
                <h3 className='text-3xl font-semibold mt-4 mb-1'>Add a Toy</h3>
                <p>
                    Add a toy page is a page which you or user will can added a toy of their choice.
                </p>
            </div>
            <form onSubmit={handleAddToy} className='mx-12 my-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className=''>
                        <span className='font-medium mb-2'>Photo URL</span>
                        <input className='w-full px-4 py-2 rounded' type="text" name="photo" placeholder='Toy Photo URL' />
                    </div>
                    <div>
                        <span  className='font-medium mb-2'>Toy Name</span>
                        <input className='w-full px-4 py-2 rounded' type="text" name="name" placeholder='Toy Name' />
                    </div>
                    <div>
                        <span  className='font-medium mb-2'>Seller Name</span>
                        <input className='w-full px-4 py-2 rounded' defaultValue={user?.name} type="text" name="sellername" placeholder='Seller Name' />
                    </div>
                    <div>
                        <span  className='font-medium mb-2'>Seller Email</span>
                        <input className='w-full px-4 py-2 rounded' defaultValue={user?.email} type="email" name="email" placeholder='Seller Email' />
                    </div>
                    <div>
                        <span  className='font-medium mb-2'>Sub Category</span>
                        <input className='w-full px-4 py-2 rounded' type="text" name="category" placeholder='Sub Category' />
                    </div>
                    <div>
                        <span  className='font-medium mb-2'>Price</span>
                        <input className='w-full px-4 py-2 rounded' type="text" name="price" placeholder='Price' />
                    </div>
                    <div>
                        <span  className='font-medium mb-2'>Rating</span>
                        <input className='w-full px-4 py-2 rounded' type="text" name="rating" placeholder='Rating' />
                    </div>
                    <div>
                        <span  className='font-medium mb-2'>Available Quantity</span>
                        <input className='w-full px-4 py-2 rounded' type="text" name="quantity" placeholder='Available Quantity' />
                    </div>
                </div>
                <div className='mt-3'>
                    <input className='px-6 cursor-pointer py-2 bg-[#f39c12] text-white font-semibold rounded w-full' type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;