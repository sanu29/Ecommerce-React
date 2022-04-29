import { AddressBody } from "../../component/AddressBody";
import { Footer} from "../../component/Footer"
import { Header } from "../../component/Header"
import { ProfileSideBar } from "../../component/ProfileSideBar"

export const Address = () =>{

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