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
import { useAuthContext } from "./context/auth-context";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import { Address } from "./pages/Address";
function App() {
  const {isLogin} = useAuthContext
  return (
    <div>
  
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/product" element={<ProductListing/>}/>
            <Route element={<PrivateRoute/>}>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Address" element={<Address/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/mock" element={<MockmanEs/>}/>
            <Route path="/*" element={<NotFound/>}/>

          </Routes>

    </div>
  );
}

export default App;
