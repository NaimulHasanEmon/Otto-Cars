import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-out',
    });

    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div data-aos="fade-up">
        {/* Section Header */}
        <div className='text-center space-y-5 max-w-4xl mx-auto mb-12 md:mb-16'>
          <p className='text-lg md:text-xl font-bold text-red-500 uppercase tracking-wider'>
            Testimonial
          </p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800'>
            What Our Customers Say
          </h2>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Discover why our customers trust us with their vehicles. Read genuine feedback from our valued clients about their experience with our services.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10'>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className='border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col space-y-6 
                     hover:shadow-lg transition-all duration-300 hover:border-red-200
                     bg-white hover:bg-gray-50'
          >
            <div className='flex flex-row justify-between items-start gap-4'>
              <div className='flex items-center gap-4'>
                <div className='relative'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='h-16 md:h-20 w-16 md:w-20 rounded-full object-cover 
                             ring-4 ring-red-50 hover:ring-red-100 transition-all duration-300'
                  />
                </div>
                <div className='space-y-2'>
                  <p className='text-xl md:text-2xl font-bold text-gray-800 
                              hover:text-red-500 transition-colors duration-300'>
                    {testimonial.name}
                  </p>
                  <p className='text-base md:text-lg text-gray-600 font-medium'>
                    {testimonial.job}
                  </p>
                </div>
              </div>
              <div className='relative'>
                <FaQuoteRight className='text-red-200 text-4xl md:text-5xl lg:text-6xl 
                                      opacity-80 hover:opacity-100 transition-opacity duration-300' />
              </div>
            </div>
            <div className='grow'>
              <p className='text-gray-700 text-base md:text-lg leading-relaxed italic'>
                &ldquo;{testimonial.opinion}&rdquo;
              </p>
            </div>
            <div className='flex gap-1.5 text-lg md:text-xl'>
              {[...Array(testimonial.no_of_star)].map((_, index) => (
                <FaStar 
                  key={index} 
                  className='text-yellow-400 hover:text-yellow-500 
                           transition-colors duration-300' 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
