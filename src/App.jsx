import { useState } from "react";
import { GoRocket } from "react-icons/go";
import SeachBar from "./SeachBar";
import Gallery from "./Gallery";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE = "https://lexica.art/api/v1/search?q=";

  const createImageMatrix = (images) => {
    const matrix = [];
    const chunkSize = images.length / 5;
    for (let i = 0; i < images.length; i += chunkSize) {
      const chunk =  images.slice(i, i + chunkSize);
      matrix.push(chunk);
    }

    return matrix;
  };

  const handleSearch = async (query) => {
    console.log(`Making query ${query}`);
    setLoading(true)
    const response = await fetch(API_BASE + query);
    const body = await response.json();
    setImages(createImageMatrix(body.images));
    setLoading(false)
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-700 text-slate-100">
      <div className="flex flex-row w-full mt-16 mb-48">
        <div className="grow"></div>
        <div className="basis-1/3 text-center">
          <p className="text-4xl font-bold">Lexica</p>
          <p className="text-gray-300">The Stable Diffusion search engine</p>
          <SeachBar handleSearch={handleSearch} loading={loading} />
        </div>
        <div className="grow"></div>
      </div>
      <Gallery images={images} />
    </div>
  );
}

export default App;
