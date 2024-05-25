import React from "react";

const Horoscope = ({ sign, horoscope }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{sign}</h2>
      <p>{horoscope}</p>
    </div>
  );
};

export default Horoscope;
