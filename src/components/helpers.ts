import { Food } from "../types";

export const getTotalValue = (foodList: Food[], property: string) => {
  return foodList.reduce(
    (accum: number, food: Food) => accum + Number(food[property as keyof Food]),
    0,
  );
};
