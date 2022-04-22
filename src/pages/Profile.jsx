import { Link } from "react-router-dom"
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"
import "./profile.css"
import { ProfileSideBar } from "../component/ProfileSideBar"
import { useAuthContext } from "../context/auth-context"

export const Profile =()=>{
    const {isLogin, setisLogin, user, setUser, Logout} = useAuthContext();
    return <>
    <Header/>
    <div className="profile-contianer">       
    <ProfileSideBar/>
    <div className="profile-main padding-32">
    <div className="font-color-primary heading-2">Personal Information</div>
        <div className="d-flex align-items-center justify-content-center padding-32 ">

           <div>
               <table className="profile-data">
               <tr className="menu-option d-flex ">
                   <td className="w-100 text-align-left">First Name</td>
                   <td className="w-100 text-align-left">{user.firstName}</td>
               </tr>
               <tr className="menu-option d-flex ">
                   <td  className="w-100 text-align-left">Last  Name</td>
                   <td className="w-100 text-align-left">{user.lastName}</td>
               </tr>
               <tr className="menu-option d-flex ">
                   <td  className="w-100 text-align-left">Email Id</td>
                   <td className="w-100 text-align-left">{user.email}</td>
               </tr>
           </table>
           </div>
        </div>
        
      </div>
      </div>
    <Footer/>
    </>;
}


