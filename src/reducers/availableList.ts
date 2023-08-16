import foods from "../data/foods.json";
import { ADD_FOOD } from "../actions";

const availableList = (state = foods, action: any) => {
  //switch statement is the actual reducing part
  switch (action.type) {
    case ADD_FOOD:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default availableList;
