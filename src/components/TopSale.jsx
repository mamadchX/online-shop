import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

function TopSale() {
    return (
        <div className='container mx-auto justify-center flex'>
            <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[60%] gap-2 flex text-[0.6rem] overflow-scroll justify-center bg-pink-600 rounded p-3'>
                {products.map((item) => {
                    if (item.id == 2 || item.id == 6 || item.id == 16 || item.id == 12 || item.id == 4) {
                        return (
                            <Link to={`/store/${item.id}`} key={item.id} className='border rounded bg-white p-1 flex flex-col items-center w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40'>
                                {/* تصویر محصول */}
                                <div className='h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36'>
                                    <img src={item.image} alt='image' className='w-full h-full object-cover' />
                                </div>

                                {/* اطلاعات محصول */}
                                <div className='text-center mt-1'>
                                    <h3 className='my-0.5 text-[0.6rem] sm:text-xs font-semibold'>{item.title}</h3>
                                    <span className='line-through text-gray-500 text-[0.5rem] sm:text-[0.6rem]'>{item.price}</span><br />
                                    <span className='text-green-600 font-bold text-[0.6rem] sm:text-xs'>{item.price}</span>
                                </div>
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default TopSale;