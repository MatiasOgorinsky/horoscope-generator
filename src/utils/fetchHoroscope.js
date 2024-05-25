// utils/fetchHoroscope.js
const axios = require("axios");

const fetchHoroscope = async (sign) => {
  try {
    const openaiApiKey = "sk-proj-XTUz6CM4mxImFEjRQjSBT3BlbkFJ7rArU7tLKGYZerHXOg6K";
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
