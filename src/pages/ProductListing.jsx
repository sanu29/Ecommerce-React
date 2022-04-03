import "../App.css"
import "./Products.css"
import {Header, Footer , Filter, Products} from "../component/AllComponents"
export const ProductListing = () => 
{
    return (
        <>
            <Header/>
            <Filter/>
            <Products/>
            <Footer/>

        </>
    )
}