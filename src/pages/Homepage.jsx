import { Header, Footer , HomepageBody} from "../component/AllComponnts"
import { useCategoriesContext } from "../context/categories-context";
import "../App.css"
import "./Homepage.css"
export const Homepage = () => 
{
 
    return (
      
        <div>
            <Header/>
            <HomepageBody/>
            <Footer/>
        </div>
    )
}