import React, { useState } from "react";
import Horoscope from "../components/Horoscope";
import Layout from "../components/Layout";
import ToggleViewButton from "../components/ToggleViewButton";

const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const IndexPage = () => {
  const [isGridView, setIsGridView] = useState(true);

  const toggleView = () => {
    setIsGridView((prevState) => !prevState);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Daily Horoscopes</h1>
      <ToggleViewButton isGrid={isGridView} onClick={toggleView} />
      <Layout grid={isGridView}>
        {signs.map((sign) => (
          <Horoscope key={sign} sign={sign} />
        ))}
      </Layout>
    </div>
  );
};

export default IndexPage;
