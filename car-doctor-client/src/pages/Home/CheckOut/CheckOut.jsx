import { useLoaderData } from "react-router-dom";
import { FaEnvelope, FaUser, FaPhoneAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";

// window.scrollTo({ top: 0, behavior: "smooth" });

const CheckOut = () => {
  const [isHovered, setIsHovered] = useState(false);
  const data = useLoaderData();
  const { title } = data;
  const image = "https://i.ibb.co.com/svSvWRYb/4.jpg";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
  };

  return (
    <div>
      {/* Image Section */}
      <div className='relative'>
        <img
          src={image}
          alt='Service'
          className='w-full my-5 h-[300px] object-cover rounded-2xl'
        />
        <div className='absolute h-full flex items-center w-1/2 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-l-2xl'>
          <div className='text-white space-y-7 pl-12'>
            <h2 className='text-6xl font-bold'>{title}</h2>
          </div>
          <div
            className='absolute flex items-center pl-26 w-1/2 py-2 left-3/4 bottom-0 bg-red-500 text-white'
            style={{
              clipPath: "polygon(7% 0%, 80% 0%, 88% 100%, 0% 100%)",
            }}
          >
            <div className='text-white'>
              <h2 className='text-xl font-semibold'>Checkout</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className='w-full p-5 lg:p-12 bg-base-200 rounded-2xl my-5'>
        <div className='max-w-4xl mx-auto'>
          <form onSubmit={handleLogin} className='space-y-6'>
            {/* First Row */}
            <div className='block md:flex justify-between gap-5'>
              {/* First Name */}
              <div className='group w-full'>
                <label className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-200 group-hover:text-red-500'>
                  First Name
                </label>
                <div className='relative bg-white'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaUser className='h-5 w-5 text-gray-400 group-hover:text-red-500' />
                  </div>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-300'
                    required
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className='group w-full'>
                <label className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-200 group-hover:text-red-500'>
                  Last Name
                </label>
                <div className='relative bg-white'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaUser className='h-5 w-5 text-gray-400 group-hover:text-red-500' />
                  </div>
                  <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-300'
                    required
                  />
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className='block md:flex justify-between gap-5'>
              {/* Your Phone */}
              <div className='group w-full'>
                <label className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-200 group-hover:text-red-500'>
                  Your Phone
                </label>
                <div className='relative bg-white'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaPhoneAlt className='h-5 w-5 text-gray-400 group-hover:text-red-500' />
                  </div>
                  <input
                    type='number'
                    name='phone'
                    placeholder='+88017 1234 5678'
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-300'
                    required
                  />
                </div>
              </div>
              {/* Your Email */}
              <div className='group w-full'>
                <label className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-200 group-hover:text-red-500'>
                  Last Name
                </label>
                <div className='relative bg-white'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaEnvelope className='h-5 w-5 text-gray-400 group-hover:text-red-500' />
                  </div>
                  <input
                    type='email'
                    name='email'
                    placeholder='you@example.com'
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-300'
                    required
                  />
                </div>
              </div>
            </div>

            {/* Your Message */}
            <div className='group'>
              <label className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-200 group-hover:text-red-500'>
                Your Message
              </label>
              <div className='relative bg-white'>
                <div className='absolute inset-y-0 left-0 top-4 pl-3 flex pointer-events-none'>
                  <FaPencil className='h-5 w-5 text-gray-400 group-hover:text-red-500' />
                </div>
                <textarea
                  type='text'
                  name='message'
                  placeholder='Write your message here...'
                  rows='5'
                  className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-300'
                  required
                />
              </div>
            </div>

            {/* Order button */}
            <button
              type='submit'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className='relative w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02] overflow-hidden group'
            >
              <span className='relative z-10 font-semibold text-lg'>
                Order Confirm
              </span>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform transition-transform duration-300 ${
                  isHovered ? "translate-x-0" : "-translate-x-full"
                }`}
              ></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
