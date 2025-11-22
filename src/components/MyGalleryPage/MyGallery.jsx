import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MyGallery = () => {

       const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateArtwork, setUpdateArtwork] = useState(null); // for modal

  const userId = "user1"; // replace with logged-in user's ID/email

  // Fetch user's artworks
  const fetchArtworks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/my-artworks/${userId}`);
      const data = await res.json();
      setArtworks(data);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to load artworks.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  // Delete artwork
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/my-artworks/${id}`, {
            method: "DELETE",
          });
          if (!res.ok) throw new Error("Failed to delete");
          setArtworks((prev) => prev.filter((art) => art._id !== id));
          Swal.fire("Deleted!", "Artwork has been deleted.", "success");
        } catch (err) {
          console.error(err);
          Swal.fire("Error", "Failed to delete artwork.", "error");
        }
      }
    });
  };

  // Open update modal
  const handleUpdate = (artwork) => {
    setUpdateArtwork(artwork);
  };

  // Submit update
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3000/my-artworks/${updateArtwork._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateArtwork),
        }
      );
      if (!res.ok) throw new Error("Failed to update artwork");
      Swal.fire("Updated!", "Artwork updated successfully.", "success");
      fetchArtworks();
      setUpdateArtwork(null);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update artwork.", "error");
    }
  };



    return (
        <div>
      <div className="p-6">
      <h2 className="text-2xl mb-4">My Gallery</h2>
      {loading && <p>Loading...</p>}
      {!loading && artworks.length === 0 && <p>No artworks added yet.</p>}

      <div className="grid md:grid-cols-3 gap-6">
        {artworks.map((art) => (
          <div key={art._id} className="border p-4">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h3>{art.title}</h3>
            <p>{art.category}</p>
            <p>{art.medium}</p>
            <div className="mt-2 flex gap-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() => handleUpdate(art)}
              >
                Update
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => handleDelete(art._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {updateArtwork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-96">
            <h3 className="text-xl mb-4">Update Artwork</h3>
            <form onSubmit={handleUpdateSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                value={updateArtwork.title}
                onChange={(e) =>
                  setUpdateArtwork({ ...updateArtwork, title: e.target.value })
                }
                placeholder="Title"
                className="border p-2"
              />
              <input
                type="text"
                value={updateArtwork.category}
                onChange={(e) =>
                  setUpdateArtwork({ ...updateArtwork, category: e.target.value })
                }
                placeholder="Category"
                className="border p-2"
              />
              <input
                type="text"
                value={updateArtwork.medium}
                onChange={(e) =>
                  setUpdateArtwork({ ...updateArtwork, medium: e.target.value })
                }
                placeholder="Medium"
                className="border p-2"
              />
              <input
                type="text"
                value={updateArtwork.image}
                onChange={(e) =>
                  setUpdateArtwork({ ...updateArtwork, image: e.target.value })
                }
                placeholder="Image URL"
                className="border p-2"
              />
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setUpdateArtwork(null)}
                  className="px-3 py-1 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

        </div>
    );
};

export default MyGallery;