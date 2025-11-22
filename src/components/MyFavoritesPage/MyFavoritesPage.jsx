import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MyFavoritesPage = () => {
       const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Must match the userId used when adding favorites
  const userId = "user1"; // Replace with your actual user ID or email

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/favorites/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch favorites");
        const data = await res.json();
        setFavorites(data);
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to load favorites.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  const handleUnfavorite = async (artworkId) => {
    try {
      const res = await fetch(`http://localhost:3000/favorites/${userId}/${artworkId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to remove favorite");

      Swal.fire("Removed!", "Artwork removed from favorites.", "success");
      // Update favorites state
      setFavorites((prev) => prev.filter((art) => art._id !== artworkId));
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to remove favorite.", "error");
    }
  };


    return (
        <div>
             <h2 className="text-2xl mb-4 text-center mt-7">My Favorites</h2>

    <div className="p-6 mt-6 gap-5 grid md:grid-cols-4 justify-center">
     

      {loading && <p>Loading...</p>}
      {!loading && favorites.length === 0 && <p>No favorites yet.</p>}

      {favorites.map((art) => (
        <div key={art._id} className="border p-4 mb-3">
          <img
            src={art.image}
            alt={art.title}
            className="w-48 h-48 object-cover mb-2"
          />
          <h3>{art.title}</h3>
          <p>{art.category}</p>
           <button
              className="mt-2 px-3 py-1 bg-blue-300 text-white rounded"
              onClick={() => handleUnfavorite(art._id)}
            >
              Remove 
            </button>
        </div>
      ))}
    </div>
        </div>
         
    );
};

export default MyFavoritesPage;