import { useCategoriesContext } from "../context/categories-context"
import {ThreeDots} from "react-loader-spinner";
import { useFilterContext } from "../context/filter-context";

export const Filter = () =>{
    const {categories} = useCategoriesContext();
  
    const {state, dispatch} = useFilterContext();
    if(categories === 'loading')
    {
        return (<div>
            <ThreeDots color="#2BAD60" height="100" width="100" />
          </div>
          )
    }
return (     
    
    <div className="nav filter">
        
    <div className=" d-flex  text-primary border-color-gray w-100" id="navbar">
    <ul className="ul-list component-list padding-none w-100">
    <div className="sortby">
    <li className="margin-8 font-weight-bolder para4">Sort By</li>
        <li>
 
            <label><input type="radio" name="category" className="input input-checkbox" id="snacks"
            onChange={(e)=>e.target.checked === true ? dispatch({type:'lowtohigh', payload:true}): dispatch({type:'lowtohigh', payload:false})}/>
            Price - Low to High</label>
            </li>
            <li>
            <label > 
                  <input type="radio" name="category" className="input input-checkbox"  id="snacks"
                  onChange={(e)=>e.target.checked === true ? dispatch({type:'hightolow', payload:true}): dispatch({type:'hightolow', payload:false})}/>
                  Price - High to Low
            </label>
             </li>
             </div>
        
        <li className="margin-8 font-weight-bolder para4 d-flex justify-content-between  align-items-center">
                <div>Category </div>
                <span class="material-icons cursor-pointer margin-none"
                onClick={()=>dispatch({type:'remove', payload:true})}
                >
                        filter_alt_off
                    </span>
        </li>
        
           

           {categories.map((item)=>{
               const category = item.categoryName
              return (
                <li className="margin-8" key={item.id}>
                <label>  
                    <input type="checkbox" name="category" className="input input-checkbox" 
                    id={item.categoryName} onChange ={(e)=>e.target.checked === true ? dispatch({type:item.categoryName, payload:true}): dispatch({type:item.categoryName, payload:false})}
                    checked={ state[item.categoryName]} />
                    {(item.categoryName)}
                    
                 </label>
            </li>
              )
           })}

    <div className="rating-div">
        <li className="margin-8 font-weight-bolder para4 ">Rating</li>
 
        <li>
        <label>
            <input type="radio" name="rating" className="input input-checkbox" id="4andabove"
                onChange={(e)=>e.target.checked === true ? dispatch({type:'rating', payload:4}):dispatch()}
            />
             4 and Above</label>
        </li>
        <li>
        <label>
            <input type="radio" name="rating" className="input input-checkbox" id="4andabove"
            onChange={(e)=>e.target.checked === true ? dispatch({type:'rating', payload:3}):dispatch()}/>
             3 and Above</label>
        </li>
        <li>
        <label>
            <input type="radio" name="rating" className="input input-checkbox" id="4andabove"
            onChange={(e)=>e.target.checked === true ? dispatch({type:'rating', payload:2}):dispatch()}/>
             2 and Above</label>
        </li>
        <li>
        <label>
            <input type="radio" name="rating" className="input input-checkbox" id="4andabove"
            onChange={(e)=>e.target.checked === true ? dispatch({type:'rating', payload:1}):dispatch()}/>
             1 and Above</label>
        </li>
    </div>
    </ul>
</div>
</div>)
}
