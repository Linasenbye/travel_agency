import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlinePlace } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import BookingForm from "./BookingForm";
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowL} from "../icons/arrow-left.svg";



const Tour = () => {
    const { tourId } = useParams();
    const [tour, setTour] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    // useEffect(() => {
    //     const fetchTour = async () => {
    //         try {
    //             const response = await fetch(`${tourId}`);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setTour(data);
    //             } else {
    //                 console.log('Failed to fetch tour data. Status:', response.status);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching tour data:', error);
    //         }
    //     };

    //     fetchTour();
    // }, [tourId]);

    // if (!tour) {
    //     return <div>Loading...</div>;
    // }
    
    return (
        <>
                <div className="tour-details home">
                    <section className="chosen-tour">
                        <div className='img-tour'>
                            <img className="tour-img" src="https://www.asia-hikes.com/wp-content/uploads/2021/07/Son-Kol-Lake-Yurt-Camps-at-Night-scaled.jpg" alt="tour"/>
                        </div>
                        <Link to="/">
                            <div className='back-link'>
                                    <ArrowL/>
                                    <button className="btn">
                                        <a href="#" className='back'>Go back</a>
                                    </button>     
                            </div>
                        </Link>
                        <div className='tour-info'>
                            <h1 className="title">Son-Kol</h1>
                            <div className="location">
                                <MdOutlinePlace /> 
                                <p id='space'>Naryn, Naryn</p>
                            </div>
                            <div className="seats">
                                <MdPeople />
                                <p id='space'>Number of avaiable seats: 25</p>
                            </div>
                            <div className="description">
                                <h4>Description</h4>
                                <p>Explore the scenic Son-Kul Lake and nomadic culture</p>
                            </div>
                            <h4>Reviews</h4>
                                <div className='review'>
                                    <div className='review-info'>
                                        <img src="https://butwhytho.net/wp-content/uploads/2023/09/Gojo-Jujutsu-Kaisen-But-Why-Tho-2.jpg" className="reviewer" alt="Reviewer"/>
                                        <p className='reviewer-name'>Gojo Satoru</p>
                                    </div>                  
                                    <p className='review-comment'>Son-Kol is absolutely breathtaking—imagine endless green meadows, a crystal-clear lake, and air so fresh it feels like a cleanse for your soul. The yurts are cozy, the horseback riding made me feel like a legend, and the people? Absolutely warm and welcoming. It’s the perfect escape, even for someone like me who’s seen it all. Highly recommend!</p>
                                </div>
                            <div className="book-button">

            
                            <button
                                type="submit"
                                className="book"
                                onClick={() => setIsOpen(true)}>
                                 Book now
                            </button>
              
                            </div>
                        </div>
                    </section>
                </div>
                <BookingForm open={isOpen} onClose={() => setIsOpen(false)}>
                    
                </BookingForm>
            
        </>
    );
};

export default Tour;