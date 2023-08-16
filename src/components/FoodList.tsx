import React, { Component } from "react";
import { connect } from "react-redux";
import { Food } from "../types";
import { bindActionCreators } from "redux";
import { addFoodById } from "../actions";

interface FoodListProps {
  foods: Food[];
  addFoodById: Function;
}

const FoodList = (props: FoodListProps) => {
  return (
    <section className="food-section">
      <h4>Available Foods</h4>
      <ul>
        {props.foods.map((food: Food) => {
          return (
            <li key={food.id}>
              <p>{food.name}</p>
              <button onClick={() => props.addFoodById(food.id)}>+</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return { foods: state.availableList };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ addFoodById }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
