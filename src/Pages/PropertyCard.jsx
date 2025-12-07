import React from "react";

const PropertyCard = ({ property, onDeleteSuccess }) => {
  const { _id, name, price, location, created_at, image } = property;

  const handleDelete = async () => {
    const confirmDel = confirm("Are you sure you want to delete?");
    if (!confirmDel) return;

    const res = await fetch(`/properties/${_id}`, { method: "DELETE" });
    const data = await res.json();

    if (data.deletedCount > 0) {
      onDeleteSuccess(_id);
    }
  };

  return (
    <div className=" rounded-xl shadow-sm p-4">
      <img src={image} className="w-full h-48 object-cover" alt="" />

      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="font-semibold">৳{price}</p>
      <p className="text-sm text-gray-400">Posted: {created_at}</p>

      <div className="flex gap-2 mt-3">
        <a href={`/update/${_id}`} className="btn btn-sm btn-warning">
          Update
        </a>

        <button className="btn btn-sm btn-error" onClick={handleDelete}>
          Delete
        </button>

        <a href={`/details/${_id}`} className="btn btn-sm btn-info">
          View Details
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
