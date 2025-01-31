import React from "react";
import { Link } from "react-router-dom";

export default function EventItem({ event }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
     
      <div className="bg-[#F0F1F4] shadow-xl border-2 rounded-2xl border-white p-4 transition-all duration-200 hover:bg-gray-100 hover:shadow-2xl h-90 flex flex-col">
        
        <h2 className="font-black">{event?.title}</h2>
        <p>{event?.description}</p>

        <div className="mt-auto w-full">
          
          <div className="flex justify-between border-t pt-2 w-full">
            <span className="w-1/2 text-left">{event?.organization?.name}</span>
            <span className="w-1/2 text-right">
              {event?.location} {event?.date}
            </span>
          </div>

          
          <div className="flex justify-between items-center w-full mt-4">
            <Link
              to={`/event-item/${event?.id}`}
              className="w-1/ text-center px-4 py-2 bg-blue-300 text-[#1D347A] rounded font-medium tracking-wide shadow-md"
            >
              More Details
            </Link>
            <button className="w-1/ text-center px-4 py-2 bg-blue-300 text-[#1D347A] rounded font-medium tracking-wide shadow-md">
              RSVP Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
