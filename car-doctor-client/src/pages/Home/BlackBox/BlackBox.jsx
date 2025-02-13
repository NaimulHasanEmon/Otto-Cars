import { LuCalendarClock } from "react-icons/lu";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const BlackBox = () => {
  return (
    <div className='bg-neutral-900 text-white py-20 my-12 rounded-3xl px-4 md:px-8 shadow-2xl'>
      <div className='container mx-auto flex flex-col md:flex-row justify-evenly md:items-center gap-10 md:gap-4'>
        {/* Business Hours */}
        <div className='flex items-center gap-6 border-b-2 border-red-500 pb-6 md:border-b-0 md:pr-12 
            transition-transform duration-300 hover:scale-105 cursor-pointer group'>
          <div className='text-4xl p-4 bg-red-500/10 rounded-full group-hover:bg-red-500/20 transition-colors'>
            <LuCalendarClock className='text-red-500' />
          </div>
          <div className='md:text-left'>
            <p className='text-gray-300 mb-1'>We are open saturday-thursday</p>
            <h3 className='text-2xl font-bold group-hover:text-red-500 transition-colors'>7:00 am - 9:00 pm</h3>
          </div>
        </div>

        {/* Contact Number */}
        <div className='flex items-center gap-6 border-b-2 border-red-500 pb-6 md:border-b-0 md:border-x-2 md:px-12 
            transition-transform duration-300 hover:scale-105 cursor-pointer group'>
          <div className='text-4xl p-4 bg-red-500/10 rounded-full group-hover:bg-red-500/20 transition-colors'>
            <MdPermPhoneMsg className='text-red-500' />
          </div>
          <div className='md:text-left'>
            <p className='text-gray-300 mb-1'>Have a question?</p>
            <h3 className='text-2xl font-bold group-hover:text-red-500 transition-colors'>+880 1723 45678</h3>
          </div>
        </div>

        {/* Address */}
        <div className='flex items-center gap-6 md:pl-12 
            transition-transform duration-300 hover:scale-105 cursor-pointer group'>
          <div className='text-4xl p-4 bg-red-500/10 rounded-full group-hover:bg-red-500/20 transition-colors'>
            <MdLocationPin className='text-red-500' />
          </div>
          <div className='md:text-left'>
            <p className='text-gray-300 mb-1'>Need a repair? our address</p>
            <h3 className='text-2xl font-bold group-hover:text-red-500 transition-colors'>Banani, Dhaka</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackBox;
