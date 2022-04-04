import { useCategoriesContext } from "../context/categories-context"
import {ThreeDots} from "react-loader-spinner";
export const Filter = () =>{
    const {categories} = useCategoriesContext();
    console.log(categories)

    if(categories === 'loading')
    {
        return (<div>
            <ThreeDots color="#2BAD60" height="100" width="100" />
          </div>
          )
    }
return (     
    
    <div className="nav">
    <div className=" d-flex  text-primary border-color-gray w-100" id="navbar">
    <ul className="ul-list component-list padding-none w-100">
        <li className="margin-8 font-weight-bolder para3">Filter</li>
        <li className="margin-8 font-weight-bolder para4">Price</li>

        <div className="w-100 d-flex justify-content-between align-items-center margin-8-left">
            <div>10</div>
            <div>500</div>
        </div>
        <input className="w-100 input range" type="range" min="10" max="500" />

        <li className="margin-8 font-weight-bolder para4">Category</li>
        
           

           {categories.map((item)=>{
              return (
                <li className="margin-8" key={item.id}>
                <label>  
                    <input type="checkbox" name="category" className="input input-checkbox" 
                    id={item.categoryName}/>
                    {(item.categoryName)}
                 </label>
            </li>
              )
           })}

        <li className="margin-8 font-weight-bolder para4">Sort By</li>
        <li>
            
            <label><input type="radio" name="category" className="input input-checkbox" id="snacks"/>
            Price - Low to High</label>
          
            <label >   <input type="radio" name="category" className="input input-checkbox"  id="snacks"/>Price - High to Low</label>

        </li>
    </ul>
</div>
</div>)
}
