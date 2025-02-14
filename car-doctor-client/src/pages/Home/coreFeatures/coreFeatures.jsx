import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CoreFeatures = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });

    fetch("coreFeatures.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className='my-8 md:my-12 lg:my-16 container mx-auto'>
      <div data-aos="fade-up">
        {/* Core Features Header */}
        <div className='text-center px-4 md:px-20 lg:px-80 flex flex-col gap-4 md:gap-6 mb-12'>
          <p className='text-lg md:text-xl font-bold text-red-500 tracking-wider uppercase animate-fade-in'>
            Core Features
          </p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent'>
            Why Choose Us
          </h2>
          <p className='text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            We pride ourselves on delivering exceptional service with cutting-edge
            technology and experienced professionals to ensure your vehicle
            receives the best care possible.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 px-4 md:px-8 lg:px-12 my-5'>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className={`${
              feature.id === 2
                ? "bg-red-500 border-none text-white shadow-red-200 hover:text-black"
                : "bg-white hover:bg-gray-50"
            } p-5 md:p-6 lg:p-7 rounded-xl border border-gray-200 flex flex-col gap-3 md:gap-4 
            justify-center items-center transform hover:scale-105 transition-all duration-300 
            cursor-pointer hover:shadow-xl group relative overflow-hidden`}
          >
            <div
              className='absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            />

            <img
              src={feature.image}
              alt={feature.name}
              className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain 
              group-hover:rotate-6 transition-transform duration-300'
            />
            <p
              className={`text-center text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${
                feature.id === 2 
                  ? "text-white group-hover:text-black" 
                  : "group-hover:text-red-500"
              }`}
            >
              {feature.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
