import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/NavBar';

function Home() {
  const images = [
    'https://st.depositphotos.com/1500858/4082/i/450/depositphotos_40827443-stock-photo-travel-the-world-concept.jpg',
    'https://youmatter.world/app/uploads/2019/11/travel-world.jpg',
    'https://static.vecteezy.com/ti/photos-gratuite/t1/37248582-ai-genere-en-voyageant-a-thailande-publicite-contexte-avec-copie-espace-gratuit-photo.jpg',
    'https://www.outlooktravelmag.com/media/vietnam-1-1611926800.profileImage.2x-jpg.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide feature
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(autoSlide); // Clean up the interval on component unmount
  }, [currentIndex]);

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[40rem] top-[3rem]"> {/* Full width */}
       
        <div className="w-full h-full"> {/* Full width */}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Previous button */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        {/* Next button */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          &#10095;
        </button>

        {/* Dots for navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full focus:outline-none ${
                idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
