import Head from "next/head";
import { Mail } from "lucide-react";
import { APP_NAME } from "../config/settings";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <Head>
        <title>Contact Us - {APP_NAME}</title>
        <meta name="description" content="Get in touch with us via email" />
      </Head>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Have a question, suggestion, or need support? We’re here to help! Reach out to us via email.
        </p>

        <div className="flex items-center justify-center space-x-3 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-4 py-3 rounded-lg">
          <Mail className="h-6 w-6" />
          <a
            href="mailto:create.contact.369@gmail.com"
            className="text-lg font-medium hover:underline"
          >
            create.contact.369@gmail.com
          </a>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
          We usually respond within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Contact;