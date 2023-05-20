import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { registerUser, updateUser } = useContext(AuthContext);
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        registerUser(email, password)
        .then(result => {
            const registeredUser = result.user;
            console.log(registeredUser);
            setSuccess('User has been created!!');
            setError('');

            updateUser(result.user, name, photo);

            form.reset();
        })
        .catch(error => {
            setError(error.message);
            setSuccess('');
        })
    }
    
    
    return (
        <div className='my-24 bg-orange-200 text-center p-24'>
            <form onSubmit={handleRegister} className='shadow-xl bg-[#fff] w-[600px] mx-auto rounded-lg'>
                <h2 className='text-2xl font-medium py-6'>Register</h2>
                <div className='my-2'>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="text" name="name" placeholder='Your Name' />
                </div>
                <div className='my-2'>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="text" name="photo" placeholder='Your photoURL' />
                </div>
                <div className='my-2'>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="email" name="email" placeholder='Your Email' />
                </div>
                <div>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="password" name="password" placeholder='Your Password' />
                </div>
                <div className='my-4'>
                    <input className='bg-[#f39c12] w-3/4 p-2 text-white cursor-pointer font-semibold text-lg rounded' type="submit" value="Create account" />
                </div>
                <div className='mt-4 pb-6'>
                    <p>
                        <span className='text-[#757575]'>Already a User?</span> <Link className='font-medium text-[#f39c12]' to='/login'>Login</Link>
                    </p>
                </div>
                <div className='mt-3 pb-6 text-center'>
                    <p className='text-green-500 font-medium'>{success}</p>
                    <p className='text-red-500 font-medium'>{error}</p>
                </div>
            </form>
        </div>
    );
};

export default Register;