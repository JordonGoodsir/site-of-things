import { Link} from "react-router-dom";


const HomeMenu = () =>{  

    return(  
        <div class="homeMainHeading">  
            <div class="projectList"> 
            
            <h1 class="menuItem menuHoverable"><u>Projects</u></h1>   
          
            <Link to="/knotsAndCrosses"><h2 class="menuItem menuHoverable">Knots & Crosses</h2></Link>

            <h2 class="menuItem menuHoverable">Project</h2>  

            <h2 class="menuItem menuHoverable">Project</h2>  

            </div>
        </div>
    )
}

export default HomeMenu