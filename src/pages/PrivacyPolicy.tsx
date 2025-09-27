import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Shield, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <Shield className="w-10 h-10 text-gray-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-800 font-fredoka mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: September 27, 2025
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-8 text-lg">
              At Lumely, your privacy matters. This policy explains how we collect, use, and protect your information.
            </p>

            <div className="space-y-8">
              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Information We Collect
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Account Information:</strong> Name, email, and password.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Usage Data:</strong> Habits you track, progress stats, and app interactions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Device Info:</strong> Basic device details to help improve performance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Notifications:</strong> We only send reminders and motivational messages if you allow it.</span>
                  </li>
                </ul>
              </section>

              {/* How We Use Your Data */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  How We Use Your Data
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    To provide and improve the Lumely experience.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    To send habit reminders, motivational messages, and updates.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    To keep your account safe and secure.
                  </li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Data Sharing
                </h2>
                <p className="text-gray-700">
                  We never sell your data. We only share limited information with trusted third-party services like Firebase (for notifications).
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Your Rights
                </h2>
                <p className="text-gray-700 mb-4">You can:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Request deletion of your account and data at any time.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Opt out of notifications in your settings.
                  </li>
                </ul>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Contact Us
                </h2>
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-600 mr-3" />
                  <div>
                    <p className="text-gray-700">
                      If you have questions, contact us:
                    </p>
                    <p className="text-blue-600 font-semibold">privacy@lumely.io</p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;