import { useState, useEffect } from "react";
import fetchHoroscope from "../utils/fetchHoroscope";

const useFetchHoroscope = (sign) => {
  const [horoscope, setHoroscope] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHoroscope = async () => {
      try {
        const result = await fetchHoroscope(sign);
        setHoroscope(result);
      } catch (error) {
        console.error("Error fetching horoscope:", error);
      } finally {
        setLoading(false);
      }
    };
    getHoroscope();
  }, [sign]);

  return { horoscope, loading };
};

export default useFetchHoroscope;
