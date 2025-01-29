import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [data, setData] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [loading, Setloading] = useState(false);
  const [eventDetails, setEventDetals] = useState(null);
  const [formData, setFormData] = useState({
    tittle: "",
    location: "",
    description: "",
    date: "",
    org_id: "",
  });

  const [updateEvent, setUpdateEvent] = useState({
    location: "",
    date: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleChangeUpdate(e) {
    setUpdateEvent({ ...updateEvent, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/events", {
        method: " POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to add event");
      const newEvent = await response.json();
      setData([...data, newEvent]);

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

      setFormData({
        title: "",
        location: "",
        description: "",
        date: "",
        org_id: "",
      });
    } catch (error) {
      console.error("Encountered an error while uploading new event:", error);

      toast.error("Failed to log event. Please try again", {
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
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/events");
        const result = await response.json();
        console.log(result);
        if (result) {
          Setloading(false);
          setSearchParam("");
        }

        setData(result);
      } catch (error) {
        Setloading(false);
        setSearchParam("");
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setData]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/events");
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`/events/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Event deleted successfully!");
        Navigate("/events"); // Redirect to the events list
      } else {
        alert("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        data,
        setData,
        handleSubmit,
        loading,
        eventDetails,
        setEventDetals,
        handleFormSubmit,
        formData,
        handleChange,
        handleChangeUpdate,
        updateEvent,
        setUpdateEvent,
        handleDelete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
