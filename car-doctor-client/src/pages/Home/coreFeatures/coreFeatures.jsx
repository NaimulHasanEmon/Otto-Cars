import { useEffect, useState } from "react";

const CoreFeatures = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("coreFeatures.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="my-8 md:my-12 lg:my-16">
      {/* Core Features */}
      <div className='text-center px-4 md:px-20 lg:px-80 flex flex-col gap-3 md:gap-5'>
        <p className='text-lg md:text-xl font-bold text-red-500'>
          Core Features
        </p>
        <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>Why Choose Us</p>
        <p className='text-sm md:text-base lg:text-lg text-gray-500'>
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomized Words Which Don&apos;t Look Even Slightly
          Believable.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 px-4 md:px-8 lg:px-12 my-5'>
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`${
              feature.id === 2 && "bg-red-500 border-none text-white"
            } p-3 md:p-4 lg:p-5 rounded-lg border border-gray-200 flex flex-col gap-2 md:gap-3 justify-center items-center`}
          >
            <img 
              src={feature.image} 
              alt={feature.name}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" 
            />
            <p className='text-center text-sm md:text-base lg:text-xl font-bold'>{feature.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
