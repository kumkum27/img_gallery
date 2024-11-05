import React from "react";
import { motion } from "framer-motion";

const ImageCards = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 h-[400px] flex flex-col"
    >
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-4 text-teal-600">Photo by {image.user}</h3>
        <div className="flex justify-between text-sm text-gray-600 mb-4 space-x-4">
          <span className="flex items-center background-color: #8080801f;"><i className="bx bx-show mr-1"></i> {image.views}</span>
          <span className="flex items-center background-color: #8080801f;"><i className="bx bx-download mr-1"></i> {image.downloads}</span>
          <span className="flex items-center background-color: #8080801f;"><i className="bx bx-heart mr-1"></i> {image.likes}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-teal-700 ">
              #{tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageCards;