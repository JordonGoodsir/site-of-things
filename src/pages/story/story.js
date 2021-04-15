import React, { useState, useEffect } from 'react';
import { useGlobalState } from "../../config/store"  

import MakeStory from "./makeStory" 
import {getWord} from "../../services/storyServices" 
import api from "../../config/api"; 






const Story = () =>{  
    const { store,dispatch } = useGlobalState();
    const { words } = store;  
    
    const [menuStatus, setMenuStatus] = useState(false); 
    let [test, setTest] = useState("");


    useEffect(() => {
        renderWords() 
        console.log(test)
      });

    const openCreateMenu =  () =>{  
        menuStatus ? setMenuStatus(false) : setMenuStatus(true)  
        
    //     dispatch({
    //         type: "setWords",
    //         data: getWord() 
    //           .then((data)=>{  
    //         console.log(data)
    //         return data
    //     }) ,
    //       }); 

    //       console.log(typeof words)

    //   console.log(words)
    }  

    const renderWords = async() =>{ 
        await api.get("/story") 
        .then((response)=>{  
            test = [response.data]  
            
            // setTest(test)
console.log(test)          
            
        //   return response.data[0].word 
        })
    }


    return(  
        <div>   
        <h1>story page</h1>  
        { 
      console.log(test)
        }  
        <div>{menuStatus ? <MakeStory/> : ""}</div>
        <button onClick={openCreateMenu}>make Story</button>
        </div>
    )
}

export default Story