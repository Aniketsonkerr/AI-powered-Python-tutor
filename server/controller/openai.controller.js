import { getAIResponse } from "../models/openai.model.js";

export const chat = async (req, res) => {
  const { message, character } = req.body;

  try {
    const aiResponse = await getAIResponse(message, character);
    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
};
