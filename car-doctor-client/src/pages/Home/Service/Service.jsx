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
    <div className='my-10'>
      <div>
        {/* Service Area */}
        <div className='text-center px-4 md:px-20 lg:px-80 flex flex-col gap-3 md:gap-5'>
          <p className='text-lg md:text-xl font-bold text-red-500'>Service</p>
          <p className='text-3xl md:text-4xl font-bold'>Our Service Area</p>
          <p className='text-base md:text-lg text-gray-500'>
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomized Words Which Don&apos;t Look Even Slightly
            Believable.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12'>
        {services.map((service) => (
          <div key={service.title} className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
            <div className='relative group'>
              <img
                className='w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105'
                src={service.img}
                alt={service.title}
              />
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
            </div>
            <div className='p-5 space-y-4'>
              <h3 className='text-xl md:text-2xl font-bold text-slate-800 hover:text-red-500 transition-colors duration-300'>
                {service.title}
              </h3>
              <div className='flex items-center justify-between'>
                <p className='text-lg md:text-xl font-bold text-red-500'>
                  Price: ${service.price}
                </p>
                <Link to='' className='p-2 rounded-full hover:bg-red-100 transition-colors duration-300'>
                  <FaLocationArrow className='text-red-500 text-lg md:text-xl' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5 flex justify-center px-4'>
        <Link to=''>
          <p className='p-2 border-red-400 border-2 rounded text-lg md:text-xl font-semibold hover:bg-red-400 hover:text-white transition-colors'>
            More Services
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Services;
