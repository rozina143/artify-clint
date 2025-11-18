import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const ArtworkDetails = () => {
      const data = useLoaderData();
       const {
    _id,
    title,
    image,
    artist,
    medium,
    category,
    likes,
  } = data;
    const [likeCount, setLikeCount] = useState(likes);
  const [favoriteAdded, setFavoriteAdded] = useState(false);

  const handleLike = async () => {
    const res = await fetch(
      `http://localhost:3000/artwork/${_id}/like`,
      { method: "PATCH" }
    );

    if (res.ok) setLikeCount((prev) => prev + 1);
  };
  const handleAddToFavorites = async () => {
    const res = await fetch(`http://localhost:3000/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ artworkId: _id, userId: "user1" }),
    });

    if (res.ok) setFavoriteAdded(true);
  };



    return (
        <div className='mt-8 flex justify-center'>
            <div className="details-container text-center">
      <img src={image} alt={title} className="artwork-img" />

      <h1>{title}</h1>
   
      <p>{category}</p>

      <h3>Artist: {artist}</h3>

      <div className="buttons text-center ">
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