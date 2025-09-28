import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { FileText, Mail, AlertTriangle } from "lucide-react";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <FileText className="w-10 h-10 text-orange-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-800 font-fredoka mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to Lumely! By downloading and using the app, you agree to these terms.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Use of Service */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Use of Service
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    You must be at least 13 years old to use Lumely.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    You are responsible for keeping your account credentials safe.
                  </li>
                </ul>
              </section>

              {/* Restrictions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Restrictions
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Don't misuse the app, attempt to hack it, or use it for unlawful purposes.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Don't harass or abuse others in the community features.
                  </li>
                </ul>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Termination
                </h2>
                <p className="text-gray-700">
                  We may suspend or terminate accounts that violate these terms.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Limitation of Liability
                </h2>
                <div className="flex items-start bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-yellow-800">
                    Lumely is provided "as is." We're not responsible for data loss, missed reminders, or any indirect damages.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Changes to Terms
                </h2>
                <p className="text-gray-700">
                  We may update these terms. Continued use of Lumely means you accept the new terms.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka border-b pb-2">
                  Contact
                </h2>
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-600 mr-3" />
                  <div>
                    <p className="text-gray-700">
                      For questions, reach us at:
                    </p>
                    <p className="text-blue-600 font-semibold">support@lumely.io</p>
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

export default TermsOfService;