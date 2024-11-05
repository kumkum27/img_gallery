import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <form onSubmit={onSubmit} className="relative">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search for images..."
          className="w-full px-4 py-2 rounded-full bg-white text-gray-800 border-2 border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-teal-500 transition-colors duration-300"
        >
          <i className="bx bx-search text-xl"></i>
        </button>
      </form>
    </motion.div>
  );
};

export default ImageSearch;