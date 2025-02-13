import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("popularProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='my-10'>
      <div>
        {/* Products Area */}
        <div className='text-center px-4 md:px-20 lg:px-80 flex flex-col gap-3 md:gap-5'>
          <p className='text-lg md:text-xl font-bold text-red-500'>Popular Products</p>
          <p className='text-3xl md:text-4xl font-bold'>Browse Our Products</p>
          <p className='text-base md:text-lg text-gray-500'>
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomized Words Which Don&apos;t Look Even Slightly
            Believable.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'
          >
            <div className='relative group'>
              <div className='p-6 bg-white'>
                <div className='bg-slate-100 rounded-lg p-2 flex justify-center'>
                  <img
                    className='h-[220px] object-cover transition-transform duration-300 group-hover:scale-105'
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              </div>
            </div>
            <div className='flex gap-1 justify-center text-xl mt-5 mb-2'>
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
            </div>
            <div className='px-5 text-center'>
              <p className='text-xl md:text-2xl font-bold text-slate-800 hover:text-red-500 transition-colors duration-300'>
                {product.name}
              </p>
              <p className='text-lg md:text-xl font-bold text-red-500 mt-1 mb-3'>
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5 flex justify-center px-4'>
        <Link to=''>
          <p className='p-2 border-red-400 border-2 rounded text-lg md:text-xl font-semibold hover:bg-red-400 hover:text-white transition-colors'>
            More Products
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;
