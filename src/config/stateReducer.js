// export default function (state, action) {
//   switch (action.type) {
//     case "setTest": {
//       return {
//         ...state,
//         test: action.data,
//       };
//     }

//     default:
//       return state;
//   }
// } 

const stateReducer = (state, action) => {
  switch (action.type) {
    case "setTest": {
      return {
        ...state,
        test: action.data,
      };
    }

    default:
      return state;
  }
} 

export default stateReducer
