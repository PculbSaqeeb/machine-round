import React from "react";

const Light = ({ color, activeColor, timeLeft }) => {
  const isActive = color === activeColor;
  return (
    <div
      style={{ backgroundColor: color }}
      className={`w-28 h-28 rounded-full flex items-center justify-center transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-20"
      }`}
    >
        {isActive && <span className="text-white text-2xl font-bold">{timeLeft}</span>}
    </div>
  );
};

export default Light;
