import Head from "next/head";
import Link from "next/link";
import { APP_NAME } from "../config/settings";
import Navigation from "../components/Navigation"; // Ensure this path is correct

const BuildYourOwnGPT = () => {
  return (
    <div>
      <Head>
        <title>Build Your Own GPT for Free - {APP_NAME}</title>
        <meta name="description" content="Get access to API of any model used in our platform for free." />
      </Head>

      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Build Your Own GPT for Free</h1>

        <div className="prose max-w-none">
          <p className="mb-4">
            If you want to get access to the API of any model used here, then contact us at this email:
          </p>
          <p className="text-xl font-semibold mb-4">
            <a href="mailto:shahidhasanpollob@gmail.com" className="text-blue-600 hover:underline">
              shahidhasanpollob@gmail.com
            </a>
          </p>
          <p className="mb-4">And yes, as always, it is free also.</p>
        </div>
      </div>
    </div>
  );
};

export default BuildYourOwnGPT;