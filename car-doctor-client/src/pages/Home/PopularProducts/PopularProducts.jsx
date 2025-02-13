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
    <div className='my-16'>
      <div>
        {/* Products Header */}
        <div className='text-center px-4 md:px-20 lg:px-80 flex flex-col gap-4 md:gap-6 mb-12'>
          <p className='text-lg md:text-xl font-bold text-red-500 uppercase tracking-wider'>Popular Products</p>
          <h2 className='text-3xl md:text-5xl font-bold text-slate-800'>Browse Our Products</h2>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Discover our carefully curated selection of premium automotive products, 
            designed to enhance your vehicle&apos;s performance and appearance.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group'
          >
            <div className='relative'>
              <div className='p-6'>
                <div className='bg-slate-50 rounded-xl p-4 flex justify-center items-center overflow-hidden'>
                  <img
                    className='h-[240px] w-full object-contain transition-transform duration-500 group-hover:scale-110'
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                {/* Add sale badge if product is on sale */}
                {product.onSale && (
                  <div className='absolute top-8 right-8 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    SALE
                  </div>
                )}
              </div>
            </div>

            {/* Rating Stars */}
            <div className='flex gap-1 justify-center text-xl mt-2 mb-3'>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`${
                    index < (product.rating || 5) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Product Details */}
            <div className='px-6 pb-6 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-slate-800 hover:text-red-500 transition-colors duration-300 mb-2 cursor-pointer'>
                {product.name}
              </h3>
              <p className='text-gray-600 text-sm mb-3'>{product.category}</p>
              <div className='flex items-center justify-center gap-3'>
                {product.oldPrice && (
                  <span className='text-gray-400 line-through'>${product.oldPrice}</span>
                )}
                <p className='text-lg md:text-xl font-bold text-red-500'>
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Products Button */}
      <div className='mt-12 flex justify-center px-4'>
        <Link to='/products'>
          <button className='px-8 py-3 border-2 border-red-500 rounded-full text-lg font-semibold 
            text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 
            hover:shadow-lg hover:-translate-y-1'>
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;
