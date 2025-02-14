// File: pages/index.tsx

import { APP_NAME } from '../config/settings';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import { FaRocket, FaMicrophone, FaVideo, FaImage } from 'react-icons/fa';

const features = [
  { icon: '🤖', title: 'Choose Your AI Model', description: 'Select from free, premium, and hard-to-access AI models.' },
  { icon: '🕌', title: 'Ethical & Halal AI', description: 'AI-generated content is filtered to align with Islamic principles.' },
  { icon: '🔓', title: 'Unlimited Free Access', description: 'No Credit card or payment required. Just chat and generate.' },
  { icon: '📖', title: 'Share & Learn', description: 'Save, organize, and share AI-generated Halal content.' },
];

const comingSoon = [
  { icon: <FaRocket />, title: 'Faster AI' },
  { icon: <FaMicrophone />, title: 'Audio' },
  { icon: <FaVideo />, title: 'Video' },
  { icon: <FaImage />, title: 'Image' },
];

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div>
      <Head>
        <title>{`${APP_NAME} - The First Free, Unlimited Halal AI Chat Assistant`}</title>
        <meta name="description" content="Free, unlimited AI assistant with GPT-4,GPT-4 turbo, Claude 2, Llama 2, and more. Ethical & Halal AI content generation." />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-8">
          The First Free, Unlimited Halal AI Chat Assistant
        </motion.h1>

        <p className="text-xl text-gray-700 mb-12">
          🚀 Halal AI Chat is a free, unlimited AI assistant that lets you chat with the world's best AI models, including GPT-4, GPT-4 Turbo, Claude 2, Llama 2, Falcon, and Bard—all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} className="mb-16">
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300">
            Start Chatting for Free Now!
          </Link>
        </motion.div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">Coming Very Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoon.map((item, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="text-4xl mb-2 text-blue-600">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
