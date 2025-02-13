import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      {/* Core Features */}
      <div className='text-center space-y-4 max-w-4xl mx-auto mb-8 md:mb-12'>
        <p className='text-lg md:text-xl font-bold text-red-500'>Testimonial</p>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
          What Customers Says
        </h2>
        <p className='text-sm md:text-base lg:text-lg text-gray-500'>
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomized Words Which Don&apos;t Look Even Slightly
          Believable.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='border border-gray-200 rounded-lg p-4 md:p-6 flex flex-col space-y-4'
          >
            <div className='flex flex-row justify-between items-start gap-4'>
              <div className='flex items-center gap-3'>
                <div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='h-16 md:h-20 w-16 md:w-20 rounded-full object-cover'
                  />
                </div>
                <div className='space-y-1'>
                  <p className='text-xl md:text-2xl lg:text-3xl font-bold'>{testimonial.name}</p>
                  <p className='text-base md:text-lg text-gray-500 font-semibold'>
                    {testimonial.job}
                  </p>
                </div>
              </div>
              <div>
                <FaQuoteRight className='text-red-300 text-5xl md:text-6xl lg:text-8xl' />
              </div>
            </div>
            <div className='grow'>
              <p className='text-gray-500 text-base md:text-lg'>{testimonial.opinion}</p>
            </div>
            <div className='flex gap-1 text-xl md:text-2xl'>
              {[...Array(testimonial.no_of_star)].map((_, index) => (
                <FaStar key={index} className='text-yellow-500' />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
