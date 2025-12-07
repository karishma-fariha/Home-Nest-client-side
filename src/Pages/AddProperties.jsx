import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';

const AddProperties = () => {
  const { user } = use(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    location: "",
    image: "",
    userEmail: user?.email,
    userName: user?.displayName,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Property added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset form
        setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
          location: "",
          image: "",
          userEmail: user?.email,
          userName: user?.displayName,
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-primary">Add New Property</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Property Name */}
        <div>
          <label className="font-semibold">Property Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-md"
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Price</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-md"
          />
        </div>

        {/* Location */}
        <div>
          <label className="font-semibold">Location</label>
          <input
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-md"
          />
        </div>

        {/* Image Link */}
        <div>
          <label className="font-semibold">Image URL</label>
          <input
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-md"
          />
        </div>

        {/* User Email (Read-only) */}
        <div>
          <label className="font-semibold">User Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-full border p-3 rounded-md bg-gray-100"
          />
        </div>

        {/* User Name (Read-only) */}
        <div>
          <label className="font-semibold">User Name</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="w-full border p-3 rounded-md bg-gray-100"
          />
        </div>

        {/* Description - full width */}
        <div className="md:col-span-2">
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border p-3 rounded-md"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button className="w-full bg-primary text-white p-3 rounded-md font-bold hover:bg-secondary duration-300">
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};



export default AddProperties;