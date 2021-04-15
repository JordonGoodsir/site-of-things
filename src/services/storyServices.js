// const getWord = async() =>{   
//     console.log("askjdkjahsf") 


//     // const response = await fetch("http://localhost:3009/story") 
//     // const word = JSON.stringify(response)
//     // console.log(word)  
//     // return word 

//     await fetch("http://localhost:3009/story") 
//     .then((word) => console.log(word)) 
//     .catch(console.log)
// }   

import api from "../config/api"; 

const getWord = async () => { 
  console.log("hit")
    // const response = await api.get("/story");   

    // return response.data

    await api.get("/story") 
    .then((response)=>{ 
      console.log(response.data[0].word)  
      return response.data
    }) 
    // return "hello"

  };


export {getWord}