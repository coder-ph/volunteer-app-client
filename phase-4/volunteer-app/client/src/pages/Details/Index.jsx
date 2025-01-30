import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import AddEvent from "../../components/AddEvent";
import { toast } from "react-toastify";

export default function Details() {
  const { id } = useParams();
  const {
    eventDetails,
    setEventDetals,
    handleChangeUpdate,
    updateEvent,
    setUpdateEvent,
    handleDelete,
  } = useContext(GlobalContext);

  async function handleSubmt(e) {
    e.preventDefault();

    try {
      const response = await fetch(`/event/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateEvent),
      });

      if (response.ok) {
        const updateEvent = await response.json();
        setEventDetals(updateEvent);

        toast.success("Event logged successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (e) {
      console.error(e);

      toast.error("Encountered an error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    setUpdateEvent({
      location: "",
      date: "",
    });
  }

  useEffect(() => {
    async function getEventDetails() {
      const response = await fetch(`/events/${id}`);
      const data = await response.json();

      if (data) {
        setEventDetals(data);
      }
    }
    getEventDetails();
  }, []);

  return (
    <div className="container mx-auto px-15 py-8 pt-45">
      {/* Event Details Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {eventDetails?.title}
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          {eventDetails?.description}
        </p>
        <div className="flex justify-between text-gray-500 text-sm border-t pt-4">
          <span className="font-semibold">
            {eventDetails?.organization?.name}
          </span>
          <span>
            {eventDetails?.location} • {eventDetails?.date}
          </span>
        </div>
      </div>

      {/* Add Event Component */}
      <div className="mt-6 px-15">
        <AddEvent />
      </div>

      {/* Update Event Form */}
      <div className="mt-8 bg-gray-100 pt-16 rounded-xl shadow-md px-15">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Event</h2>
        <form onSubmit={handleSubmt} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="location"
              value={updateEvent.location}
              onChange={handleChangeUpdate}
              placeholder="Enter event location"
              className="w-full p-3 rounded-lg outline-none shadow-md focus:shadow-blue-400 bg-white"
            />
            <input
              type="date"
              name="date"
              value={updateEvent.date}
              onChange={handleChangeUpdate}
              className="w-full p-3 rounded-lg outline-none shadow-md focus:shadow-blue-400 bg-white"
            />
          </div>
          <button className="w-full md:w-1/3 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Log Edits
          </button>
        </form>
      </div>

      {/* Delete Event Button */}
      <div className="mt-8 flex justify-center px-15">
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Delete Event
        </button>
      </div>
    </div>
  );
}
