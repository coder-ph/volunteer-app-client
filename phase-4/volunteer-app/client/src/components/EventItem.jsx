import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { Link } from "react-router-dom";

export default function EventItem({event}) {

  return (
    <div className="max-w-300">
      <ul className="flex flex-col w-60% pl-80 overflow-hidden bg-white/75 ">
        <li className="  bg-blue-100 shadow-xl gap-10 border-2 rounded-2xl border-white overflow-hidden ">
          <h2 className="font-black">{event?.title}</h2>
          <p>{event?.description}</p>
          <div className="flex flex-row justify-evenly">
            <span>{event?.organization?.name}</span>
            <span className="font-stretch-165% ">
              {event?.location} {event?.date}
            </span>
          </div>
          <Link
            to={`/event-item/${event?.id}`}
            className="px-8 rounded-l font-medium tracking-wide inline-block shadow-md"
          >
            More Details
          </Link>
          <button>Delete Event</button>
        </li>
      </ul>
    </div>
  );
}
