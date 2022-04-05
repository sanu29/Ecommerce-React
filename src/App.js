import "./App.css"
import "./component/style.css"
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage, ProductListing,Wishlist, Cart } from "./pages/AllPages"
import MockmanEs from "mockman-js";
import { Login } from "./pages/Login";
import { Signup } from "./pages/signup";
import { PrivateRoute } from "./component/PrivateRoutes";
function App() {
  return (
    <div>
  
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/product" element={<ProductListing/>}/>
            <Route element={<PrivateRoute/>}>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/cart" element={<Cart/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/mock" element={<MockmanEs/>}/>
          </Routes>

    </div>
  );
}

export default App;
