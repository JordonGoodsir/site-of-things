export default function (state, action) {
  switch (action.type) {

    case "setToggled": {
      return {
        ...state,
        toggled: action.data,
      }; 
    }    

    case "setWords": {
      return {
        ...state,
        words: action.data,
      }; 
    }    

    case "setStoryMenuStatus" :{ 
      return {
        ...state,
        storyMenuStatus: action.data,
      }; 
    }
    
    default:
      return state;
  }
}

