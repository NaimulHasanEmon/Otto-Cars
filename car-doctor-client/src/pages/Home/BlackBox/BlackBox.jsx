import { LuCalendarClock } from "react-icons/lu";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const BlackBox = () => {
  return (
    <div className='bg-neutral-900 text-white py-16 my-10 rounded-2xl px-4 md:px-8'>
      <div className='container mx-auto flex flex-col md:flex-row justify-evenly md:items-center gap-8 md:gap-4'>
        {/* Business Hours */}
        <div className='flex items-center gap-4 border-b-2 border-red-500 pb-4 md:border-b-0 md:pr-12'>
          <div className='text-3xl'>
            <LuCalendarClock className='text-red-500' />
          </div>
          <div className='md:text-left'>
            <p>We are open saturday-thursday</p>
            <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
          </div>
        </div>

        {/* Contact Number */}
        <div className='flex items-center gap-4 border-b-2 border-red-500 pb-4 md:border-b-0 md:border-x-2 md:px-12'>
          <div className='text-3xl'>
            <MdPermPhoneMsg className='text-red-500' />
          </div>
          <div className='md:text-left'>
            <p>Have a question?</p>
            <h3 className='text-2xl font-bold'>+880 1723 45678</h3>
          </div>
        </div>

        {/* Address */}
        <div className='flex items-center gap-4 md:pl-12'>
          <div className='text-3xl'>
            <MdLocationPin className='text-red-500' />
          </div>
          <div className='md:text-left'>
            <p>Need a repair? our address</p>
            <h3 className='text-2xl font-bold'>Banani, Dhaka</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackBox;
