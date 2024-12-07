import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import Home from "./components/Home";
import TourDetails from "./components/TourDetails";
import BookingForm from "./components/BookingForm";
import './styles.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tours/:id" element={<TourDetails />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/book/:id" element={<BookingForm />} />
            </Routes>
        </Router>
    );
}

export default App;
