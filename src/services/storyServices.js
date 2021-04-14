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
    const response = await api.get("/story");  
    const wordObj = response.data[0]
    console.log(wordObj)
    return wordObj;
  };


export {getWord}