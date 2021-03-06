export default function (state, action) {
  switch (action.type) {

    case "setToggled": {
      return {
        ...state,
        toggled: action.data,
      }; 
    } 
    
    default:
      return state;
  }
}

// const stateReducer = (state, action) => {
//   switch (action.type) {
//     case "setToggled": {
//       return {
//         ...state,
//         toggled: action.data,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export default stateReducer;
