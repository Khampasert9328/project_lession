import React, { useState } from 'react';
import Header from '../Navbar/NavBar';
import Logo from '../../assets/images/logowallpaper.jpg';

function Service1() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center h-full p-4">
                {/* Fullscreen Image */}
                <div className="flex flex-col justify-center items-center h-full w-full">
                    <img src={Logo} alt="Logo" className="w-full h-full object-cover mb-4" />
                </div>

                {/* Service Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Our Service</h1>
                    <p className="text-lg">
                        We provide top-notch services to cater to your needs. Our team of experts are dedicated to delivering the best results for our clients.
                    </p>
                </div>

                {/* Features Section */}
                <div className="w-full max-w-4xl mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Features</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Feature 1: High quality service</li>
                        <li className="mb-2">Feature 2: 24/7 Customer support</li>
                        <li className="mb-2">Feature 3: Affordable pricing</li>
                        <li className="mb-2">Feature 4: Experienced professionals</li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" className="mb-4 p-2 border border-gray-300 rounded" />
                        <input type="email" placeholder="Email" className="mb-4 p-2 border border-gray-300 rounded" />
                        <textarea placeholder="Message" className="mb-4 p-2 border border-gray-300 rounded" rows="4"></textarea>
                        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
                    </form>
                </div>
            </div>

            {/* Success Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4 text-black">ບັນທຶກສຳເລັດ</h2>
                        <p className="mb-4 text-black">Your message has been sent successfully!</p>
                        <button onClick={closeDialog} className="p-2 bg-blue-500 text-white rounded hover:bg-red-600">ປິດ</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Service1;