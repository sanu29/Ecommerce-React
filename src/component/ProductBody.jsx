import { Categories, Img } from "./images"
import { useCategoriesContext } from "../context/categories-context"
import {ThreeDots} from "react-loader-spinner";
import {Link} from "react-router-dom";
import { useProductContext } from "../context/products-context";
import { useFilterContext } from "../context/filter-context";
import { FilterCategory } from "./FilterCategory";
import { useState } from "react";
import { Rating } from 'react-simple-star-rating'

export const Products = () =>{
    let {products} = useProductContext()
    const {state, dispatch} = useFilterContext();
    const [res, setRes] = useState()

        
    if(products === 'loading')
    {
            return <ThreeDots color="#2BAD60" height="100" width="100" /> 
    }
    else{

     
       let filteredprods  = FilterCategory(state,products)
       if(state.hightolow === false && state.lowtohigh ===false)
       {
        filteredprods = filteredprods.sort((a,b)=>{
                 return a.id - b.id
            })}
    return (
        <>         
            <div className="main">
             <div className="comodities d-flex justify-content-around flex-wrap">
                 {filteredprods.map((prod,key)=>{
                    return (<li className="product-list"  key={prod.id} >
                    <div className="card card-product border-radius-sm margin-8 d-flex justify-center align-items-center">
                    <div className="position-relative">
                        <img className="card-img-main card-img-main-product border-radius-sm margin-16 "
                            src={prod.image} alt="food"/>
                                   
                         
                       
                        <i
                            className="material-icons btn btn-icon  position-absolute card-icon-dismiss btn-danger-outline">favorite</i>

                    </div>
                    <div className="card-primary">
                        <div className="card-title text-color-primary font-weight-bold">{prod.title}</div>
                        <h2 className="card-subtitle"><span className="text-muted">₹</span>{prod.price}/{prod.quantity}</h2>
                        <Rating initialValue={prod.rating} readonly={true} className='material-icons-rating'  size={20}/>
                    </div>

                    <div className="card-action">
                        <div  key={key}  className="btn border-radius-sm btn-primary w-100 margin-none text-align-center addtocart"> Add to cart
                        </div>
                    </div>
                </div>
                    </li>)
                 
                 })}
                 
                 </div>
                 </div>
             </>
    )}
}