import { Categories, Img } from "./images"
import { useCategoriesContext } from "../context/categories-context"
import {ThreeDots} from "react-loader-spinner";
import {Link} from "react-router-dom";
import { useProductContext } from "../context/products-context";


export const Products = () =>{
    const {products} = useProductContext()
    console.log(products)

    if(products === 'loading')
    {
            return <ThreeDots color="#2BAD60" height="100" width="100" /> 
    }
    return (
        <>         
            <div className="main">
             <div className="comodities d-flex justify-content-around flex-wrap">
                 {products.map((prod)=>{
                    return (<>
                    <div class="card border-radius-sm margin-8 d-flex justify-center align-items-center">
                    <div class="position-relative">
                        <img class="card-img-main border-radius-sm margin-16 "
                            src={prod.image} alt="food"/>
                        <i
                            class="material-icons btn btn-icon  position-absolute card-icon-dismiss btn-danger-outline">favorite</i>

                    </div>
                    <div class="card-primary">
                        <div class="card-title text-color-primary font-weight-bold">{prod.title}</div>
                        <h2 class="card-subtitle"><span class="text-muted">₹</span>{prod.price}/{prod.quantity}</h2>
                    </div>
                    <div class="card-action">
                        <div class="btn border-radius-sm btn-primary w-100 margin-none text-align-center addtocart"> Add to cart
                        </div>
                    </div>
                </div>
                    </>)
                 
                 })}
                 
                 </div>
                 </div>
             </>
    )
}