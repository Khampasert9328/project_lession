import React, { useState } from 'react';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiPhoneOutgoing } from "react-icons/fi";

function Register() {
    const [name, setName] = useState('');
    const [tell, setTell] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ name: '', tell: '', email: '', password: '' });
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validateForm = () => {
        let nameError = '';
        let tellError = '';
        let emailError = '';
        let passwordError = '';

        if (!name) {
            nameError = 'Name is required';
        }

        if (!tell) {
            tellError = 'Phone number is required';
        } else if (tell.length < 10) {
            tellError = 'Phone number must be at least 10 characters';
        }

        if (!email) {
            emailError = 'Email is required';
        } else if (!validateEmail(email)) {
            emailError = 'Invalid email format';
        }

        if (!password) {
            passwordError = 'Password is required';
        } else if (password.length < 6) {
            passwordError = 'Password must be at least 6 characters';
        }

        if (nameError || tellError || emailError || passwordError) {
            setErrors({ name: nameError, tell: tellError, email: emailError, password: passwordError });
            return false;
        }

        setErrors({ name: '', tell: '', email: '', password: '' });
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return;
       
        setLoading(true);
        setTimeout(() => {
            console.log('Name:', name);
            console.log('Phone:', tell);
            console.log('Email:', email);
            console.log('Password:', password);
            setLoading(false);
            alert('Registration successful!');
            window.location.href = '/';
        }, 2000);
    };

    return (
        <div className='bg-white'>
            <div className="h-screen flex flex-col items-center justify-center">
                <div className='max-w-md w-full mx-auto bg-gray-50 rounded-lg border-1 border-[#006897] p-7 space-y-5 shadow-lg'>
                    <div className='flex flex-col text-left'>
                        <label className='mb-1 text-sm' htmlFor="name">ຊື່ ແລະ ນາມສະກຸນ</label>
                        <div className='relative'>
                            <FaRegUser className='absolute left-3 top-3 text-[#006897]' size={20} />
                            <input
                                className={`px-10 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-md w-full`}
                                type="text"
                                name="name"
                                id="name"
                                placeholder='ປ້ອນຊື່ ແລະ ນາມສະກຸນ'
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col text-left'>
                        <label className='mb-1 text-sm' htmlFor="tell">ເບີໂທ</label>
                        <div className='relative'>
                            <FiPhoneOutgoing className='absolute left-3 top-3 text-[#006897]' size={20} />
                            <input
                                className={`px-10 py-2 border ${errors.tell ? 'border-red-500' : 'border-gray-200'} rounded-md w-full`}
                                type="text"
                                name="tell"
                                id="tell"
                                placeholder='ປ້ອນເບີໂທ'
                                onChange={(e) => setTell(e.target.value)}
                            />
                            {errors.tell && <span className="text-red-500 text-xs">{errors.tell}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col text-left'>
                        <label className='mb-1 text-sm' htmlFor="email">ປ້ອນອີເມວ</label>
                        <div className='relative'>
                            <MdOutlineAttachEmail className='absolute left-3 top-3 text-[#006897]' size={20} />
                            <input
                                className={`px-10 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md w-full`}
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Example@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col text-left'>
                        <label className='mb-1 text-sm' htmlFor="password">ປ້ອນລະຫັດຜ່ານ</label>
                        <div className='relative'>
                            <IoLockClosedOutline className='absolute left-3 top-3 text-[#006897]' size={20} />
                            <input
                                className={`px-10 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-md w-full`}
                                type="password"
                                name="password"
                                id="password"
                                placeholder='***********'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                        </div>
                    </div>
                    <div>
                        <button
                            className={`w-full bg-[#006897] text-white rounded-md py-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'ກຳລັງລົງທະບຽນ...' : 'ລົງທະບຽນ'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
