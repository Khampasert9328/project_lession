import React, { useState } from 'react';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Import Link

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false);
    // const [errors, setErrors] = useState({ email: '', password: '' });

    // const validateEmail = (email) => {
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailPattern.test(email);
    // };

    // const validateForm = () => {
    //     let emailError = '';
    //     let passwordError = '';

    //     if (!email) {
    //         emailError = 'Email is required';
    //     } else if (!validateEmail(email)) {
    //         emailError = 'Invalid email format';
    //     }

    //     if (!password) {
    //         passwordError = 'Password is required';
    //     } else if (password.length < 6) {
    //         passwordError = 'Password must be at least 6 characters';
    //     }

    //     if (emailError || passwordError) {
    //         setErrors({ email: emailError, password: passwordError });
    //         return false;
    //     }

    //     setErrors({ email: '', password: '' });
    //     return true;
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const isValid = validateForm();
    //     if (!isValid) return;

    //     setLoading(true);

    //     // Simulate login process
    //     setTimeout(() => {
    //         console.log('Email:', email);
    //         console.log('Password:', password);
    //         setLoading(false);
    //         alert('Login successful!');
    //         window.location.href = '/navbar';
    //     }, 2000);
    // };

    return (

        <div className='flex flex-col justify-between items-center w-full'>
            <div className='text-red-200 text-[10rem]'>
                <h1>Hiii</h1>
            </div>
            <div className='text-blue-400 text-[10rem]'>
                <h1>Hello</h1>
            </div>
            <div className='text-blue-400 text-[10rem]'>
                <h1>Hello</h1>
            </div>
        </div>



        // <div className="h-screen flex flex-col items-center justify-center">

        //     {/* <div className='flex flex-row justify-between w-full'>
        //         <div>
        //             <h1>Hiii</h1>
        //         </div>
        //         <div>
        //             <h1>Helll</h1>
        //         </div>
        //     </div> */}
        //     <div className='max-w-md w-full mx-auto bg-gray-50 rounded-lg border-1 border-[#006897] p-7 space-y-5 shadow-lg'>
        //         <div className='flex flex-col text-left'>
        //             <label className='mb-1 text-sm' htmlFor="email">ປ້ອນອີເມວ</label>
        //             <div className='relative'>
        //                 <MdOutlineAttachEmail className='absolute left-3 top-3 text-[#006897]' size={20} />
        //                 <input
        //                     className={`px-10 py-2 border bg-white ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md w-full`}
        //                     type="email"
        //                     name="email"
        //                     id="email"
        //                     placeholder='Example@gmail.com'
        //                     onChange={(e) => setEmail(e.target.value)}
        //                 />
        //                 {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        //             </div>
        //         </div>
        //         <div className='flex flex-col text-left'>
        //             <label className='mb-1 text-sm' htmlFor="password">ປ້ອນລະຫັດຜ່ານ</label>
        //             <div className='relative'>
        //                 <IoLockClosedOutline className='absolute left-3 top-3 text-[#006897]' size={20} />
        //                 <input
        //                     className={`px-10 py-2 border bg-white ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-md w-full`}
        //                     type="password"
        //                     name="password"
        //                     id="password"
        //                     placeholder='***********'
        //                     onChange={(e) => setPassword(e.target.value)}
        //                 />
        //                 {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
        //             </div>
        //         </div>
        //         <div>
        //             <button
        //                 className={`w-full bg-[#006897] text-white rounded-md py-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        //                 onClick={handleSubmit}
        //                 disabled={loading}
        //             >
        //                 {loading ? 'ກຳລັງເຂົ້າສູ່ລະບົບ...' : 'ເຂົ້າສູ່ລະບົບ'}
        //             </button>
        //         </div>
        //         <div className='flex flex-row space-x-2 justify-center'>
        //             <p className='text-sm text-gray-600'>ບໍ່ມີບັນຊີຫຼືບໍ່?</p>
        //             <Link to="/register" className='text-sm text-[#006897] cursor-pointer'>ສະມັກບັນຊີໃໝ່</Link> {/* Use Link to route to register page */}
        //         </div>
        //     </div>
        // </div>

    );
}

export default Login;
