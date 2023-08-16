import React, { Component } from "react";
import { connect } from "react-redux";
import { Food } from "../types";
import { bindActionCreators } from "redux";
import { addFoodById } from "../actions";
import * as fs from "fs";

interface FoodListProps {
  foods: Food[];
}

const CurrentList = (props: FoodListProps) => {
  return (
    <section className="food-section">
      <h4>Current Menu</h4>
      <ul>
        {props.foods.map((food: Food) => {
          return (
            <li key={food.id}>
              <p>{food.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return { foods: state.currentList };
};

export default connect(mapStateToProps, null)(CurrentList);
