
import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import { OrderBody } from "../../component/OrderBody";
import { ProfileSideBar } from "../../component/ProfileSideBar"

export const Order = () =>{

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