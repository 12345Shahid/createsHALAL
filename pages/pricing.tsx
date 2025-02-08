import Head from 'next/head';
import Link from 'next/link';
import { APP_NAME } from '../config/settings';
import Navigation from '../components/Navigation'; // ✅ Import Navigation Component

const Pricing = () => {
  return (
    <div>
      <Head>
        <title>Pricing - {APP_NAME}</title>
        <meta name="description" content="Learn about our unique credit system and how to earn unlimited AI-generated content." />
      </Head>

      <Navigation /> {/* ✅ This component was missing */}

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Unique Credit System</h1>

        <div className="prose max-w-none">
          <p className="mb-4">
            At {APP_NAME}, we don't follow a traditional pricing system. Instead, we offer a unique credit-based system that rewards you for sharing our platform and engaging with our community.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
          <p className="mb-4">Here's an example of how our credit system works:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>User1 shares their unique referral link with User2.</li>
            <li>When User2 signs up using User1's link, User1 automatically receives one credit.</li>
            <li>If User2 earns credits (by sharing or watching ads), User1 receives the same amount of credits automatically.</li>
            <li>One credit is enough to generate one piece of content from any of our tools.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits of Our Credit System</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Earn unlimited credits by sharing our platform</li>
            <li>Generate unlimited content daily</li>
            <li>Access to all AI models and tools</li>
            <li>No credit card or payment required</li>
            <li>Support the growth of a Halal content creation community</li>
          </ul>

          <p className="mt-8">
            Our goal is to create a thriving community of Halal content creators while providing valuable AI-powered tools. By sharing our website and earning credits, you're not only gaining access to powerful AI capabilities but also contributing to the growth of an ethical, Halal-focused AI ecosystem.
          </p>

          <p className="mt-4">
            Start sharing today and unlock the full potential of {APP_NAME}!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;