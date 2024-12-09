import React, { useState } from 'react';

const AdminDashboard = () => {
    const [formData, setFormData] = useState({
        tour_name: '',
        description: '',
        people_limit: '',
        duration: '',
        price: '',
        guide_name: '',
        tour_date: '',
        tour_time: '',
        tour_destination: '',
        tour_location: '',
        tour_category: '',
    });

    const [tours, setTours] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTours([...tours, formData]);
        setFormData({
            tour_name: '',
            description: '',
            people_limit: '',
            duration: '',
            price: '',
            guide_name: '',
            tour_date: '',
            tour_time: '',
            tour_destination: '',
            tour_location: '',
            tour_category: '',
        });
    };

    return (
        <div>
            <h1 id='ad'>Admin Dashboard</h1>
            <section className="dashboard">
                <form className="admin_board" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="tour_name"
                        placeholder="Tour Name"
                        value={formData.tour_name}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        style={{ resize: 'vertical' }}
                    />
                    <input
                        type="number"
                        name="people_limit"
                        placeholder="People Limit"
                        value={formData.people_limit}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="guide_name"
                        placeholder="Guide Name"
                        value={formData.guide_name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="date"
                        name="tour_date"
                        value={formData.tour_date}
                        onChange={handleInputChange}
                    />
                    <input
                        type="time"
                        name="tour_time"
                        value={formData.tour_time}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="tour_destination"
                        placeholder="Tour Destination"
                        value={formData.tour_destination}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="tour_location"
                        placeholder="Tour Location"
                        value={formData.tour_location}
                        onChange={handleInputChange}
                    />
                    <select
                        name="tour_category"
                        value={formData.tour_category}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Category</option>
                        <option value="Lake Tour">Lake Tour</option>
                        <option value="Hiking">Hiking</option>
                        <option value="Cultural Tour">Cultural Tour</option>
                        <option value="Trekking">Trekking</option>
                        <option value="Historical Site">Historical Site</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Waterfalls Trek">Waterfalls Trek</option>
                    </select>
                    <button className='add-btn' type="submit">Add Tour</button>
                </form>
            </section>
            <section className="tours">
                <h2 id='ad'>Created Tours</h2>
                {tours.length > 0 ? (
                    <ul>
                        {tours.map((tour, index) => (
                            <li key={index} className="tour_card">
                                <h3>{tour.tour_name}</h3>
                                <p><strong>Description:</strong> {tour.description}</p>
                                <p><strong>Location:</strong> {tour.tour_location}</p>
                                <p><strong>Destination:</strong> {tour.tour_destination}</p>
                                <p><strong>Category:</strong> {tour.tour_category}</p>
                                <p><strong>People Limit:</strong> {tour.people_limit}</p>
                                <p><strong>Duration:</strong> {tour.duration}</p>
                                <p><strong>Price:</strong> ${tour.price}</p>
                                <p><strong>Guide Name:</strong> {tour.guide_name}</p>
                                <p><strong>Date:</strong> {tour.tour_date}</p>
                                <p><strong>Time:</strong> {tour.tour_time}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p id='ad'>No tours created yet.</p>
                )}
            </section>
        </div>
    );
};

export default AdminDashboard;
