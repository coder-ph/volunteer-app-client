import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context'
import AddEvent from '../../components/AddEvent';
import { toast } from 'react-toastify';

export default function Details() {
  const {id}= useParams()
  const {
    eventDetails,
    setEventDetals,
    handleChangeUpdate,
    updateEvent,
    setUpdateEvent, handleDelete
  } = useContext(GlobalContext);

  async function handleSubmt (e){
    e.preventDefault()

    try{
      const response = await fetch (`/event/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateEvent)
      })

      if (response.ok) {
        const updateEvent = await response.json()
        setEventDetals(updateEvent)

      }
       toast.success("Event logged successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable:true,
              progress:undefined,
              theme:"colored"
            })
    }catch (e){
      console.error(e)

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
      location:'',
      date:''
    })
  }
 
  useEffect(()=>{
    async function getEventDetails() {
      const response = await fetch(`/events/${id}`);
      const data = await response.json()
      console.log(data)

      if(data) {
        setEventDetals(data)
      }
      console.log(eventDetails)
    }
    getEventDetails()
  }, [])
  return (
    <>
      <div className="container mx-auto">
        <h1>
          {eventDetails?.title} <span>{eventDetails?.organization?.name}</span>
        </h1>
        <p>{eventDetails?.description}</p>
        <p>
          {eventDetails?.location} <span>{eventDetails?.date}</span>
        </p>
      </div>
      <AddEvent />
      <div>
        <form onSubmit={handleSubmt}>
          <div className=" flex pl-16 gap-10">
            <input
              type="string"
              name="location"
              value={updateEvent.location}
              onChange={handleChangeUpdate}
              placeholder="Enter location of event"
              className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
            />
            <input
              type="date"
              name="date"
              value={updateEvent.date}
              onChange={handleChangeUpdate}
              placeholder="Enter organization id"
              className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-400 hover:shadow-blue-400"
            />
            <button>Log Edits</button>
          </div>
        </form>
      </div>{" "}
      <br></br>
      <div>
        <button
          onClick={()=> handleDelete(id)}
          className="bg-red-500 text-white p-2 rounded-full mt-4"
        >
          Delete Event
        </button>
      </div>
    </>
  );
}
