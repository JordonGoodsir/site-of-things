import { Link} from "react-router-dom";  
import { useGlobalState } from "../../config/store" 






const HomeMenu = () =>{  
    
    const { dispatch } = useGlobalState();

// makes sure that toggled is set to false, else you will have to press hamburger menu again to get to page
    const toPage = () =>{  
        dispatch({
            type: "setToggled",
            data: false,
          });
    
    }

    return(  
        <div class="homeMainHeading">  
            <div class="projectList"> 
            
            <h1 class="menuItem menuHoverable"><u>Projects</u></h1>   
          
            <Link to="/knotsAndCrosses" onClick={toPage}><h2 class="menuItem menuHoverable">Knots & Crosses</h2></Link>

            <h2 class="menuItem menuHoverable">Project</h2>  

            <h2 class="menuItem menuHoverable">Project</h2>  

            </div>
        </div>
    )
}

export default HomeMenu