import { Header, Footer } from "../../component/AllComponents"
import "../../App.css"
import "../Wishlist/WishList.css"
import { WishlistBody } from "../../component/WishlistBody"
export const Wishlist = () => 
{

    return (
      
        <div>
              <Header/>
              
            <WishlistBody/>
            
            <Footer/>
        </div>
    )
}