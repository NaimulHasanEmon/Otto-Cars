import error from "../../assets/error.png";
import NavBar from "../Shared/NavBar/NavBar";

const Error = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className='bg-gray-100 flex items-center justify-center px-4 py-8'>
        <div className='text-center'>
          <img
            src={error}
            alt='Broken car illustration'
            className='max-w-[500px] w-full mx-auto animate-bounce-slow'
          />
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-4'>
            Oops! Engine Trouble
          </h2>
          <p className='text-gray-600 text-lg mb-8 max-w-md mx-auto'>
            Looks like this page has broken down. Our mechanics are working on
            it!
          </p>
          <button
            onClick={() => window.history.back()}
            className='bg-red-600 text-white px-6 py-3 rounded-full mr-4 hover:bg-red-700 transition duration-300'
          >
            Go Back
          </button>
          <a
            href='/'
            className='bg-gray-800 text-white px-6 py-3 rounded-full inline-block hover:bg-gray-900 transition duration-300'
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
