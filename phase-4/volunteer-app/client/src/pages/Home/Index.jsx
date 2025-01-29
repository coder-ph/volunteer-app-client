import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import EventItem from "../../components/EventItem";

export default function Home() {
  const { searchParam, setSearchParam, handleSubmit, data, setData, loading } =
    useContext(GlobalContext);

  if(loading) return <div>Loading please wait ...</div>

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="Search Event"
          placeholder="Enter location ..."
          className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
      <div>
        {data && data.length > 0 ? (
          data.map((event, index) => <EventItem key={index} event={event} />)
        ) : (
          <div>
            <p>No events at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
}
