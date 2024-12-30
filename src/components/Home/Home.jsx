import React from 'react';
import Navbar from '../Navbar/NavBar';
import Logo from '../../assets/images/logowallpaper.jpg';
import SuperCar1 from '../../assets/images/supercar1.webp';
import SuperCar2 from '../../assets/images/supercar2.webp';
import SuperCar3 from '../../assets/images/supercar3.jpg';
import SuperCar4 from '../../assets/images/supercar4.avif';
import CustomCard from '../CustomCard/CustomCard';

function Home() {
  // Array of card data with actual image imports
  const cardData = [
    {
      title: "Supercar 1",
      image: SuperCar1, 
      description: "A stunning supercar speeding down the road.",
      actionText: "Learn More",
    },
    {
      title: "Supercar 2",
      image: SuperCar2, 
      description: "The latest model in the supercar lineup.",
      actionText: "Learn More",
    },
    {
      title: "Supercar 3",
      image: SuperCar3, 
      description: "A futuristic supercar with unique design.",
      actionText: "Learn More",
    },
    {
      title: "Supercar 4",
      image: SuperCar4,  
      description: "A luxurious supercar with advanced technology.",
      actionText: "Learn More",
    },
  ];

  // Button click handler
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="relative h-screen">
     
      <Navbar />
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center h-full">
        {/* Fullscreen Image */}
        <img src={Logo} alt="Logo" className="w-full h-full  object-cover" />
      </div>
      {/* List of Cards */}
      <div className='p-20 '>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            image={card.image}  // Pass the image URL (imported image)
            description={card.description}
            actionText={card.actionText}
            onActionClick={handleButtonClick}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
export default Home;
