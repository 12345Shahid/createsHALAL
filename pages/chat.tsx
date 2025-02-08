// File: pages/chat.tsx
import { useState, useEffect } from "react";
import { supabase } from "../config/database";
import { chatWithAI } from "../api/chat";

const Chat = () => {
  const [model, setModel] = useState("gpt-4-turbo");
  const [message, setMessage] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [wordRange, setWordRange] = useState({ min: 1500, max: 2500 });
  const [tone, setTone] = useState("");
  const [response, setResponse] = useState("");
  const [credits, setCredits] = useState(0);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch user credits on mount
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        // ✅ Correct way to get user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
          console.warn("No user found:", userError);
          return;
        }

        // ✅ Fetch user's credits
        const { data, error } = await supabase
          .from("users")
          .select("credits")
          .eq("id", user.id)
          .single();

        if (error) throw error;
        if (data) setCredits(data.credits);
      } catch (error) {
        console.error("Error fetching user credits:", error);
      }
    };

    fetchCredits();
  }, []);

  const handleChat = async () => {
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }
    if (credits <= 0) {
      alert("You have no credits left. Please earn or purchase more.");
      return;
    }

    setLoading(true);
    try {
      const aiResponse = await chatWithAI({
        model,
        message,
        negativePrompt,
        wordRange,
        tone,
      });

      setResponse(aiResponse);
      setCredits((prev) => Math.max(prev - 1, 0)); // Deduct one credit
    } catch (error) {
      alert("Error generating response. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chat with AI</h1>

      <div className="mb-4">
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button
        onClick={handleChat}
        className={`bg-blue-500 text-white p-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        {loading ? "Generating..." : "Send"}
      </button>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Response:</h2>
        <p>{response || "No response yet."}</p>
      </div>

      <p className="mt-4 text-gray-600">Remaining Credits: {credits}</p>
    </div>
  );
};

export default Chat;