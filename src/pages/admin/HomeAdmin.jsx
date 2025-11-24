import React from "react";

function HomeAdmin() {
  return (
    <>
      <div className="flex relative">
        <aside className="w-64 h-screen bg-white text-gray-800 border-r border-gray-200 p-6 shadow-sm relative">
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              src="/icon.png"
              alt="icon"
              className="mx-auto mb-4 rounded-full w-10 h-10"
            />
            <h2 className="text-xl text-center text-emerald-700 font-semibold mb-8 tracking-tight ">
              Kodlaya Restorant
            </h2>
          </div>
          <div className="bg-gray-500 w-full border-xl h-0.5 mb-8"></div>
          <nav>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-emerald-500 text-white p-3 rounded-lg shadow-sm"
                >
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-100 hover:text-emerald-700 transition"
                >
                  Menu
                </a>
              </li>
            </ul>

            <a
              href="/admin/login"
              className="absolute bottom-4 left-4 text-xl text-red-500 hover:text-red-600 flex items-center gap-3 p-3 rounded-lg transition"
            >
              logout <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-10 bg-gradient-to-br from-emerald-50 to-white">
          <h1 className="text-3xl font-semibold mb-4 tracking-tight">
            Admin Panel'e hosgeldiniz!
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Burada admin panelindeki islemleri yapabilirsiniz.
          </p>
        </main>
      </div>
    </>
  );
}

export default HomeAdmin;
