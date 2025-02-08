// File: utils/aiModels.ts

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
  
    return models[modelId] || models["gpt-4-turbo"];
  }
  