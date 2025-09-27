import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

const Support = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <HelpCircle className="w-10 h-10 text-blue-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-[#007BFF] font-fredoka mb-4">
              Lumely Support
            </h1>
            <p className="text-lg text-gray-600">
              Need help with Lumely? We're here for you.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <Mail className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 font-fredoka">
                Contact Us
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              If you're facing any issues, have feedback, or just want to say hi:
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-lg font-semibold text-blue-800 mb-2">
                Email: support@lumely.io
              </p>
              <p className="text-blue-600">
                Response time: Usually within 24–48 hours.
              </p>
            </div>
          </motion.div>

          {/* FAQs Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 font-fredoka">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Do I need an account to use Lumely?",
                  answer: "Yes, you'll need a free account to track habits, join the community, and save your progress."
                },
                {
                  question: "How do I reset my password?",
                  answer: "Tap 'Forgot Password' on the login screen and follow the instructions."
                },
                {
                  question: "Why am I not receiving notifications?",
                  answer: "Make sure you've allowed notifications for Lumely in your device settings."
                },
                {
                  question: "Is Lumely free?",
                  answer: "Yes! Lumely is free to download and use, with optional premium features coming soon."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-blue-200 pl-4 py-2"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-center">
                Still stuck? Email us at{" "}
                <a href="mailto:support@lumely.io" className="font-semibold underline">
                  support@lumely.io
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;