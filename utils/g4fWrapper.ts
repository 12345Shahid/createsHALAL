// File: utils/g4fWrapper.ts
import g4f from "g4f";

export async function getG4FResponse(model: string, message: string) {
  return await g4f.chatCompletion({
    model,
    messages: [{ role: "user", content: message }],
  });
}
