import React, { useState, useEffect } from "react";
import List from "../../companents/List";
import Categories from "../../companents/Categories";
import Header from "../../companents/Header";

function HomeUser() {
  const [menu, setMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/data.json`)
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  if (!menu) return <div className="text-center mt-4">Yükleniyor...</div>;

  const categoriesToShow =
    activeCategory === "Tümü" ? Object.keys(menu) : [activeCategory];

  let itemsArray = [];
  if (activeCategory === "Tümü") {
    itemsArray = Object.values(menu).flat();
  } else {
    itemsArray = menu[activeCategory] || [];
  }

  const filteredMenu = Array.from(
    new Map(
      itemsArray
        .filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item) => [item.id, item])
    ).values()
  );

  return (
    <>
      <Header setSearchQuery={setSearchQuery} SearchQuery={searchQuery} />
      <Categories onSelectCategory={setActiveCategory} />

      <div className="max-w-7xl mx-auto md:px-10 px-7">
        {searchQuery === "" &&
          categoriesToShow.map((categoryName) => (
            <div key={categoryName}>
              <div className="flex items-center justify-start mt-6">
                <div className="bg-green-500 rounded-xl p-2 text-white text-xl">
                  <i className="fa-solid fa-utensils"></i>
                </div>
                <h1 className="text-2xl font-bold text-emerald-700 ml-3">
                  {categoryName}
                </h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {menu[categoryName].map((item) => (
                  <List key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}

        {searchQuery !== "" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {filteredMenu.length > 0 ? (
              filteredMenu.map((item) => <List key={item.id} item={item} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">
                Aramanızla eşleşen ürün bulunamadı.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default HomeUser;
