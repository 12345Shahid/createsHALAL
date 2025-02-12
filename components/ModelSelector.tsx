import { useState } from "react";

const AI_MODELS = [
  { id: "gpt-4-turbo", name: "GPT-4 Turbo" },
  { id: "gpt-4", name: "GPT-4" },
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  { id: "claude-2", name: "Claude 2" },
  { id: "llama-2", name: "LLaMA 2" },
  { id: "falcon", name: "Falcon" },
  { id: "bard", name: "Google Bard" },
];

const ModelSelector = ({ onSelectModel }) => {
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0].id);

  const handleChange = (event) => {
    const newModel = event.target.value;
    setSelectedModel(newModel);
    onSelectModel(newModel);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">Select AI Model:</label>
      <select
        value={selectedModel}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        {AI_MODELS.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelSelector;