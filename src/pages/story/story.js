import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../config/store";

import MakeStory from "./makeStory";
import { getWord, getStory, postStory } from "../../services/storyServices";
import api from "../../config/api"; 


const Story = () => {
  const { store, dispatch } = useGlobalState();
  const { words } = store;

  const [menuStatus, setMenuStatus] = useState(false);
  let [stories, setStories] = useState([]);
  let [wordsStore, setWordsStore] = useState("");

  useEffect(() => {
    extractStories();
    // renderWords()
    // console.log(test)
  }, []);

  const openCreateMenu = async () => { 


    if (!menuStatus) { 
        let tempWordStore = [];
        for (let i = 0; i < 5; i++) {
         tempWordStore.push(await getWord());
        }
        console.log("hello");
        console.log(tempWordStore);
        // setWordsStore(tempWordStore) 
        dispatch({
          type: "setWords",
          data: tempWordStore,
        }); 
    }


    menuStatus ? setMenuStatus(false) : setMenuStatus(true);


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
      <div>{menuStatus ? <MakeStory /> : ""}</div>
      {stories.map((v, i) => {
        return (
          <div>
            <h2>{v.title}</h2>
            <h2>{v.wordPrompts}</h2>
            <p>{v.body}</p>
          </div>
        );
      })}
      <button onClick={openCreateMenu}>make Story</button> 

    </div>
  );
};

export default Story;
