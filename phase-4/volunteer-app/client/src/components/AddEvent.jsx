import React, { useContext } from 'react'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from '../context';

export default function AddEvent() {
    const { handleFormSubmit, formData, handleChange } =
      useContext(GlobalContext);
  return (
    <div className="">
      <form
        className="flex flex-col grid-flow-col gap-10 p-5 "
        onSubmit={handleFormSubmit}
      >
        <div className=" flex pl-10 gap-10">
          <input
            type="Text"
            name="title"
            onChange={handleChange}
            value={formData.title}
            placeholder="Enter the name/title of the event"
            className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400 "
          />
          <input
            type="string"
            name="location"
            onChange={handleChange}
            value={formData.location}
            placeholder="Enter event location"
            className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
          />
          <input
            type="Text"
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Enter event description"
            className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
          />
        </div>
        <div className=" flex pl-10 gap-10">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Enter date of event"
            className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
          />
          <input
            type="Integer"
            name="org_id"
            value={formData.org_id}
            onChange={handleChange}
            placeholder="Enter organization id"
            className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
          />
          <button>Log Event</button>
        </div>
      </form>
    </div>
  );
}
