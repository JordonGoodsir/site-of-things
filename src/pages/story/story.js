import React, { useState } from 'react';
import { useGlobalState } from "../../config/store"  

import MakeStory from "./makeStory"




const Story = () =>{  
    // const { store } = useGlobalState();
    // const { toggled } = store;  
    
    const [menuStatus, setMenuStatus] = useState(false);


    const openCreateMenu = () =>{  
        menuStatus ? setMenuStatus(false) : setMenuStatus(true) 
    }

    return(  
        <div>   
        <h1>story page</h1>  
        <div>{menuStatus ? <MakeStory/> : ""}</div>
        <button onClick={openCreateMenu}>make Story</button>
        </div>
    )
}

export default Story