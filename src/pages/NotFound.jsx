import { Footer } from "../component/Footer"
import { Header } from "../component/Header"
import { notfound } from "../images/Images"
import "../App.css"
export const NotFound = () =>{
    return(
        <>
        <Header/>
        <div class="wishlist-main">
            <div class="comodities d-flex flex-wrap">
        <h2 className="font-color-primary">Page Not Found</h2>
        <div><img src={notfound} className="notfoundimage justify-self-center margin-16"/></div>
        </div>
        </div>
        <Footer/>
        </>
        )
}