import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const MyFavoritesPage = () => {

      const data = useLoaderData();
  const [favorites, setFavorites] = useState(data);

  const handleUnfavorite = async (id) => {
    const res = await fetch(
      `http://localhost:3000/favorites/${id}/user1`,
      { method: "DELETE" }
    );

    if (res.ok) {
      setFavorites(prev => prev.filter(item => item._id !== id));
    }
  };

    return (
        <div>
            <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">❤️ My Favorite Artworks</h1>

      {favorites.length === 0 && (
        <p className="text-gray-600">No favorites yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {favorites.map((art) => (
          <div key={art._id} className="shadow p-3 bg-white rounded">

            <img src={art.image} className="w-full h-48 object-cover rounded" />

            <h2 className="text-lg text-stone-900 font-bold mt-2">{art.title}</h2>
            <p className="text-sm text-gray-600">Artist: {art.artist}</p>

            <Link to={`/artwork/${art._id}`}>
              <button className="w-full mt-2 bg-blue-600 text-white py-1 rounded">
                View Details
              </button>
            </Link>

            <button
              onClick={() => handleUnfavorite(art._id)}
              className="w-full mt-2 bg-red-500 text-white py-1 rounded"
            >
               Remove Favorite
            </button>

          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default MyFavoritesPage;