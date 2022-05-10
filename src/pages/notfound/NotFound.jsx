import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import { notfound } from "../../images/Images"
import "../../App.css"
export const NotFound = () =>{
    return(
        <>
        <Header/>
        <div className="wishlist-main">
        <h2 className="font-color-primary">Page Not Found</h2>
            <div className="comodities d-flex flex-wrap justify-content-center">
      
        <div><img src={notfound} className="notfoundimage justify-self-center margin-16" alt="notFound"/></div>
        </div>
        </div>
        <Footer/>
        </>
        )
}