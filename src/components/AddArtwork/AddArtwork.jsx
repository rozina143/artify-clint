import React, { useContext, useState } from 'react';
import { AuthContext } from '../../page/AuthProvider/AuthProvider';

const AddArtwork = () => {
        const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    imageUrl: "", title: "", category: "", medium: "", description: "", dimensions: "", price: "", visibility: "Public"
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();

  };
  if (!user) {
    return <p>Please login to see your profile.</p>;
  }
    return (
      <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-5">Add New Artwork</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="imageUrl" placeholder="Image URL" onChange={handleChange} required className="border p-2"/>
        <input name="title" placeholder="Title" onChange={handleChange} required className="border p-2"/>
        <input name="category" placeholder="Category" onChange={handleChange} required className="border p-2"/>
        <input name="medium" placeholder="Medium/Tools" onChange={handleChange} className="border p-2"/>
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2"/>
        <input name="dimensions" placeholder="Dimensions" onChange={handleChange} className="border p-2"/>
        <input name="price" placeholder="Price" onChange={handleChange} className="border p-2"/>
        <select name="visibility" onChange={handleChange} className="border p-2">
          <option>Public</option>
          <option>Private</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">Add Artwork</button>
      </form>
    </div>
    );
};

export default AddArtwork;