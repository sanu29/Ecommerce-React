import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import "./profile.css"
import { ProfileSideBar } from "../../component/ProfileSideBar"
import { useAuthContext } from "../../context/auth-context"
import { ProfileBody } from "../../component/ProfileBody"

export const Profile =()=>{
    const {user} = useAuthContext();
    return <>
    <Header/>
    <div className="profile-contianer">       
    <ProfileSideBar/>
    {ProfileBody(user)}
      </div>
    <Footer/>
    </>;
}



