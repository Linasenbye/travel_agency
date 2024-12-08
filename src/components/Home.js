import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { ReactComponent as ArrowR } from "../icons/arrow-right.svg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // Core CSS
import 'swiper/css/navigation'; // Navigation module CSS
import 'swiper/css/pagination'; // Pagination module CSS
import SwiperCore from 'swiper';
import API from '../api'; // Assuming your API file is set up

SwiperCore.use([Navigation]);




const Home = () => {
    const discoverRef = useRef(null);
    const swiperRef = useRef(null);
    const [tours, setTours] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Lake Tour');
    const [recommendedTours, setRecommendedTours] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [date, setDate] = useState('');
    const [peopleCount, setPeopleCount] = useState(1);


    const tours_data = [
        {
            id: 1,
            name: "Altyn Arashan",
            imagePath: "https://triptokyrgyzstan.com/sites/default/files/media/image/c_ilya_zlaty_0.jpg"
        },
        {
            id: 2,
            name: "Son-Kol",
            imagePath: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f1/f5/6a/caption.jpg?w=900&h=-1&s=1"
        },
        {
            id: 3,
            name: "Ala-Archa",
            imagePath: "https://tury.ru/turyclub.img.php?src=839a7f2c2d7cf82d3a6570515f6a13a3%2Flv4F35X4%2FhpRMbNYZ.jpg&img=2ed24c170c9c3126779369e9b79d4689&.jpg"
        },
        {
            id: 4,
            name: "Issyk-Kol",
            imagePath: "https://i.pinimg.com/1200x/2b/43/10/2b4310148f7906154ddf845541cbffba.jpg"
        }, 
        {
            id: 5,
            name: "Burana",
            imagePath: "https://too.kg/en/wp-content/uploads/Burana-Tower-2-1024x585.jpg"
        }
    ];
    


    // useEffect(() => {
    //     const fetchTours = async () => {
    //         try {
    //             let apiUrl = `${API}/tours/category/${selectedCategory}`;
    
    //             const response = await fetch(apiUrl);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setTours(data);
    //                 console.log('Tours data:', data);  // Log fetched data to check
    //             } else {
    //                 console.log('Failed to fetch data. Status:', response.status);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    
    //     fetchTours();
    // }, [selectedCategory]);
    

    // useEffect(() => {
    //     const fetchRecommendedTours = async () => {
    //         try {
    //             const response = await fetch("http://137.184.224.34:8080/api/products/recommended");
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setRecommendedTours(data);
    //             } else {
    //                 console.log('Failed to fetch recommended tours. Status:', response.status);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching recommended tours:', error);
    //         }
    //     };

    //     fetchRecommendedTours();
    // }, []);

    const scrollToTours = () => {
        if (discoverRef.current) {
            discoverRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const handleSearch = () => {
        const filteredTours = tours.filter(tour => {
            // Filter tours based on the search criteria
            const matchesName = tour.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDate = date ? new Date(tour.availableDate) >= new Date(date) : true;
            const matchesPeople = peopleCount <= tour.maxPeople; // assuming there's a `maxPeople` field in the tour data

            return matchesName && matchesDate && matchesPeople;
        });

        setTours(filteredTours);
    };

    return (
        <section className="home">

            {/* Search Form Section */}
            <section className="search-section">
                <div className="search-form">
                    <input className='search-input'
                        type="text"
                        placeholder="Search for a tour..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <input className='search-input'
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <input className='search-input'
                        type="number"
                        min="1"
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(Number(e.target.value))}
                        placeholder="Number of people"
                    />
                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
            </section>

            <section className="start-page">
                <div className="start-info">
                    <h1>Welcome to the Travel Agency</h1>
                    <p className="sub-title">Book your tour today!</p>
                    <div className="start-link">
                        <button className="btn" onClick={scrollToTours}>
                            <a href="#" className="start">Let's Go!</a>
                        </button>
                        <ArrowR />
                    </div>
                </div>
                <div className="start-img">
                    <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRh8T4m_Ju0xq7n4Xm3F6WNMtvD0wfbIvxHKHp7nPDAl9CPhE6Ql8oi0eoD1WE4DmyshJ6jCRgsE3i5TOxtVklrSgMAmBsruxH6hI37oA" alt="Travel" />
                </div>
            </section>

            

            <section ref={discoverRef} className="discover">
                <div className="discover-info">
                    <div className="discover-start">
                        <h2>Discover</h2>
                        <div className='icons'>
                            <BsArrowLeftShort
                                className="icon"
                                onClick={() => {
                                    if (swiperRef.current) swiperRef.current.slidePrev();
                                }}
                            />
                            <BsArrowRightShort
                                className="icon"
                                onClick={() => {
                                    if (swiperRef.current) swiperRef.current.slideNext();
                                }}
                            />
                        </div>

                    </div>
                    <div className="categories">
                        <p className="category" onClick={() => setSelectedCategory('Lake Tour')}>Lake Tour</p>
                        <p className="category" onClick={() => setSelectedCategory('Hiking')}>Hiking</p>
                        <p className="category" onClick={() => setSelectedCategory('Cultural Tour')}>Cultural Tour</p>
                        <p className="category" onClick={() => setSelectedCategory('Trekking')}>Trekking</p>
                        <p className="category" onClick={() => setSelectedCategory('Historical Site')}>Historical Site</p>
                        <p className="category" onClick={() => setSelectedCategory('Adventure')}>Adventure</p>
                        <p className="category" onClick={() => setSelectedCategory('Waterfalls Trek')}>Waterfalls Trek</p>
                    </div>
                    {/* <Swiper slidesPerView={3} direction="horizontal" onSwiper={(swiper) => { swiperRef.current = swiper; }}>
                        {tours.map((tour) => (
                            <SwiperSlide key={tour.id}>
                                {console.log(tour)} 
                                <div className="discovery-destination">
                                    <Link to={`/tour/${tour.id}`}>
                                        <div className="discovery-image">
                                            <img src={tour.imagePath} alt="Destination" />
                                            <div className="discovery-options-info">
                                                <p className="discovery-options-text">{tour.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                

                    <Swiper slidesPerView={3} 
                            direction="horizontal"
                            loop={true} // Enable seamless looping
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                        {tours_data.map((tour) => (
                            <SwiperSlide key={tour.id}>
                                <div className="discovery-destination">
                                <Link to={`/tour/${tour.id}`} state={{ tour }}>
                                    <div className="discovery-image">
                                        <img src={tour.imagePath} alt={tour.name} />
                                        <div className="discovery-options-info">
                                            <p className="discovery-options-text">{tour.name}</p>
                                        </div>
                                    </div>
                                </Link>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="recommend">
                <div className="recommend-info">
                    <h2>Recommended</h2>
                    <div className="recommend-options">
                        {tours_data.map((tour) => (
                            <div className="recommend-destination" key={tour.id}>
                                <Link to={`/tour/${tour.id}`}>
                                    <div className="recommend-image">
                                        <img className="recommend-photo" src={tour.imagePath} alt="Destination" />
                                        <div className="recommend-options-info">
                                            <p className="recommend-options-text">{tour.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;
