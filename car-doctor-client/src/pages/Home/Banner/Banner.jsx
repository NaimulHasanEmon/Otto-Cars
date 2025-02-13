import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const img1 = "https://i.ibb.co.com/NdmvFKbm/5.jpg";
const img2 = "https://i.ibb.co.com/whBJfqdK/2.jpg";
const img3 = "https://i.ibb.co.com/svSvWRYb/4.jpg";

const slideData = [
  {
    _id: "1",
    imageURL: img1,
    info: "Affordable Price For Car Servicing",
  },
  {
    _id: "2",
    imageURL: img2,
    info: "Professional Car Repair Service",
  },
  {
    _id: "3",
    imageURL: img3,
    info: "Expert Auto Repair Solutions",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  return (
    <div className='flex flex-col relative mt-20'>
      <div className='relative overflow-hidden rounded-xl sm:rounded-2xl'>
        <div
          className='flex transition-transform duration-700 ease-in-out h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slideData.map((data, idx) => (
            <div key={idx} className='min-w-full relative group'>
              <img
                src={data.imageURL}
                className='h-full w-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700'
                alt={data.info}
              />
              <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent'></div>
              <div
                className='absolute bottom-4 left-3 md:bottom-20 md:left-10 lg:left-20 text-white z-10 pr-6 sm:pr-20 md:pr-70 lg:pr-[500px] 
                sm:transform sm:translate-y-5 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500
                translate-y-0 opacity-100'
              >
                <h2 className='text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold mb-2 sm:mb-4 leading-tight'>
                  {data.info}
                </h2>
                <p className='text-gray-300 mb-3 sm:mb-6 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl block'>
                  Experience top-notch car services with our expert team. We
                  ensure quality, reliability, and customer satisfaction.
                </p>
                <div className='flex gap-2 sm:gap-4'>
                  <Link
                    to={`/viewDetails/${data._id}`}
                    className='inline-flex items-center gap-1 sm:gap-2 bg-red-500 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-xs sm:text-base'
                  >
                    <span className='font-semibold'>Discover More</span>
                    <FaLocationArrow className='animate-pulse' />
                  </Link>
                  <button className='px-3 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold text-xs sm:text-base'>
                    Latest Offers
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - properly centered */}
        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex justify-center gap-[80%] sm:gap-[85%] z-20'>
          <button
            onClick={goToPrevSlide}
            className='bg-white/10 hover:bg-red-500 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110'
          >
            <FaLocationArrow className='rotate-180 text-lg sm:text-2xl' />
          </button>
          <button
            onClick={goToNextSlide}
            className='bg-white/10 hover:bg-red-500 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110'
          >
            <FaLocationArrow className='text-lg sm:text-2xl' />
          </button>
        </div>

        {/* Slide Indicators - simple bottom positioning */}
        <div className='absolute bottom-2 sm:left-0 right-2 sm:bottom-5 sm:right-0 flex justify-center gap-3 z-100'>
          {slideData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-red-500 w-8"
                  : "bg-white/50 w-2 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
