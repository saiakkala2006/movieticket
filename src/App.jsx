import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AdminHome from "./components/AdminHome";
import MovieDetails from "./components/MovieDetails";
import BookingConfirm from "./components/BookingConfirm";
import SeatSelection from "./components/SeatSelection";



import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/movie/:name" element={<MovieDetails />} />
        <Route path="/confirm" element={<BookingConfirm />} />
        <Route path="/seats" element={<SeatSelection />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
