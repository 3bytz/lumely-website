import React from "react";
import { motion } from "framer-motion";

interface GoalTrackingCardProps {
  title: string;
  description: string;
  cardImage: string;
  className?: string;
  style: string;
}

const GoalTrackingCard: React.FC<GoalTrackingCardProps> = ({
  title,
  description,
  cardImage,
  className = "",
  style,
}) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center w-[220px] sm:w-[300px] bg-white rounded-lg shadow-lg mt-12 p-8 ${className} ${style}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Top Gradient Bar */}
      <div className="absolute -top-16 w-[140px] h-[90px] bg-gradient-to-b from-[#007BFF] to-[#0045A2] rounded-t-lg shadow-xl backdrop-blur-md" />
      <div className="absolute -top-0 w-[100px] h-[10px] bg-black rounded-full shadow-md blur-sm" />

      {/* Card Content */}
      <div className="text-center pt-10 pb-6">
        <h2 className="text-[#007BFF] text-lg font-semibold font-fredoka">
          {title}
        </h2>
        <p className="text-[#444] text-sm font-fredoka mt-1">{description}</p>
      </div>

      {/* Card Image */}
      <div className="w-full px-4 pb-6">
        <img src={cardImage} alt={title} className="w-full rounded-lg" />
      </div>

      {/* Bottom Indicator */}
      <div className="flex justify-center pb-3">
        <div className="w-6 h-[4px] bg-[#007BFF] rounded-full" />
      </div>
    </motion.div>
  );
};

export default GoalTrackingCard;
