import NavBar from "./NavBar/Index";
import Details from "./pages/Details/Index";
import Home from "./pages/Home/Index";
import TrackEvent from "./pages/TrackEvents/Index";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventItem from "./components/EventItem";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F6F5F5] text-[#333D79]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-item/:id" element={<Details />} />
          <Route path="/my-events" element={<TrackEvent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
