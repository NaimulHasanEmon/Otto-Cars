import loginIcon from "../../assets/login.svg";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='flex w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl'>
        {/* Left side - Image */}
        <div className='hidden md:block w-1/2 bg-red-50'>
          <img
            src={loginIcon}
            className='w-full h-full object-cover p-12 transform hover:scale-105 transition-transform duration-300'
            alt='login illustration'
          />
        </div>

        {/* Right side - Form */}
        <div className='w-full md:w-1/2 p-8 lg:p-12 bg-gradient-to-b from-white to-gray-50'>
          <div className='max-w-md mx-auto'>
            <div className='text-center mb-10'>
              <h2 className='text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600'>
                Create Account
              </h2>
              <p className='text-gray-600 text-lg'>Join our community of car enthusiasts</p>
            </div>

            <form onSubmit={handleSignUp} className='space-y-6'>
              <div className='group'>
                <label className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-200 group-hover:text-red-500'>
                  Full Name
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaUser className='h-5 w-5 text-gray-400 group-hover:text-red-500' />
                  </div>
                  <input
                    type='text'
                    name='name'
                    placeholder='John Doe'
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-300'
                    required
                  />
                </div>
              </div>

              <div className='group'>
                <label className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-200 group-hover:text-red-500'>
                  Email Address
                </label>
                <div className='relative'>
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

              <div className='group'>
                <label className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-200 group-hover:text-red-500'>
                  Password
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaLock className='h-5 w-5 text-gray-400 group-hover:text-red-500' />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='••••••••'
                    className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-300'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  >
                    {showPassword ? (
                      <FaEyeSlash className='h-5 w-5 text-gray-400 hover:text-red-500' />
                    ) : (
                      <FaEye className='h-5 w-5 text-gray-400 hover:text-red-500' />
                    )}
                  </button>
                </div>
                <p className='mt-2 text-sm text-gray-500 flex items-center gap-1'>
                  <span className='text-red-500'>•</span> At least 8 characters
                  <span className='text-red-500 ml-2'>•</span> Include numbers & symbols
                </p>
              </div>

              <button
                type='submit'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='relative w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02] overflow-hidden group'
              >
                <span className='relative z-10 font-semibold text-lg'>Create Account</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform transition-transform duration-300 ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}></div>
              </button>
            </form>

            <div className='mt-8'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-200'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-4 bg-gradient-to-b from-white to-gray-50 text-gray-500'>Or continue with</span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-3 gap-4'>
                {/* Social buttons with enhanced hover effects */}
                <button className='flex items-center justify-center p-3 rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-200 transform hover:scale-105 hover:bg-red-50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    alt='facebook'
                    height='40'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#039be5'
                      d='M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z'
                    ></path>
                    <path
                      fill='#fff'
                      d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'
                    ></path>
                  </svg>
                </button>
                <button className='flex items-center justify-center p-3 rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-200 transform hover:scale-105 hover:bg-red-50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    height='40'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#0288d1'
                      d='M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z'
                    ></path>
                    <path
                      fill='#fff'
                      d='M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z'
                    ></path>
                  </svg>
                </button>
                <button className='flex items-center justify-center p-3 rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-200 transform hover:scale-105 hover:bg-red-50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    height='37'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#FFC107'
                      d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                    <path
                      fill='#FF3D00'
                      d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                    ></path>
                    <path
                      fill='#4CAF50'
                      d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                    ></path>
                    <path
                      fill='#1976D2'
                      d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <p className='mt-8 text-center text-sm text-gray-600'>
              Already have an account?{' '}
              <Link 
                to='/login' 
                className='font-medium text-red-500 hover:text-red-600 transition-colors hover:underline'
              >
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
