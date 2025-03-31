import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { ShopContext } from "../../context/shop-context";

function Product() {
  const { id } = useParams(); 
  const { cartitem, addToCart, removeFromCart } = useContext(ShopContext);


  const product = products.find((item) => item.id === parseInt(id));

  const cartItemAmount = cartitem[product?.id] || 0;

  if (!product) {
    return <div>محصول یافت نشد</div>; 
  }

  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-12 gap-4 mb-4">

          <div className="col-span-3">
            <img src={product.image} alt={product.title} className="w-full" />
            <button
              className="bg-sky-400 p-2 rounded mt-2 w-full"
              onClick={() => addToCart(product.id)}
            >
              اضافه کردن به سبد خرید
            </button>
            <span className="mt-2 block">
              تعداد : {cartItemAmount}
            </span>
            <button
              className="bg-red-400 p-2 rounded mt-2 w-full"
              onClick={() => removeFromCart(product.id)}
            >
              حذف از سبد خرید
            </button>
          </div>

          <div className="col-span-9">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="font-semibold">قیمت: {product.price} تومان</span>
              <span className="ml-4">دسته بندی: {product.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;