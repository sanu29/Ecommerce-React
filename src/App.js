import "./App.css"
import {Homepage,Address,Login,Signup,Cart,Checkout,NotFound,Order,ProductListing,ProductMainPage,Profile,Wishlist} from "./pages/index"
import { Routes, Route } from "react-router-dom";
import MockmanEs from "mockman-js";
import { PrivateRoute } from "./component/PrivateRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RestrictedRoutes } from "./component/RestrictedRoutes";
function App() {

  return (
    <div>
  
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/product" element={<ProductListing/>}/>
            <Route path="/product/:productId" element={<ProductMainPage/>}/>
            <Route element={<PrivateRoute/>}>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Address" element={<Address/>}/>
            <Route path="/Order" element={<Order/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            </Route>
            <Route element={<RestrictedRoutes/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            </Route>
            <Route path="/mock" element={<MockmanEs/>}/>
            <Route path="/*" element={<NotFound/>}/>

          </Routes>
          <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    </div>
  );
}

export default App;
