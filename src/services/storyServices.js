const getWord = async() =>{  
    const response = await fetch("http://localhost:3009/story") 
    const word = JSON.stringify(response)
    console.log(word)  
    console.log("askjdkjahsf")
    return word
}  


export {getWord}