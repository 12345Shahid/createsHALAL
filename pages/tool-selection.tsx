// File: pages/tool-selection.tsx
import { useRouter } from "next/router";
import Head from "next/head";
import { FaSearch, FaYoutube, FaPenFancy, FaCode, FaRobot } from "react-icons/fa";

const tools = [
  { id: "research", name: "Research Assistant", description: "AI for academic and market research", icon: <FaSearch className="text-blue-500 text-4xl" /> },
  { id: "youtube", name: "YouTube Script Writer", description: "Generate engaging YouTube scripts", icon: <FaYoutube className="text-red-500 text-4xl" /> },
  { id: "blogging", name: "Blogging Assistant", description: "Create SEO-optimized blog posts", icon: <FaPenFancy className="text-green-500 text-4xl" /> },
  { id: "developers", name: "Developer Helper", description: "Code explanations, debugging, and more", icon: <FaCode className="text-purple-500 text-4xl" /> },
  { id: "general", name: "General AI", description: "Use AI for any other task", icon: <FaRobot className="text-gray-500 text-4xl" /> },
];

const ToolSelection = () => {
  const router = useRouter();

  const handleSelect = (id: string) => {
    router.push(`/chat?mode=${id}`); // Redirect to chat with selected tool
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Head>
        <title>Tool Selection</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6 animate-fade-in">Choose Your AI Tool</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => handleSelect(tool.id)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center"
          >
            {tool.icon}
            <h2 className="text-xl font-semibold mt-3">{tool.name}</h2>
            <p className="text-gray-600 text-center mt-2">{tool.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToolSelection;