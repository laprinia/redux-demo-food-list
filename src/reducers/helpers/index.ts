import foods from "../../data/foods.json";
export const createFood = (id: number) => {
  return foods.find((food) => food.id === id);
};
