import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import EventItem from "../../components/EventItem";

export default function Home() {
  const { searchParam, setSearchParam, handleSubmit, data, setData, loading } =
    useContext(GlobalContext);

  if (loading) return <div>Loading please wait ...</div>;

  return (
    <div>
      <div className="pl-135 pt-10 pb-10">
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
            className="bg-white/75 p-5 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </form>
      </div>
      <div
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/be/58/fd/be58fdf24c587c73880c2b3b747ba6fa.jpg')",
        }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        {/* Content */}
        <div className="relative text-white text-center p-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Make a Difference, One Act at a Time!
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Every action, no matter how small, has the power to create lasting
            change. Join us today and be the reason someone smiles!
          </p>
        </div>
      </div>

      {/* Flex container to display EventItem in columns */}
      <div className="flex flex-wrap gap-4 justify-start mt-6 pl-70">
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
