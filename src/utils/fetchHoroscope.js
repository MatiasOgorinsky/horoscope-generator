// utils/fetchHoroscope.js
const axios = require("axios");
require("dotenv").config();

const fetchHoroscope = async (sign) => {
  try {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiApiKey}`,
    };

    const data = {
      prompt: `Generate a horoscope for ${sign}.`,
      max_tokens: 100,
    };

    const response = await axios.post("https://api.openai.com/v1/engines/davinci/completions", data, { headers });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    return "Error fetching horoscope";
  }
};

module.exports = fetchHoroscope;
