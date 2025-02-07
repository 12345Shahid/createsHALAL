import { useState, useEffect } from 'react';
import { supabase } from '../config/database';
import { chatWithAI } from '../api/chat';

const Chat = () => {
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [message, setMessage] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [wordRange, setWordRange] = useState({ min: 1500, max: 2500 });
  const [tone, setTone] = useState('');
  const [response, setResponse] = useState('');
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    // Fetch user credits on mount
    const fetchCredits = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('credits')
        .eq('id', supabase.auth.user()?.id)
        .single();
      
      if (!error && data) {
        setCredits(data.credits);
      }
    };

    fetchCredits();
  }, []); // ✅ useEffect properly closed

  const handleChat = async () => {
    if (credits <= 0) {
      alert("You have no credits left. Please earn or purchase more.");
      return;
    }

    const aiResponse = await chatWithAI({
      model,
      message,
      negativePrompt,
      wordRange,
      tone,
    });

    setResponse(aiResponse);
    setCredits((prev) => Math.max(prev - 1, 0)); // Deduct one credit
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
        className="bg-blue-500 text-white p-2 rounded"
      >
        Send
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Response:</h2>
        <p>{response}</p>
      </div>
      <p className="mt-4 text-gray-600">Remaining Credits: {credits}</p>
    </div>
  );
};

export default Chat;
