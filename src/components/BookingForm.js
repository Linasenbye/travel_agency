import React, { useState } from "react";
import API from "../api";

const BookingForm = () => {
    const [customerId, setCustomerId] = useState("");
    const [tourId, setTourId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { customer_id: parseInt(customerId), tour_id: parseInt(tourId) };

        API.post("/bookings", data)
            .then((response) => {
                alert("Booking created successfully!");
            })
            .catch((error) => {
                console.error("Error creating booking:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Customer ID:
                <input
                    type="text"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
            </label>
            <label>
                Tour ID:
                <input
                    type="text"
                    value={tourId}
                    onChange={(e) => setTourId(e.target.value)}
                />
            </label>
            <button type="submit">Book Tour</button>
        </form>
    );
};

export default BookingForm;
