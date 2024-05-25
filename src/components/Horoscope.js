import React from "react";
import useFetchHoroscope from "../hooks/useFetchHoroscope";

const Horoscope = ({ sign }) => {
  const { horoscope, loading } = useFetchHoroscope(sign);
  console.log(horoscope);

  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{sign}</h2>
      {loading ? <p>Loading...</p> : <p>{horoscope}</p>}
    </div>
  );
};

export default Horoscope;
