// File: utils/aiModels.ts
import g4f from "g4f";

// Function to get AI model name from model ID
export function getAIModel(modelId: string = "gpt-4-turbo"): string {
  const models: Record<string, string> = {
    "gpt-4-turbo": "gpt-4-turbo",
    "gpt-4": "gpt-4",
    "gpt-3.5-turbo": "gpt-3.5-turbo",
    "claude-2": "claude-2",
    "llama-2": "llama-2",
    "falcon": "falcon",
    "bard": "google-bard"
  };

  // Return the model ID or default to GPT-4 Turbo
  return models[modelId] || models["gpt-4-turbo"];
}

// Function to generate AI response using G4F
export async function generateAIResponse(model: string, message: string) {
  try {
    const response = await g4f.chat.completions.create({
      model,
      messages: [{ role: "user", content: message }],
    });

    return response.choices?.[0]?.message?.content || "No response generated.";
  } catch (error) {
    console.error("❌ AI Model Error:", error);
    throw new Error("Failed to generate response.");
  }
}