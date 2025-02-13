import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className='my-16 container mx-auto'>
      <div>
        {/* Service Area Header */}
        <div className='text-center px-4 md:px-20 lg:px-80 flex flex-col gap-4 md:gap-6 mb-12'>
          <p className='text-lg md:text-xl font-bold text-red-500 animate-fadeIn'>Our Services</p>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 leading-tight'>
            Professional Auto Services
          </h2>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
            We provide top-notch automotive services with state-of-the-art equipment 
            and certified professionals to keep your vehicle in perfect condition.
          </p>
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12'>
        {services.map((service) => (
          <div 
            key={service.title} 
            className='bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden'
          >
            <div className='relative group h-[250px] overflow-hidden'>
              <img
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                src={service.img}
                alt={service.title}
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300'></div>
            </div>
            <div className='p-6 space-y-4'>
              <h3 className='text-2xl font-bold text-slate-800 transition-colors duration-300'>
                {service.title}
              </h3>
              <div className='flex items-center justify-between'>
                <div className='space-y-1'>
                  <p className='text-xl font-bold text-red-500'>
                    ${service.price}
                  </p>
                  <p className='text-sm text-gray-500'>Starting from</p>
                </div>
                <Link 
                  to={`/service/${service._id}`} 
                  className='p-3 rounded-full bg-red-50 hover:bg-red-500 group transition-all duration-300'
                >
                  <FaLocationArrow className='text-xl text-red-500 group-hover:text-white transform rotate-45' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-12 flex justify-center px-4'>
        <Link to='/services'>
          <button className='px-8 py-3 border-2 border-red-500 rounded-full text-lg font-semibold text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105'>
            Explore All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
