import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "Fries",
  "🌭": "Hotdog",
  "🍿": "Popcorn",
  "🥪": "Sandwich"
};

const foods = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = foodDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this food in our menu!";
    }
    setMeaning(meaning);
  }

  function foodClickHandler(food) {
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Food Identifier 🍽</h1>
      <input onChange={foodChangeHandler}></input>
      <h2>{meaning}</h2>
      <h3>Foods we know</h3>
      {foods.map((food) => {
        return (
          <span
            onClick={() => foodClickHandler(food)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            key={food}
          >
            {food}
          </span>
        );
      })}
    </div>
  );
}
