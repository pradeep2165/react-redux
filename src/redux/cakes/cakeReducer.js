import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCake: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: numOfCake - 1,
      };
    default:
      return state;
  }
};

export default reducer;
