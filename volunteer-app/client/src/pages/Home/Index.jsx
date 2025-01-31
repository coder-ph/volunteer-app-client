import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import EventItem from "../../components/EventItem";

export default function Home() {
  const { searchParam, setSearchParam, handleSubmit, data, setData, loading } =
    useContext(GlobalContext);

  if (loading) return <div>Loading please wait ...</div>;

  return (
    <div>
      <div
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/be/58/fd/be58fdf24c587c73880c2b3b747ba6fa.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative text-white font-bold font-serif text-center p-6 pt-25 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Make a Difference, One Act at a Time!
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Every action, no matter how small, has the power to create lasting
            change. Whether you’re passionate about education, environmental
            conservation, or community outreach, your time and skills can
            transform lives. Volunteering is more than just giving back—it’s
            about connecting with people, making an impact, and inspiring a
            movement of kindness.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full py-10 px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-full max-w-lg"
        >
          <input
            type="text"
            name="searchEvent"
            placeholder="Enter location ..."
            className="bg-white/75 p-5 rounded-full outline-none w-full shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </form>
      </div>

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
