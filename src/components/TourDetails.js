import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdOutlinePlace } from "react-icons/md";
import axios from 'axios';
import { ReactComponent as ArrowL } from "../icons/arrow-left.svg";

const Tour = () => {
    const { tourId } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`tours/{tourId}`);
                setTour(response.data);  // Assuming tour data is at response.data
            } catch (error) {
                console.error('Error fetching tour data:', error);
            }
        };

        fetchTour();
    }, [tourId]);

    if (!tour) {
        return <div>Loading...</div>;
    }

    return (
        <div className="tour-details home">
            <section className="chosen-tour">
                <div>
                    <img className="tour-img" src={tour.imagePath} alt="tour"/>
                </div>
                <Link to="/">
                    <div className="back-link">
                        <ArrowL />
                        <button className="btn">
                            <a href="#" className="start">Go back</a>
                        </button>
                    </div>
                </Link>
                <div className="tour-info">
                    <h1 className="title">{tour.tour_name}</h1> {/* Changed to match second code */}
                    <div className="location">
                        <MdOutlinePlace />
                        <p>{tour.location}</p>
                    </div>
                    <div className="description">
                        <h4>Description</h4>
                        <p>{tour.description}</p>
                    </div>
                    <h4>Reviews</h4>
                    {tour.reviews && tour.reviews.map((review, index) => (
                        <div className="review" key={index}>
                            <div className="review-info">
                                <img src={review.reviewerImagePath} className="reviewer" alt="Reviewer"/>
                                <p className="reviewer-name">{review.reviewer}</p>
                            </div>
                            <p className="review-comment">{review.comment}</p>
                        </div>
                    ))}
                    <div className="book-button">
                        <Link to={`/book/${tour.tour_id}`}>
                            <button type="button" className="book">
                                Book now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tour;
