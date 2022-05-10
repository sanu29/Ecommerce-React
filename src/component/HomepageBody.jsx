import { useCategoriesContext } from "../context/categories-context"
import {ThreeDots} from "react-loader-spinner";
import {Link} from "react-router-dom";
import { useFilterContext } from "../context/filter-context";



export const HomepageBody = () =>
 {
 
  const {dispatch} = useFilterContext();
    const {categories} = useCategoriesContext();
    if(categories === 'loading')
    {
        return (<h1>
                <ThreeDots color="#2BAD60" height="100" width="100" />
              </h1>
              )
    }
else{
    return (
        <div className="container-main home-main">
        <div className="categories d-flex-row flex-wrap justify-content-evenly">
        {categories.map((item)=>{
        if(item.id<6) 
        {
             return(<Link to={'/product'} className="position-relative" key={item.id}
             onClick={()=>{
               categories.map((item)=>{
                dispatch({type:item.categoryName, payload:false})
                return ""
               })
              dispatch({type:item.categoryName, payload:true})
             }}
             >
            <img src={item.image} className="categories-img border-radius-md " alt="dairy" srcSet="" />
            <div className="category-overlay position-absolute opacity-75 bg-white font-weight-bolder text-align-center padding-4 ">
              {item.categoryName}
            </div>
           </Link>
        )}
        else{
          return ""
        }
        
        })}
   </div>

  <Link to={'/product'} className="  w-100 d-flex justify-content-center align-items-center boder-1 border-color-gray "
               onClick={()=>{
                categories.map((item)=>{
                 dispatch({type:item.categoryName, payload:true})
                 return ""
                })}}
  >
  <div
    className="hero container-main w-100 d-flex  justify-content-between align-items-center overflow-hidden border-radius-md secondary-two-color-bg ">
    <div
      className="hero-desc text-primary d-flex-column align-items-center w-50 justify-content-center padding-16 heading2 ">
      Fresh healthy Vegetables
      <div className="font-weight-bolder heading1">Min 10% Off </div>
    </div>
    <div className="w-75">
      <img src="https://instantgroceries.netlify.app/assets/images/vegetable.jpg" alt="discount" className="hero-img"
        srcSet="" />
    </div>
  </div>

  </Link>


  <div className="margin-top w-100 d-flex-column justify-content-center ">
    <h1 className=" text-primary margin-top-1 heading2 text-align-center"> Daily Needs</h1>
    <div className="comodities d-flex flex-wrap justify-content-evenly margin-top-1">

      {categories.map((item)=>{
      if(item.id>5 || item.id == 3)
      {
           return(
             <Link to={'/product'} className="card border-radius-sm" key={item.id}
             onClick={()=>{
              categories.map((item)=>{
               dispatch({type:item.categoryName, payload:false})
               return ""
              })
             dispatch({type:item.categoryName, payload:true})
            }}
             >
              <img className="card-img-main border-radius-sm " src={item.image} alt="hero" />
             <div className="card-primary">
              <div className="card-subtitle">{item.categoryName}</div>
              <h2 className="card-title"><span className="text-muted">Upto </span> 10% Off</h2>
            </div>
            </Link>
        )
        }
        return ""
      })}


    </div>
  </div>





  <div className="margin-top d-flex-column justify-content-center align-items-center w-100 features">

    <h1 className="heading2 margin-bottom text-primary">Our Features</h1>

    <div className="d-flex justify-content-center align-items-center responsive-image flex-wrap w-100 ">

      {<img src="https://instantgroceries.netlify.app/assets/images/feat.png" className="width-100" alt="features" srcSet="" /> }
    </div>

  </div>
</div>
)
}


}
