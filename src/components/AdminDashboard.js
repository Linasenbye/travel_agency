import React, { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [tour, setTour] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTour({ ...tour, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/tours", tour);
            alert("Tour added successfully!");
        } catch (error) {
            alert("Error adding tour");
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="tour_name"
                    placeholder="Tour Name"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleInputChange}
                />
                <button type="submit">Add Tour</button>
            </form>
        </div>
    );
};

export default AdminDashboard;
