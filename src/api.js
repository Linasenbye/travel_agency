import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:5000"; // Replace with your backend server URL

// Example: Get all tours
const getTours = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tours`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tours:", error);
        throw error;
    }
};

// Example: Post booking data
const postBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/Tour`, bookingData);
        return response.data;
    } catch (error) {
        console.error("Error creating booking:", error);
        throw error;
    }
};

export default { getTours, postBooking };
