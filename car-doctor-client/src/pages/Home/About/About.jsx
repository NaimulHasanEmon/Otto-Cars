import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const About = () => {
  return (
    <div className='py-20'>
      <div className='container mx-auto flex flex-col md:flex-row gap-16 px-4'>
        {/* Image Section */}
        <div className='w-full md:w-1/2 relative'>
          <img
            src='https://i.ibb.co.com/1G88pbv4/person.jpg'
            alt='Person'
            className='rounded-lg w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]'
          />
          <img
            src='https://i.ibb.co.com/mCHyf95s/parts.jpg'
            alt='Parts'
            className='absolute hidden md:block -bottom-12 -right-8 w-[200px] md:w-[250px] lg:w-[280px] border-l-8 border-t-8 border-white rounded-lg hover:shadow-xl transition-all duration-300'
          />
        </div>

        {/* About Us Content */}
        <div className='w-full md:w-1/2 space-y-6'>
          <div className='space-y-3'>
            <h3 className='text-xl font-bold text-red-500 uppercase tracking-wider'>About Us</h3>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight text-gray-800'>
              We are qualified & of experience in this field
            </h1>
          </div>

          <div className='space-y-4 text-gray-600 leading-relaxed'>
            <p>
              We have been providing quality car services for over two decades. Our team of certified mechanics ensures your vehicle receives the best care possible.
            </p>
            <p>
              From routine maintenance to complex repairs, we handle everything with precision and care. Our state-of-the-art facility is equipped with the latest diagnostic tools and equipment.
            </p>
          </div>

          {/* Statistics Section */}
          <div className='grid grid-cols-2 gap-6 py-6'>
            <div className='space-y-2'>
              <h3 className='text-4xl font-bold text-red-500'>20+</h3>
              <p className='text-gray-600'>Years Experience</p>
            </div>
            <div className='space-y-2'>
              <h3 className='text-4xl font-bold text-red-500'>100%</h3>
              <p className='text-gray-600'>Client Satisfaction</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className='pt-6'>
            <Link
              to='/about'
              className='inline-flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-[#E62A00] transition duration-300 transform hover:-translate-y-1 hover:shadow-lg group'
            >
              <span className='font-semibold'>Discover More</span>
              <FaLocationArrow className='text-sm transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
