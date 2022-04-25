import { Header } from "../component/Header"
import { Footer } from "../component/Footer"
import { useCartContext } from "../context/cart-context"
import { CartBody } from "../component/CartBody"
import "./cart.css"
import { CheckoutBody } from "../component/CheckoutBody"
export const Checkout = () => 
{

    const {cart} = useCartContext()

    return (
        <>
       <Header/>
        <CheckoutBody/>
       <Footer/>
        </>
    )
}