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
    <div className='relative overflow-hidden rounded-2xl'>
      <div
        className='flex transition-transform duration-500 ease-in-out h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px] 2xl:h-[623px]'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slideData.map((data, idx) => (
          <div key={idx} className='min-w-full relative'>
            <img
              src={data.imageURL}
              className='h-full w-full object-cover'
              alt={data.info}
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-transparent'></div>
            <div className='absolute bottom-5 left-3 md:bottom-10 md:left-10 lg:left-20 text-white z-10 pr-10 sm:pr-20 md:pr-70 lg:pr-[500px]'>
              <p className='text-2xl md:text-3xl lg:text-8xl'>{data.info}</p>
              <div className='mt-4'>
                <Link
                  to={`/viewDetails/${data._id}`}
                  className='inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors'
                >
                  <span>Discover More</span>
                  <FaLocationArrow />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className='absolute bottom-3 sm:bottom-4 md:bottom-5 right-3 sm:right-4 md:right-5 flex text-xl sm:text-2xl md:text-3xl gap-1 sm:gap-2 z-20'>
        <button
          onClick={goToPrevSlide}
          className='bg-white/20 hover:bg-orange-500 backdrop-blur-sm text-white p-2 rounded-full transition-all'
        >
          <FaLocationArrow className='rotate-180' />
        </button>
        <button
          onClick={goToNextSlide}
          className='bg-white/20 hover:bg-orange-500 backdrop-blur-sm text-white p-2 rounded-full transition-all'
        >
          <FaLocationArrow />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
        {slideData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === idx ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
