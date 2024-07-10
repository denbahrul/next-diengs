// src/components/PriceRangeSlider.js
import React, { useState } from "react";

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(18);
  const [maxValue, setMaxValue] = useState(50);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-sm">
      <div className="text-gray-700 mb-2 flex justify-between text-sm font-medium">
        <span>Price Range Per Night</span>
      </div>
      <div className="relative">
        <div className="mb-4 flex justify-between">
          <span className="bg-green-500 text-white rounded px-2 py-1 text-xs">
            ${minValue}
          </span>
          <span className="bg-green-500 text-white rounded px-2 py-1 text-xs">
            ${maxValue}
          </span>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="bg-gray-200 h-1 w-full"></div>
            <div
              className="bg-green-500 absolute left-0 h-1"
              style={{ left: `${minValue}%`, right: `${100 - maxValue}%` }}
            ></div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={minValue}
            onChange={handleMinChange}
            className="pointer-events-none absolute h-1 w-full appearance-none bg-transparent"
            style={{ zIndex: 1 }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={maxValue}
            onChange={handleMaxChange}
            className="pointer-events-none absolute h-1 w-full appearance-none bg-transparent"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
