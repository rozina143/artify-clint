import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const ArtworkPage = () => {
    const [artworks, setArtworks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch artworks
  const fetchArtworks = async () => {
    const res = await fetch("http://localhost:3000/artify");
    const data = await res.json();

    // Only show public artworks
    const publicArtworks = data.filter(
      (item) => item.visibility !== "Private"
    );

    setArtworks(publicArtworks);
    setFiltered(publicArtworks)
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  // Search handler
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const result = artworks.filter(
      (item) =>
        item.title.toLowerCase().includes(value) ||
        item.artist.toLowerCase().includes(value)
    );

    setFiltered(result);
  };

  return (
    <div>
        <div className="p-6">
      <h2 className="text-3xl mb-4 text-center">Explore Artworks</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Title or Artist..."
        value={search}
        onChange={handleSearch}
        className="border p-2 w-full max-w-md mx-auto block mb-6"
      />

      {/* Artworks Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((art) => (
          <div
            key={art._id}
            className="border rounded shadow p-3 hover:shadow-lg transition"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover rounded mb-3"
            />

            <h3 className="text-lg font-bold">{art.title}</h3>
            <p className="text-sm text-gray-500">Artist: {art.artist}</p>
            <p className="text-sm text-gray-600">Category: {art.category}</p>

            <p className="text-sm mt-2">❤️ {art.likes} likes</p>

            <Link to={`/artwork/${art._id}`}>
              <button className="btn mt-3 w-full bg-blue-500 text-white py-2 rounded">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-5">No artworks found.</p>
      )}
    </div>
    </div>
  );
};

export default ArtworkPage;