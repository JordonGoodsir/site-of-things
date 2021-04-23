import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../config/store";

import MakeStory from "./makeStory";
import { getWord, getStory, postStory } from "../../services/storyServices";
import api from "../../config/api"; 


const Story = () => {
  const { store, dispatch } = useGlobalState();
  const { words,storyMenuStatus } = store;

  let [stories, setStories] = useState([]);

  useEffect(() => {
    extractStories();

  }, []);

  const openCreateMenu = async () => { 

    if (!storyMenuStatus) { 
        let tempWordStore = [];
        for (let i = 0; i < 5; i++) {
         tempWordStore.push(await getWord());
        }
        dispatch({
          type: "setWords",
          data: tempWordStore,
        }); 
    }



if(storyMenuStatus) {  
  dispatch({
    type: "setStoryMenuStatus",
    data: false,
  }) 
} else{  
  console.log("hello")
  dispatch({
    type: "setStoryMenuStatus",
    data: true,
  }); 
}

  
  };

  const extractStories = () => {
    getStory() 
    .then((story) => {
      setStories(story);
    });
  };

  return (
    <div>
      <h1>story page</h1>
      <div>{storyMenuStatus ? <MakeStory /> : ""} 
      </div> 
      
      <div class="storyCardGrid">
      {stories.map((v, i) => {
        return (
          <div class="storyCard">
            <h2 class="storyTitle"> Title: {v.title}</h2>
            <h3 class="storyWords">Prompts: {v.wordPrompts.join("  ")}</h3> 
            <br></br>
            <p class="storyBody">{v.body}</p>
          </div>
        );
      })} 
      </div> 
      <button onClick={openCreateMenu}>make Story</button>  

     <div class="bookContainer">
      <div class="loading"> 
     
      <div class="brownBit1"> 
      <div class="page1">  
      ------------------------------
      </div> 

      <div class="extraPage1"> 
        ------------------------------  
      </div> 
      </div> 
      
      <div class="brownBit2">  
      
      <div class="page2"> 
      ------------------------------
      </div>  


      </div>
     
      </div>  
      </div> 

    </div> 
  );
};

export default Story;
