import Home from "./Home" 
import HomeMenu from "./HomeMenu" 
import { useGlobalState } from "../../config/store"  




const HomeController = () =>{  
    const { store } = useGlobalState();
    const { toggled } = store;   



    return(  
        <div class="homeMainHeading">  
      
            {toggled ? <HomeMenu/>: <Home/> }  
        </div>
    )
}

export default HomeController