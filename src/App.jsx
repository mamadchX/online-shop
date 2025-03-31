import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import Store from "./pages/store/Store";
import Product from "./pages/product/Product";
import ShopContextProvider from "./context/shop-context";
import Cart from "./pages/cart/Cart";
function App() {
  return (
    <>
      <NavBar />
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<Product />} />
          <Route path="/store/category/:catid" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </>
  );
}

export default App;
