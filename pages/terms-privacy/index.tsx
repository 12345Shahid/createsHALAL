import Head from 'next/head';
import { APP_NAME } from '../../config/settings';

const TermsPrivacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Terms & Privacy Policy - {APP_NAME}</title>
        <meta name="description" content="Our terms of service and privacy policy." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Terms of Service & Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
        <p>
          [Insert your Terms of Service here]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p>
          [Insert your Privacy Policy here]
        </p>
      </section>
    </div>
  );
};

export default TermsPrivacy;