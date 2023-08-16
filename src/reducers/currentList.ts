import { ADD_FOOD } from "../actions";
import { createFood } from "./helpers";

const currentList = (state = [], action: any) => {
  switch (action.type) {
    case ADD_FOOD:
      return [...state, createFood(action.id)];
    default:
      return state;
  }
};

export default currentList;
