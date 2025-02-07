import Head from 'next/head';
import { APP_NAME } from '../../config/settings';
import ContactForm from './form';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Contact Us - {APP_NAME}</title>
        <meta name="description" content="Get in touch with us for any inquiries or support." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-4">
        We'd love to hear from you! Please fill out the form below to get in touch with us.
      </p>

      <ContactForm />
    </div>
  );
};

export default Contact;