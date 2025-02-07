import Head from 'next/head';
import { APP_NAME } from '../config/settings';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About - {APP_NAME}</title>
        <meta name="description" content="Learn more about our Halal AI Chat platform" />
      </Head>

      <h1 className="text-4xl font-bold mb-6">About {APP_NAME}</h1>

      <div className="prose max-w-none">
        <p>
          {APP_NAME} is a pioneering platform that offers free, unlimited access to advanced AI models for ethical, 
          Halal content generation. Our mission is to provide a space where users can harness the power of AI 
          while adhering to Islamic principles.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Vision</h2>
        <p>
          We envision a world where cutting-edge technology and ethical considerations go hand in hand. 
          By providing access to AI models like GPT-4, Claude 2, and Llama 2, we aim to democratize AI 
          technology while ensuring it aligns with Halal guidelines.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">What Sets Us Apart</h2>
        <ul className="list-disc pl-6">
          <li>Ethical AI: All content generated on our platform is filtered to ensure Halal compliance.</li>
          <li>Free Access: We believe in making AI accessible to everyone, regardless of financial means.</li>
          <li>Community-Driven: Our unique credit system rewards users for sharing and engaging with the platform.</li>
          <li>Versatile Tools: From coding assistance to content writing, our AI tools cater to various needs.</li>
        </ul>

        <p className="mt-6">
          Join us in our journey to create a more inclusive, ethical AI-powered future. Start exploring 
          the possibilities with {APP_NAME} today!
        </p>
      </div>
    </div>
  );
};

export default About;