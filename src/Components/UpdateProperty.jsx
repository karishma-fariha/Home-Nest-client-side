import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UpdateProperty = ({ property, onClose, onUpdated }) => {

   const [formData, setFormData] = useState({
        title: property.title,
        description: property.description,
        category: property.category,
        price: property.price,
        location: property.location,
        image: property.image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        try {
            const res = await fetch(`/properties/${property._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (data.modifiedCount > 0) {
                toast('Property updated successfully!');
                onUpdated(formData); // update the parent state
                onClose();
            } else {
                toast('Failed to update property');
            }
        } catch (err) {
            console.log(err);
            toast('Error updating property');
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-96 p-6 relative">
                <h2 className="text-xl font-bold mb-4">Update Property</h2>
                <input
                    className="input w-full mb-2"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <textarea
                    className="textarea w-full mb-2"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <select
                    className="select w-full mb-2"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option>Rent</option>
                    <option>Sale</option>
                    <option>Commercial</option>
                    <option>Land</option>
                </select>
                <input
                    className="input w-full mb-2"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
                <input
                    className="input w-full mb-2"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
                <input
                    className="input w-full mb-4"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
                <p className="text-gray-500 mb-4">User: {property.userName} ({property.userEmail})</p>
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="btn btn-outline">Cancel</button>
                    <button onClick={handleUpdate} className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};



export default UpdateProperty;