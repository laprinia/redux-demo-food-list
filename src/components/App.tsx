import * as React from "react";
import FoodList from "./FoodList";
import CurrentList from "./CurrentList";
import NutritionalValues from "./NutritionalValues";

const App = () => {
  return (
    <>
      <h1>Nutritional App</h1>
      <section className="main-section">
        <FoodList />
        <CurrentList />
      </section>
      <NutritionalValues />
    </>
  );
};
export default App;
