import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { APP_NAME } from '../config/settings';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>{APP_NAME} - The First Free, Unlimited Halal AI Chat Assistant</title>
        <meta name="description" content="Free, unlimited AI assistant with GPT-4, Claude 2, Llama 2, and more. Ethical & Halal AI content generation." />
      </Head>

      <main className="py-20">
        <h1 className="text-4xl font-bold text-center mb-6">
          The First Free, Unlimited Halal AI Chat Assistant
        </h1>
        
        <p className="text-xl text-center mb-8">
          Chat with the world's best AI models, including GPT-4, GPT-4 Turbo, Claude 2, Llama 2, Falcon, and Bard—all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            title="Choose Your AI Model"
            description="Select from free, premium, and hard-to-access AI models."
          />
          <FeatureCard
            title="Ethical & Halal AI"
            description="AI-generated content is filtered to align with Islamic principles."
          />
          <FeatureCard
            title="Unlimited Free Access"
            description="No Credit card or payment required. Just chat and generate."
          />
          <FeatureCard
            title="Share & Learn"
            description="Save, organize, and share AI-generated Islamic content."
          />
        </div>

        <div className="text-center">
          <Link href="/chat">
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg">
              Start Chatting for Free Now!
            </a>
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-4">Coming Very Soon</h2>
          <ul className="text-center">
            <li>Faster AI</li>
            <li>Audio, Video, and Image Generation</li>
            <li>Specialised Tools for Specific Niches</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="border rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Home;