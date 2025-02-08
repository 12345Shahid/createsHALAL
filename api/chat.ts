// File: api/chat.ts
import { formatOutput } from "./formatting";
import { filterContent } from "./filtering";
import { logHistory } from "./history";
import { getAIModel } from "../utils/aiModels";

export async function chatWithAI(userId: string, message: string, modelId: string) {
  try {
    if (typeof window !== "undefined") {
      throw new Error("❌ chatWithAI should only run on the server.");
    }

    // Dynamically import `g4f` ONLY on the server
    const { default: g4f } = await import("g4f").catch(() => {
      console.error("❌ Failed to load g4f. Make sure it's installed.");
      throw new Error("AI Chat Service is unavailable.");
    });

    const aiModel = getAIModel(modelId);

    // Generate AI response using G4F
    const aiResponse = await g4f.chat.completions.create({
      model: aiModel,
      messages: [{ role: "user", content: message }],
    });

    const responseText = aiResponse.choices?.[0]?.message?.content || "No response generated.";

    // Filter & format response
    const filteredResponse = await filterContent(responseText);
    const formattedResponse = await formatOutput(filteredResponse, "chat");

    // Log chat history
    await logHistory(userId, "chat", message, formattedResponse, modelId);

    return formattedResponse;
  } catch (error) {
    console.error("❌ Chat Error:", error);
    throw new Error("AI Chat Service is unavailable. Try again later.");
  }
}