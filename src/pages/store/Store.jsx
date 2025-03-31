import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from '../../data/products';

function Store() {
  const { catid } = useParams(); 

  const normalizedCatid = decodeURIComponent(catid).replace(/\s+/g, '_').toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.category.replace(/\s+/g, '_').toLowerCase() === normalizedCatid
  );

  return (
    <div className="container mx-auto my-5">
      <h2>محصولات</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-5 gap-3 gap-x-0 justify-items-center w-[80%] mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link
              key={item.id}
              to={`/store/${item.id}`}
              className="shadow-md rounded flex justify-between flex-col gap-5 w-45 overflow-hidden"
            >
              <div className="w-full">
                <img src={item.image} alt="image" className="w-full" />
              </div>

              <div className="p-1">
                <p>{item.title}</p>
                <p className="line-clamp-2 text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between p-3">
                <span className="bg-gray-300 rounded p-1 text-xs">
                  {item.price} تومان
                </span>
                <span className="bg-gray-300 rounded p-1 text-xs">
                  {item.category}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600">محصولی یافت نشد!</p>
        )}
      </div>
    </div>
  );
}

export default Store;