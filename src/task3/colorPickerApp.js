import React, { useState } from "react";
import Task3 from "./Task3";

const ColorPickerApp = () => {
  const colors = [
    "#FF5733", // Example color codes
    "#4287f5",
    "#32CD32",
    "#FFD700",
    "#8A2BE2",
    "#FF69B4",
    "#00CED1",
    "#FF4500",
    "#7B68EE",
    "#20B2AA",
    "#FF6347",
    "#800080",
  ];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <Task3 colors={colors} />
    </div>
  );
};

export default ColorPickerApp;
