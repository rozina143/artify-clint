import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
 const data = useLoaderData(); 
  console.log(data);

  const [featured, setFeatured] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [highlights, setHighlights] = useState([]);

  // Load data into state
  useEffect(() => {
    if (!data) return;

    setFeatured(data.featured || []);
    setTopArtists(data.topArtists || []);
    setHighlights(data.result || []);

  }, [data]);

    return (
    <div>


  <div className="w-full h-64 md:h-96 relative overflow-hidden rounded-lg">
        <div className="absolute w-full h-full flex items-center justify-center text-white text-3xl font-bold">
          Explore Trending Art
        </div>

        {/* CAROUSEL */}
        <div className="mt-8 flex justify-center">
          <div className="carousel w-[360px] md:w-[700px] lg:w-[700px]">

            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://picsum.photos/400?60"
                className="w-full h-[360px] object-cover"
              />
            </div>

            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://picsum.photos/400?59"
                className="w-full h-[360px] object-cover"
              />
            </div>

            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://picsum.photos/400?58"
                className="w-full h-[360px] object-cover"
              />
            </div>

            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://picsum.photos/400?57"
                className="w-full h-[360px] object-cover"
              />
            </div>

          </div>
        </div>


      </div>

  <div className="flex w-full justify-center gap-2 py-2 text-white">
          <a href="#slide1" className="btn btn-xs">1</a>
          <a href="#slide2" className="btn btn-xs">2</a>
          <a href="#slide3" className="btn btn-xs">3</a>
          <a href="#slide4" className="btn btn-xs">4</a>
        </div>


{/*  */}
  <div>
      <h1 className="text-3xl">Featured Artworks</h1>

      <div className="grid grid-cols-3 p-5">
        {featured.length === 0 ? (
          <p>No featured artworks found</p>
        ) : (
          featured.map((art) => (
            <div key={art._id} className="shadow p-3">
              <img className="w-full h-48 object-cover" src={art.image} />
              <h2>{art.title}</h2>
              <p>{art.artist}</p>
              <p>{art.category}</p>
              <Link to={`/details/${art._id}`}>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
            </div>
          ))
        )}
      </div>
    </div>

      {/* topartist */}

  <div className="p-5 dark:bg-gray-700 mt-10">
        <h1 className="text-3xl font-bold mb-5">Top Artists of the Week</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {topArtists.map((artist) => (
            <div key={artist._id} className="shadow-md p-4 bg-purple-200 rounded text-neutral-800">
              <h2 className="text-xl font-bold">{artist.artist}</h2>
              <p className="text-sm">Likes: {artist.likes}</p>
              <p>Category: {artist.category}</p>
            </div>
          ))}
        </div>
      </div>

{/* communityhighlights */}
    <div className="p-5 dark:bg-gray-700  mt-10">
        <h1 className="text-3xl font-bold mb-5">Community Highlights</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {highlights.map((item) => (
            <div key={item._id} className="p-4 shadow-md bg-purple-200 rounded text-neutral-800">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm">{item.artist}</p>
            </div>
          ))}
        </div>
      </div>


    </div>
    );
};

export default Home;