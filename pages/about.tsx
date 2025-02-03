import React from 'react';
import Head from 'next/head';
import { APP_NAME } from '../config/settings';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About {APP_NAME}</title>
        <meta name="description" content="Learn more about our Halal AI Chat Assistant and our mission." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">About {APP_NAME}</h1>

      <div className="prose max-w-none">
        <p>
          {APP_NAME} is the first free, unlimited AI assistant that lets you chat with the world's best AI models, 
          including GPT-4, GPT-4 Turbo, Claude 2, Llama 2, Falcon, and Bard—all in one place.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide accessible, ethical, and Halal AI-powered assistance to users worldwide. 
          We believe in the power of artificial intelligence to enhance learning, creativity, and problem-solving, 
          while ensuring that the content aligns with Islamic principles.
        </p>

        <h2>What Sets Us Apart</h2>
        <ul>
          <li>Choose from a wide range of AI models, including free and premium options</li>
          <li>AI-generated content filtered to align with Islamic principles</li>
          <li>Unlimited free access without requiring a credit card</li>
          <li>Ability to save, organize, and share AI-generated Islamic content</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>
          We are committed to continuous improvement and innovation. Our team is constantly working on new features, 
          including faster AI processing, audio and video generation capabilities, and specialized tools for specific niches.
        </p>

        <p>
          Join us on this exciting journey as we explore the possibilities of ethical AI in harmony with Islamic values.
        </p>
      </div>
    </div>
  );
};

export default About;