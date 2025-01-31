import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GlobalContext = createContext(null);

// States
export default function GlobalState({ children }) {
  const [data, setData] = useState([]);
  const usenav = useNavigate()
  const [searchParam, setSearchParam] = useState("");
  const [loading, Setloading] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    date: "",
    org_id: "",
  });

  const [updateEvent, setUpdateEvent] = useState({
    location: "",
    date: "",
  });

  // functionality
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://volunteer-app-srver.onrender.com/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        throw new Error("Failed to add event");}
      const newEvent = await response.json();

      setData([...data, newEvent]);
    } catch (error) {
      console.error("Encountered an error while uploading new event:", error);
    }
        setFormData({
          title: "",
          location: "",
          description: "",
          date: "",
          org_id: "",
        });
    usenav('/')    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://volunteer-app-srver.onrender.com/events"
        );
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

    function handleChangeUpdate(e) {
      setUpdateEvent({ ...updateEvent, [e.target.name]: e.target.value });
    }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://volunteer-app-srver.onrender.com/events"
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    usenav("/");
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(
        `https://volunteer-app-srver.onrender.com/events/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = response.json()
      if (response.ok) {
        alert("Event deleted successfully!");
        
      } else {
        alert("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
    setData(data)
    usenav("/");
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
        setEventDetails,
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
