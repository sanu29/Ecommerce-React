import { AddressBody } from "../component/AddressBody";
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"
import { OrderBody } from "../component/OrderBody";
import { ProfileSideBar } from "../component/ProfileSideBar"
import { useAuthContext } from "../context/auth-context";

export const Order = () =>{
    const {isLogin, setisLogin, user, setUser, Logout} = useAuthContext();
    return(
        <>
    <Header/>
    <div className="profile-contianer">       
    <ProfileSideBar/>
    <OrderBody/>
      </div>
    <Footer/>
    </>
        )
}