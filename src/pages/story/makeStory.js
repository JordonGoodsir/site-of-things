import { useGlobalState } from "../../config/store"  


const MakeStory = () =>{   
    const { store } = useGlobalState();
    const { words } = store;  
    
// let words = [] 

// words.push(getWord()) 

// console.log(words[0])

    return(  
        <div>   
            <form class="makeStoryCard">   

            Word prompts 
            {/* {new Array(5).forEach((v,i)=>{  
             console.log("poo")

                getWord() 
                .then((data) =>{  
                    console.log("poo")

                    console.log(data)
                })
            })}    */} 

            {/* {words} */}

            <label for="title">Story Title:</label>
            <input type="text" name="title"></input>  

            <label for="story">Story:</label>
            <textarea name="story"></textarea> 
            </form>
        </div>
    )
}

export default MakeStory