import { motion } from "framer-motion";
import { Users, Trophy, Target, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
          About ContestHub
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A creative platform where ideas compete, talents shine, and winners rise.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <Target className="text-indigo-600 mb-4" size={36} />
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            ContestHub empowers creators through fair and transparent contests.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <Sparkles className="text-indigo-600 mb-4" size={36} />
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To become the leading global hub for creative competitions.
          </p>
        </div>
      </div>

      {/* Why ContestHub */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why ContestHub?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <Users className="text-indigo-600 mb-3" size={32} />
            <h4 className="text-xl font-semibold mb-2">Community Driven</h4>
            <p className="text-gray-600">
              A strong community of creators and innovators.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <Trophy className="text-indigo-600 mb-3" size={32} />
            <h4 className="text-xl font-semibold mb-2">Fair Competition</h4>
            <p className="text-gray-600">
              Transparent judging with real rewards.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <Sparkles className="text-indigo-600 mb-3" size={32} />
            <h4 className="text-xl font-semibold mb-2">Creative Freedom</h4>
            <p className="text-gray-600">
              Participate in diverse and exciting contests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
