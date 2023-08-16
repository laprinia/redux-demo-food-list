import React, { Component } from "react";
import { connect } from "react-redux";
import { Food } from "../types";
import { getTotalValue } from "./helpers";

interface FoodListProps {
  foods: Food[];
}

const NutritionalValues = (props: FoodListProps) => {
  return (
    <section className="nutritional-section">
      {props.foods.length > 0 && (
        <ul>
          <li>{`Fat ${getTotalValue(props.foods, "fat")}`}</li>
          <li>{`Sodium ${getTotalValue(props.foods, "sodium")}`}</li>
          <li>{`Carbs ${getTotalValue(props.foods, "carbs")}`}</li>
          <li>{`Protein ${getTotalValue(props.foods, "protein")}`}</li>
        </ul>
      )}
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    foods: state.currentList,
  };
};
export default connect(mapStateToProps, null)(NutritionalValues);
