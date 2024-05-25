import React from "react";

const ToggleViewButton = ({ isGrid, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
      {isGrid ? "Switch to List View" : "Switch to Grid View"}
    </button>
  );
};

export default ToggleViewButton;
