
import { useState } from 'react';
import { AuthContext } from '../../page/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddArtwork = () => {
    const userName = "John Doe"; 
  const userEmail = "user@example.com";

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    medium: "",
    description: "",
    dimensions: "",
    price: "",
    visibility: "Public",
    userName,
    userEmail,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/artify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to add artwork");
      Swal.fire("Success", "Artwork added successfully!", "success");
      setFormData({
        image: "",
        title: "",
        category: "",
        medium: "",
        description: "",
        dimensions: "",
        price: "",
        visibility: "Public",
        userName,
        userEmail,
      });
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to add artwork.", "error");
    }
  };
    return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4">Add New Artwork</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2"
          required
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2"
          required
        />
        <input
          type="text"
          name="medium"
          value={formData.medium}
          onChange={handleChange}
          placeholder="Medium/Tools"
          className="border p-2"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2"
          rows={3}
        />
        <input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          placeholder="Dimensions (optional)"
          className="border p-2"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (optional)"
          className="border p-2"
        />
        <select
          name="visibility"
          value={formData.visibility}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          readOnly
          className="border p-2 bg-blue-300"
        />
        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          readOnly
          className="border p-2 bg-blue-300"
        />
        <button
          type="submit"
          className="bg-purple-400 text-white px-4 py-2 rounded mt-2"
        >
          Add Artwork
        </button>
      </form>
    </div>
  );

};

export default AddArtwork;