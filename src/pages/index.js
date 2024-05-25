import React, { useState, useEffect } from "react";
import fetchHoroscope from "../utils/fetchHoroscope";
import Horoscope from "../components/Horoscope";
import Layout from "../components/Layout";
import ToggleViewButton from "../components/ToggleViewButton";

const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const IndexPage = () => {
  const [horoscopes, setHoroscopes] = useState([]);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchHoroscopes = async () => {
      const promises = signs.map((sign) => fetchHoroscope(sign));
      const results = await Promise.all(promises);
      setHoroscopes(results);
    };
    fetchHoroscopes();
  }, []);

  const toggleView = () => {
    setIsGridView((prevState) => !prevState);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Daily Horoscopes</h1>
      <ToggleViewButton isGrid={isGridView} onClick={toggleView} />
      <Layout grid={isGridView}>
        {signs.map((sign, index) => (
          <Horoscope key={index} sign={sign} horoscope={horoscopes[index]} />
        ))}
      </Layout>
    </div>
  );
};

export default IndexPage;
