import React from "react";

function App() {
  return (
    <form action="">
      <div className="bg-[#8EBAEA] min-h-screen flex justify-center items-center p-4">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Left Section - General Information */}
          <div className="bg-white p-10 text-xl text-[#1F5DA4] flex flex-col items-center w-full md:w-1/2">
            <h2 className="mb-6 font-bold text-2xl">General Information</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Right Section - Contact Details */}
          <div className="bg-[#4835D4] p-10 text-xl text-white flex flex-col items-center w-full md:w-1/2">
            <h2 className="mb-6 font-bold text-2xl">Contact Details</h2>
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-white text-black"
            />
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-white text-black"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-white text-black"
            />
            <input
              type="text"
              placeholder="Country"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-white text-black"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
