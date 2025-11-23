import React from "react";

function List({ item }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4 hover:shadow-lg transition">
      <img
        src={item.image_url}
        alt={item.name}
        className="rounded-xl w-full h-40 object-cover"
      />
      <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
      <p className="text-green-600 font-semibold mt-2">
        <p>{item.price ? item.price.toFixed(2) : "0.00"}₺</p>
      </p>
    </div>
  );
}

export default List;
