import React, { useState, useEffect } from "react";
import ImageCards from "./Components/ImageCards";
import ImageSearch from "./Components/ImageSearch";
import github from "./assets/github.png";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?key=46914172-a42c45062acf1672a01ff58f7&q=${term}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setImages(data.hits);
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      fetchImages();
    }, 500);

    return () => clearTimeout(timer);
  }, [term]);

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800">
      <nav className="bg-gray-300 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        <h1 className="font-bold text-2xl text-gray-800 font-sans tracking-tight">
          <span className="text-teal-600">Pixel</span>
          <span className="text-gray-700">scape</span>
        </h1>
      </div>
          <a
            href="https://github.com/kumkum27/img_gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-teal-500 transition-colors duration-300"
          >
            <img src={github} alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="w-1/2 mx-auto mb-8">
          <ImageSearch searchText={(text) => setTerm(text)} />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : images.length === 0 ? (
          <h1 className="text-center text-2xl text-gray-600 mt-32">No results found</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
            {images.map((image) => (
              <ImageCards key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-teal-500">PixelPulse</h3>
              <p className="mt-2">Discover and share amazing images</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-500 transition-colors duration-300">About</a>
              <a href="#" className="hover:text-teal-500 transition-colors duration-300">Contact</a>
              <a href="#" className="hover:text-teal-500 transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} PixelPulse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
