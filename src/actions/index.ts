export const ADD_FOOD = "ADD_FOOD";

export const addFoodById = (id: number) => {
  return {
    type: ADD_FOOD,
    id,
  };
};
