import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../context";

export default function AddEvent() {
  const { handleFormSubmit, formData, handleChange } =
    useContext(GlobalContext);

  return (
    // Add event form
    
    <div className="bg-gray-100 p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Add New Event
      </h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={formData.title}
            placeholder="Enter event title"
            className="w-full p-3 rounded-lg outline-none shadow-md focus:shadow-blue-400 bg-white"
          />
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={formData.location}
            placeholder="Enter event location"
            className="w-full p-3 rounded-lg outline-none shadow-md focus:shadow-blue-400 bg-white"
          />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Enter event description"
            className="w-full p-3 rounded-lg outline-none shadow-md focus:shadow-blue-400 bg-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 rounded-lg outline-none shadow-md focus:shadow-blue-400 bg-white"
          />
          <input
            type="number"
            name="org_id"
            value={formData.org_id}
            onChange={handleChange}
            placeholder="Enter organization ID"
            className="w-full p-3 rounded-lg outline-none shadow-md focus:shadow-blue-400 bg-white"
          />
        </div>

        <button className="w-full md:w-1/3 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Log Event
        </button>
      </form>
    </div>
  );
}
