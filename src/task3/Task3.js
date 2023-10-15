import React, { useState } from "react";
import "./task3.css";
const Task3 = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker" style={{ backgroundColor: selectedColor }}>
      <button className="button-cls" onClick={toggleColorList}>Pick a color</button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelection(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color">
          Selected Color:
          <div className="color-box">{selectedColor}</div>
        </div>
      )}
    </div>
  );
};

export default Task3;
