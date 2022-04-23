import { AddressBody } from "../component/AddressBody";
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"
import { ProfileSideBar } from "../component/ProfileSideBar"
import { useAuthContext } from "../context/auth-context";

export const Address = () =>{
    const {isLogin, setisLogin, user, setUser, Logout} = useAuthContext();
    return(
        <>
    <Header/>
    <div className="profile-contianer">       
    <ProfileSideBar/>
    <AddressBody/>
      </div>
    <Footer/>
    </>
        )
}