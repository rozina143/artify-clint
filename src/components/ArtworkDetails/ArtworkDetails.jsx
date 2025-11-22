import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const ArtworkDetails = () => {
const artwork = useLoaderData();
  const { _id, title, image, artist, medium, category, likes } = artwork;

  const [likeCount, setLikeCount] = useState(likes);
  const [favoriteAdded, setFavoriteAdded] = useState(false);

  //  Like
  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/artwork/${_id}/like`, {
        method: "PATCH",
      });
      if (res.ok) setLikeCount(prev => prev + 1);
    } catch (err) {
      console.error(err);
    }
  };

  //  Add to Favorite
  const handleAddToFavorites = async () => {
    try {
      const res = await fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artworkId: _id,
          userId: "user1" 
        }),
      });

      const data = await res.json();

      if (data.success) {
        setFavoriteAdded(true);
        Swal.fire("Added!", "Artwork added to favorites.", "success");
      }
    } catch (err) {
      console.error(err);
    }
  };
    return (
        <div className='mt-8 flex justify-center'>
            <div className="details-container text-center">
      <img src={image} alt={title} className="artwork-img" />

      <h1>{title}</h1>
      <p><strong>Medium:</strong> {medium}</p>
      <p>{category}</p>

      <h3>Artist: {artist}</h3>

      <div className="buttons text-center">
        <button 
        className='btn'
        onClick={handleLike}>
           Like ({likeCount})
        </button>

        <button
        className='btn'
          onClick={handleAddToFavorites}
          disabled={favoriteAdded}
        >
          {favoriteAdded ? " Added to Favorites" : " Add to Favorites"}
        </button>
      </div>
    </div>
        </div>
    );
};

export default ArtworkDetails;