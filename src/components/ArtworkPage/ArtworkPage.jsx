import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const ArtworkPage = () => {
    const data = useLoaderData();
    console.log(data);
      const [artworks, setArtworks] = useState(data);
  const [search, setSearch] = useState("");
  
      const artify = artworks.filter((art) =>
    art.title.toLowerCase().includes(search.toLowerCase()) ||
    art.artist.toLowerCase().includes(search.toLowerCase())
  );
    return (
         <div className="p-6">

      {/* Search Input */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search by title or artist..."
          className="w-full md:w-96 p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {artify.map((art) => (
          <div key={art.id} className="shadow-lg p-3 rounded bg-white dark:bg-gray-800">

            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover rounded"
            />

            <h2 className="text-lg font-bold mt-2">{art.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Artist: {art.artist}
            </p>
            <p className="text-sm">Category: {art.category}</p>
            <p className="text-sm">❤️ {art.likes} likes</p>

            <Link to={`/artwork/${art.id}`}>
              <button
                className="mt-2 w-full bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                View Details
              </button>
            </Link>

          </div>
        ))}
      </div>
    </div>
    );
};

export default ArtworkPage;
