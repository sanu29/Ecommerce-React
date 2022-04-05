import {Link} from "react-router-dom"
import { useAuthContext } from "../context/auth-context"

export const Header = () => {

    const {isLogin, setisLogin, user, setUser} = useAuthContext();

    return (
        <div
        className="header-simple bg-primary d-flex-row border-radius-none padding-none margin-none justify-content-between">

        <Link to={'/'}  className="logo">Instant-Grocery</Link>
        <div className="d-flex align-items-center text-primary border-color-gray border-radius-sm overflow-hidden search">
            <input type="text" className="input-sm box-shadow-none margin-none search" placeholder="Seacrh..."/>
            <div className="material-icons align-self-center bg-white padding-4 text-color-primary">search</div>
        </div>


        <div className="d-flex-row menu-icons justify-content-end">

        {isLogin === true ? 
        <Link  to={''} onClick={()=>setisLogin(false)} className="align-self-center heading-3 btn">Logout</Link>:
        <Link  to={'/login'} className="align-self-center heading-3 btn">Login</Link>
        }  
            
            <Link to={'/cart'} className="heading-3 margin-8 material-icons header-icon">shopping_cart</Link>
            <Link to={'/wishlist'} className="heading-3 margin-8 material-icons header-icon">favorite</Link>
            {(isLogin)?<div className="d-flex justify-content-center align-items-center"><Link to={''} className="heading-2  username  ">Hie, {(user.firstName).toUpperCase()}</Link></div>:null}
        </div>
    </div>

    )
}