from pymongo import MongoClient

client = MongoClient("mongodb+srv://sa2003200319:2LHSiPfdtu2EK2o5@cluster0.ahokn.mongodb.net/")
db = client["travel_agency"]

# Create MongoDB collections and insert initial documents
collections = {
    "Company": [
        {"company_id": 1, "name": "Kyrgyz Adventure Tours", "location": "Bishkek", "contact_info": "info@kyrgyzadventure.com"},
        {"company_id": 2, "name": "Nomad Expeditions", "location": "Osh", "contact_info": "contact@nomadexpeditions.kg"},
        {"company_id": 3, "name": "Silk Road Tours", "location": "Karakol", "contact_info": "support@silkroadtours.kg"},
        {"company_id": 4, "name": "Highland Travel", "location": "Naryn", "contact_info": "info@highlandtravel.kg"},
        {"company_id": 5, "name": "Eco Trekking", "location": "Cholpon-Ata", "contact_info": "ecotrekking@kyrgyzstan.kg"},
        {"company_id": 6, "name": "Adventure Kyrgyzstan", "location": "Bishkek", "contact_info": "info@adventurekg.com"},
        {"company_id": 7, "name": "Kyrgyz Nomads", "location": "Osh", "contact_info": "contact@kyrgyznomads.kg"}
    ],
    "Tour": [
        {"tour_id": 1, "name": "Issyk-Kul Lake Tour", "description": "A beautiful lake tour at Issyk-Kul", "ppl_limit": 20, "duration": 2, "price": 150.00, "company_id": 1, "guide_id": 1},
        {"tour_id": 2, "name": "Ala Archa National Park", "description": "Hiking in the stunning Ala Archa Park", "ppl_limit": 15, "duration": 1, "price": 100.00, "company_id": 2, "guide_id": 2},
        {"tour_id": 3, "name": "Son-Kul Lake Tour", "description": "Explore the scenic Son-Kul Lake and nomadic culture", "ppl_limit": 10, "duration": 3, "price": 200.00, "company_id": 3, "guide_id": 3},
        {"tour_id": 4, "name": "Altyn Arashan Valley", "description": "Trek to Altyn Arashan Valley with hot springs", "ppl_limit": 12, "duration": 2, "price": 180.00, "company_id": 4, "guide_id": 4},
        {"tour_id": 5, "name": "Tash-Rabat Caravanserai", "description": "Visit the historical Tash-Rabat site", "ppl_limit": 8, "duration": 1, "price": 120.00, "company_id": 5, "guide_id": 5},
        {"tour_id": 6, "name": "Jyrgalan Valley Adventure", "description": "A valley adventure with waterfalls and forests", "ppl_limit": 12, "duration": 2, "price": 170.00, "company_id": 6, "guide_id": 6},
        {"tour_id": 7, "name": "Arslanbob Waterfalls Trek", "description": "Trekking to the famous waterfalls of Arslanbob", "ppl_limit": 15, "duration": 1, "price": 160.00, "company_id": 7, "guide_id": 7}
    ],
    "Tour_date": [
        {"tour_date_id": 1, "start_date": "2024-06-01", "end_date": "2024-06-02"},
        {"tour_date_id": 2, "start_date": "2024-07-10", "end_date": "2024-07-11"},
        {"tour_date_id": 3, "start_date": "2024-08-15", "end_date": "2024-08-17"},
        {"tour_date_id": 4, "start_date": "2024-09-05", "end_date": "2024-09-06"},
        {"tour_date_id": 5, "start_date": "2024-10-20", "end_date": "2024-10-21"},
        {"tour_date_id": 6, "start_date": "2024-11-01", "end_date": "2024-11-02"},
        {"tour_date_id": 7, "start_date": "2024-12-15", "end_date": "2024-12-16"}
    ],
    "Tour_time": [
        {"tour_date_id": 1, "tour_id": 1},
        {"tour_date_id": 2, "tour_id": 2},
        {"tour_date_id": 3, "tour_id": 3},
        {"tour_date_id": 4, "tour_id": 4},
        {"tour_date_id": 5, "tour_id": 5},
        {"tour_date_id": 6, "tour_id": 6},
        {"tour_date_id": 7, "tour_id": 7}
    ],
    "Tour_dest": [
        {"tour_id": 1, "location_name": "Issyk-Kul"},
        {"tour_id": 2, "location_name": "Ala Archa"},
        {"tour_id": 3, "location_name": "Son-Kul"},
        {"tour_id": 4, "location_name": "Altyn Arashan"},
        {"tour_id": 5, "location_name": "Tash-Rabat"},
        {"tour_id": 6, "location_name": "Jyrgalan Valley"},
        {"tour_id": 7, "location_name": "Arslanbob"}
    ],
    "Tour_location": [
        {"location_name": "Issyk-Kul", "city": "Cholpon-Ata", "region": "Issyk-Kul"},
        {"location_name": "Ala Archa", "city": "Bishkek", "region": "Chuy"},
        {"location_name": "Son-Kul", "city": "Naryn", "region": "Naryn"},
        {"location_name": "Altyn Arashan", "city": "Karakol", "region": "Issyk-Kul"},
        {"location_name": "Tash-Rabat", "city": "Naryn", "region": "Naryn"},
        {"location_name": "Jyrgalan Valley", "city": "Talas", "region": "Talas"},
        {"location_name": "Arslanbob", "city": "Osh", "region": "Osh"}
    ],
    "Tour_category": [
        {"tour_id": 1, "category": "Lake Tour"},
        {"tour_id": 2, "category": "Hiking"},
        {"tour_id": 3, "category": "Cultural Tour"},
        {"tour_id": 4, "category": "Trekking"},
        {"tour_id": 5, "category": "Historical Site"},
        {"tour_id": 6, "category": "Adventure"},
        {"tour_id": 7, "category": "Waterfalls Trek"}
    ],
    "Guide": [
        {"guide_id": 1, "name": "Almaz", "contact_info": "almaz@kyrgyzadventure.com", "experience": 5, "salary": 300.00, "company_id": 1},
        {"guide_id": 2, "name": "Aida", "contact_info": "aida@nomadexpeditions.kg", "experience": 3, "salary": 250.00, "company_id": 2},
        {"guide_id": 3, "name": "Bek", "contact_info": "bek@silkroadtours.kg", "experience": 7, "salary": 350.00, "company_id": 3},
        {"guide_id": 4, "name": "Gulnur", "contact_info": "gulnur@highlandtravel.kg", "experience": 4, "salary": 280.00, "company_id": 4},
        {"guide_id": 5, "name": "Rustam", "contact_info": "rustam@ecotrekking.kg", "experience": 6, "salary": 320.00, "company_id": 5},
        {"guide_id": 6, "name": "Nurlan", "contact_info": "nurlan@adventurekg.com", "experience": 6, "salary": 310.00, "company_id": 6},
        {"guide_id": 7, "name": "Dilara", "contact_info": "dilara@kyrgyznomads.kg", "experience": 8, "salary": 360.00, "company_id": 7}
    ],
    "Customer": [
        {"customer_id": 1, "name": "Elina Esenbaeva", "contact_info": "linasenbye@gmail.com", "address": "122 Cheomdan, Gwangju"},
        {"customer_id": 2, "name": "Sumaiia Altynbekkyzy", "contact_info": "sumaiiia@gmail.com", "address": "456 Oak Avenue, London"},
        {"customer_id": 3, "name": "Zarina Altybay", "contact_info": "altybay@gmail.com", "address": "789 Pine Lane, Sydney"},
        {"customer_id": 4, "name": "Shynar Zhurunova", "contact_info": "shynar19@gmail.com", "address": "101 Maple Drive, Toronto"},
        {"customer_id": 5, "name": "Le Khoa", "contact_info": "leeekhoa@gmail.com", "address": "202 Cedar Way, Los Angeles"},
        {"customer_id": 6, "name": "Amirbek Nurmukhamedov", "contact_info": "amirbek@gmail.com", "address": "312 Central Blvd, Astana"},
        {"customer_id": 7, "name": "Tatyana Petrovna", "contact_info": "tatyana@gmail.com", "address": "456 Birch St, Moscow"}
    ],
    "Review": [
        {"review_id": 1, "rating": 5, "comment": "Amazing experience at Issyk-Kul!", "review_date": "2024-06-05", "customer_id": 1},
        {"review_id": 2, "rating": 4, "comment": "Beautiful hike in Ala Archa!", "review_date": "2024-07-12", "customer_id": 2},
        {"review_id": 3, "rating": 5, "comment": "Loved the culture at Son-Kul Lake", "review_date": "2024-08-20", "customer_id": 3},
        {"review_id": 4, "rating": 4, "comment": "Trek was challenging but worth it!", "review_date": "2024-09-10", "customer_id": 4},
        {"review_id": 5, "rating": 5, "comment": "Very informative tour at Tash-Rabat", "review_date": "2024-10-22", "customer_id": 5},
        {"review_id": 6, "rating": 5, "comment": "Fantastic waterfalls at Arslanbob", "review_date": "2024-11-01", "customer_id": 6},
        {"review_id": 7, "rating": 4, "comment": "Beautiful valleys and good guide", "review_date": "2024-12-01", "customer_id": 7}
    ],
    "Payment": [
        {"payment_id": 1, "date": "2024-06-01", "amount": 150.00, "customer_id": 1},
        {"payment_id": 2, "date": "2024-07-10", "amount": 100.00, "customer_id": 2},
        {"payment_id": 3, "date": "2024-08-15", "amount": 200.00, "customer_id": 3},
        {"payment_id": 4, "date": "2024-09-05", "amount": 180.00, "customer_id": 4},
        {"payment_id": 5, "date": "2024-10-20", "amount": 120.00, "customer_id": 5},
        {"payment_id": 6, "date": "2024-11-01", "amount": 160.00, "customer_id": 6},
        {"payment_id": 7, "date": "2024-12-15", "amount": 170.00, "customer_id": 7}
    ],
    "Booking": [
        {"customer_id": 1, "tour_id": 1, "booking_date": "2024-05-01", "booking_state": "confirmed"},
        {"customer_id": 2, "tour_id": 6, "booking_date": "2024-06-10", "booking_state": "confirmed"},
        {"customer_id": 3, "tour_id": 2, "booking_date": "2024-06-20", "booking_state": "confirmed"},
        {"customer_id": 4, "tour_id": 2, "booking_date": "2024-07-01", "booking_state": "confirmed"},
    ]
}

for name, docs in collections.items():
    collection = db[name]
    collection.drop()  
    collection.insert_many(docs)

print("MongoDB collections created successfully!")
