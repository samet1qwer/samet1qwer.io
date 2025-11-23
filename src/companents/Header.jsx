import React from "react";

function Header({ setSearchQuery, SearchQuery }) {
  return (
    <div className="w-full bg-gradient-to-br from-emerald-50 to-white shadow-sm">
      <div className="max-w-7xl mx-auto md:px-10 px-7 py-5">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-700 cursor-pointer">
            Gourmet Restaurant
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-1 cursor-pointer">
            Modern mutfak sanatı
          </p>
        </div>

        <div className="pb-4">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={SearchQuery}
            placeholder="Menüde ara..."
            className="w-full rounded-full outline-none p-3 border border-emerald-400 focus:ring-2 focus:ring-emerald-500 shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
