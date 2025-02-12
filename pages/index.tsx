import { APP_NAME } from '../config/settings';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';

// Define the FeatureCard component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Home = () => {
  return (
    <div>
      <Head>
        <title>{APP_NAME} - The First Free, Unlimited Halal AI Chat Assistant</title>
        <meta name="description" content="Free, unlimited AI assistant with GPT-4, Claude 2, Llama 2, and more. Ethical & Halal AI content generation." />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8">
          The First Free, Unlimited Halal AI Chat Assistant
        </h1>

        <p className="text-xl text-center mb-12">
          🚀 Halal AI Chat is a free, unlimited AI assistant that lets you chat with the world's best AI models, including GPT-4, GPT-4 Turbo, Claude 2, Llama 2, Falcon, and Bard—all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FeatureCard icon="🔹" title="Choose Your AI Model" description="Select from free, premium, and hard-to-access AI models." />
          <FeatureCard icon="🔹" title="Ethical & Halal AI" description="AI-generated content is filtered to align with Islamic principles." />
          <FeatureCard icon="🔹" title="Unlimited Free Access" description="No Credit card or payment required. Just chat and generate." />
          <FeatureCard icon="🔹" title="Share & Learn" description="Save, organize, and share AI-generated Islamic content." />
        </div>

        <div className="text-center mb-16">
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300">
            Start Chatting for Free Now!
          </Link>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">Coming Very Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">🚀 Faster AI</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">🎵 Audio</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">🎥 Video</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">🖼️ Image</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
