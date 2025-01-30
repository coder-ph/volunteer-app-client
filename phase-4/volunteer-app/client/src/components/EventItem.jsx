import React from "react";
import { Link } from "react-router-dom";

export default function EventItem({ event }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
      {/* Width control - adjusted for larger screens */}
      <div className="bg-white shadow-xl border-2 rounded-2xl border-white p-4 transition-all duration-200 hover:bg-gray-100 hover:shadow-2xl h-105 flex flex-col">
        {/* Set height to be uniform */}
        <h2 className="font-black">{event?.title}</h2>
        <p>{event?.description}</p>

        {/* Container to align organization name, date, and buttons */}
        <div className="mt-auto w-full">
          {/* Organization name & date */}
          <div className="flex justify-between border-t pt-2 w-full">
            <span className="w-1/2 text-left">{event?.organization?.name}</span>
            <span className="w-1/2 text-right">
              {event?.location} {event?.date}
            </span>
          </div>

          {/* Buttons at the bottom - Ensuring same width */}
          <div className="flex justify-between items-center w-full mt-4">
            <Link
              to={`/event-item/${event?.id}`}
              className="w-1/2 text-center px-4 py-2 bg-blue-500 text-white rounded-l font-medium tracking-wide shadow-md"
            >
              More Details
            </Link>
            <button className="w-1/2 text-center text-red-500">
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
