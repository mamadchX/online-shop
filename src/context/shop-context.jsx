import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

 const ShopProvider = ({ children }) => {
  // Initialize cart items from Local Storage or set to an empty object
  const initialCart = JSON.parse(localStorage.getItem("cart")) || {};
  const [cartitem, setCartitem] = useState(initialCart);

  // Function to add an item to the cart
  const addToCart = (productId) => {
    setCartitem((prevCart) => {
      const updatedCart = { ...prevCart, [productId]: (prevCart[productId] || 0) + 1 };
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to Local Storage
      return updatedCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartitem((prevCart) => {
      if (!prevCart[productId]) return prevCart; // If product doesn't exist in cart, do nothing
      const updatedCart = { ...prevCart, [productId]: prevCart[productId] - 1 };
      if (updatedCart[productId] <= 0) {
        delete updatedCart[productId]; // Remove the product if quantity is zero
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to Local Storage
      return updatedCart;
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCartitem({});
    localStorage.removeItem("cart"); // Clear Local Storage
  };

  // Update state when Local Storage changes (optional)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCartitem(storedCart);
    }
  }, []);

  return (
    <ShopContext.Provider value={{ cartitem, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;