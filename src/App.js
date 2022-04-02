import "./App.css"
import "./component/style.css"
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage, ProductListing,Wishlist, Cart } from "./pages/AllPages"
import MockmanEs from "mockman-js";
function App() {
  return (
    <div>
  
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/product" element={<ProductListing/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Homepage/>}/>
            <Route path="/signup" element={<Homepage/>}/>
            <Route path="/mock" element={<MockmanEs/>}/>
          </Routes>

    </div>
  );
}

export default App;
