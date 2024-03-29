import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../config/store";

import MakeStory from "./makeStory";
import StoryLoadingAnimation from "./StoryLoadingAnimation";
import { getWord, getStory, postStory } from "../../services/storyServices";
import api from "../../config/api";

const Story = () => {
  const { store, dispatch } = useGlobalState();
  const { words, storyMenuStatus } = store;

  let [stories, setStories] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    extractStories();
  }, []);

  const openCreateMenu = async () => {
    if (!storyMenuStatus) {
      setLoading(true);
      // let tempWordStore = [];
      // for (let i = 0; i < 5; i++) {
      //  tempWordStore.push(await getWord());
      // }
      // dispatch({
      //   type: "setWords",
      //   data: tempWordStore,
      // });

      // }
      await Promise.all(
        [1, 2, 3, 4, 5].map((v, i) => {
          return getWord();
        })
      )
        .then((things) => {
          console.log(things);
          dispatch({
            type: "setWords",
            data: things,
          });
        })
        .catch(console.log);

      setLoading(false);
    }

    if (storyMenuStatus) {
      dispatch({
        type: "setStoryMenuStatus",
        data: false,
      });
    } else {
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
    }) 
    .catch(console.log())
  };

  return (
    <div class="storyPage">
      <h1>Create Your Story</h1>
      <div>{storyMenuStatus ? <MakeStory /> : ""}</div>

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

      {loading ? <StoryLoadingAnimation /> : ""}
      <footer>
        <button class="makeStoryButton" onClick={openCreateMenu}>
          Create Story
        </button>
      </footer>
    </div>
  );
};

export default Story;
