// File: api/chat.ts
import { formatOutput } from './formatting';
import { filterContent } from './filtering';
import { logHistory } from './history';
import { getAIModel, generateAIResponse } from '../utils/aiModels';

export async function chatWithAI(userId: string, message: string, modelId: string) {
  try {
    const aiModel = getAIModel(modelId); // Get AI model name

    // Get AI response using G4F
    const aiResponse = await generateAIResponse(aiModel, message);

    // Filter & format response
    const filteredResponse = await filterContent(aiResponse);
    const formattedResponse = await formatOutput(filteredResponse, "chat");

    // Log history
    await logHistory(userId, "chat", message, formattedResponse, modelId);

    return formattedResponse;
  } catch (error) {
    console.error("❌ Chat Error:", error);
    throw new Error("AI Chat Service is unavailable. Try again later.");
  }
}