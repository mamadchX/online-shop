import React, { useContext } from "react";
import { products } from "../../data/products";
import { ShopContext } from "../../context/shop-context";

function Cart() {
  const { cartitem, addToCart, removeFromCart } = useContext(ShopContext);

  // Calculate the total price of all items in the cart
  const totalPrice = Object.entries(cartitem).reduce((total, [productId, quantity]) => {
    const product = products.find((p) => p.id === parseInt(productId));
    return product ? total + product.price * quantity : total;
  }, 0);

  return (
    <div className="container mx-auto mt-3 mb-10 text-[0.8rem]">
      <h2 className="text-2xl font-bold mb-4 text-[1.2rem]">سبد خرید</h2>
      {Object.keys(cartitem).length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <div className="my-5">
          {Object.entries(cartitem).map(([productId, quantity]) => {
            const product = products.find((p) => p.id === parseInt(productId));
            if (!product || quantity === 0) return null;

            return (
              <div key={product.id} className="flex items-center border-b py-4">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover mr-4"
                />
                {/* Product Details */}
                <div className="flex-grow">
                  <h3 className="font-semibold my-2">{product.title}</h3>
                  <p className="text-gray-600">قیمت: {product.price.toLocaleString()} تومان</p>
                  <p className="text-gray-600">تعداد: {quantity}</p>
                </div>
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    className="bg-red-400 text-white px-3 py-1 rounded"
                    onClick={() => removeFromCart(product.id)}
                    disabled={quantity === 0} // Disable if quantity is zero
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    className="bg-green-400 text-white px-3 py-1 rounded"
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
          {/* Total Price */}
          <div className="mt-6 font-bold text-lg text-[0.9rem]">
            جمع کل: {totalPrice.toLocaleString()} تومان
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;