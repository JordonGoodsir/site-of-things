import { useGlobalState } from "../../config/store";
import { postStory } from "../../services/storyServices";
import { Draggable, DraggableCore } from "react-draggable"; // The default

const MakeStory = () => {
  const { store } = useGlobalState();
  const { words } = store;

  const sendStory = (event) => {
    // event.preventDefault()
    event.preventDefault();
    console.log(event.target.title.value);

    const storyObj = {
      title: event.target.title.value,
      wordPrompts: words,
      body: event.target.body.value,
    };

    postStory(storyObj);

    console.log(words[0]);
  };

  return (
    <div>
      <Draggable>
        <div class="makeStoryForm">
          <form onSubmit={sendStory} class="makeStoryCard">
            <div class="closeTab">X</div>

            <h2 class="wordPropmtsTitle">Word prompts</h2>
            <div class="wordPrompts">
              {words.map((v, i) => {
                return <p class="word">{v}</p>;
              })}
            </div>
            <h2 for="title">Story Title:</h2>
            <input class="formField" type="text" name="title" required></input>

            <h2 for="story">Story:</h2>
            <textarea class="formField" name="body" required></textarea>

            <input class="storySubmit" type="submit" value="Submit"></input>
          </form>
        </div>
      </Draggable>
    </div>
  );
};

export default MakeStory;
