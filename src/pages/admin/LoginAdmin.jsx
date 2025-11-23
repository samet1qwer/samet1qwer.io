import React from "react";

function LoginAdmin() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-emerald-300 to-white">
        <div className="bg-white p-8 md:p-12 w-full  md:h-auto max-w-md rounded-lg shadow-xl ">
          <div>
            <img
              src="../public/icon.png"
              alt="icon"
              className="mx-auto mb-4 rounded-full w-20 h-20"
            />
            <h1 className="text-2xl text-center font-bold mb-2 text-emerald-700">
              Admin Login
            </h1>
          </div>
          <form className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-1"
              >
                Kullanıcı Adı
              </label>
              <input
                placeholder="admin@gmail.com"
                type="text"
                id="username"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-1"
              >
                Şifre
              </label>
              <input
                placeholder="password"
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-md"
              >
                Giris Yap
              </button>
            </div>
          </form>
          <div className="mt-4 text-center text-gray-600 ">
            <p className="text-sm">kullanıcı adı: admin@gmail.com </p>
            <p className="text-sm">şifre: password</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
