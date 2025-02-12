import { useState } from "react";
import Head from "next/head";
import { APP_NAME, DEFAULT_MODEL } from "../config/settings";
import ModelSelector from "../components/ModelSelector";

const Chat = () => {
  const [model, setModel] = useState(DEFAULT_MODEL);
  const [messages, setMessages] = useState([]);

  const handleModelChange = (newModel) => {
    setModel(newModel);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Chat - {APP_NAME}</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">AI Chat</h1>

      {/* Model Selector */}
      <ModelSelector onSelectModel={handleModelChange} />

      {/* Chat messages */}
      <div className="border p-4 h-96 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <p key={index} className="p-2">
              {msg}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default Chat;