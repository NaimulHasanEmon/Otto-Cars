import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const About = () => {
  return (
    <div className='py-16'>
      <div className='container mx-auto flex flex-col md:flex-row gap-15 px-4'>
        {/* Image */}
        <div className='w-full md:w-1/2 relative'>
          <img
            src='https://i.ibb.co.com/1G88pbv4/person.jpg'
            alt='Person'
            className='rounded-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover'
          />
          <img
            src='https://i.ibb.co.com/mCHyf95s/parts.jpg'
            alt='Parts'
            className='absolute hidden md:block -bottom-12 -right-8 w-[200px] md:w-[220px] lg:w-[250px] border-l-8 border-t-8 border-white rounded-lg shadow-lg'
          />
        </div>

        {/* About Us Description */}
        <div className='w-full md:w-1/2 space-y-5'>
          <h3 className='text-xl font-bold text-red-500'>About Us</h3>
          <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
            We are qualified & of experience in this field
          </h1>
          <div className='space-y-4 text-[#737373]'>
            <p>
              We have been providing quality car services for over two decades. Our team of certified mechanics ensures your vehicle receives the best care possible.
            </p>
            <p>
              From routine maintenance to complex repairs, we handle everything with precision and care. Our state-of-the-art facility is equipped with the latest diagnostic tools and equipment.
            </p>
          </div>
          <div className='pt-4'>
            <Link
              to='/about'
              className='inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded hover:bg-[#E62A00] transition duration-300'
            >
              <span>Get More Info</span>
              <FaLocationArrow className='text-sm' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
