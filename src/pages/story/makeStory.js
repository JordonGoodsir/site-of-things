import { useGlobalState } from "../../config/store"   
import {postStory} from "../../services/storyServices" 



const MakeStory = () =>{   
    const { store } = useGlobalState();
    const { words } = store;   
    
// let words = [] 

// words.push(getWord()) 

// console.log(words[0]) 

const sendStory = (event) =>{  
    // event.preventDefault()
    event.preventDefault();
    console.log(event.target.title.value)  

    const storyObj = { 
        title:event.target.title.value,  
        // wordPrompts:event.target.title.value
        body: event.target.body.value
    } 

    console.log(words[0])



}

    return(  
        <div>   
            <form onSubmit={sendStory} class="makeStoryCard">   

            Word prompts  
            <label for="title">Story Title:</label>
            <input type="text" name="title"></input>  

            <label for="story">Story:</label>
            <textarea name="story"></textarea>   

            <input type="submit" value="Submit"></input>
            </form> 

        </div>
    )
}

export default MakeStory