from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient("mongodb+srv://sa2003200319:2LHSiPfdtu2EK2o5@cluster0.ahokn.mongodb.net/")
db = client["travel_agency"]

# General structure for CRUD operations
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Travel Agency API"}), 200

# ---------------- Company Endpoints ----------------
@app.route("/companies", methods=["GET"])
def get_companies():
    companies = list(db["Company"].find({}, {"_id": 0}))
    return jsonify(companies), 200

@app.route("/companies/<int:company_id>", methods=["GET"])
def get_company(company_id):
    company = db["Company"].find_one({"company_id": company_id}, {"_id": 0})
    if company:
        return jsonify(company), 200
    return jsonify({"error": "Company not found"}), 404

@app.route("/companies", methods=["POST"])
def create_company():
    data = request.json
    db["Company"].insert_one(data)
    return jsonify({"message": "Company added successfully"}), 201

@app.route("/companies/<int:company_id>", methods=["PUT"])
def update_company(company_id):
    data = request.json
    result = db["Company"].update_one({"company_id": company_id}, {"$set": data})
    if result.matched_count:
        return jsonify({"message": "Company updated successfully"}), 200
    return jsonify({"error": "Company not found"}), 404

@app.route("/companies/<int:company_id>", methods=["DELETE"])
def delete_company(company_id):
    result = db["Company"].delete_one({"company_id": company_id})
    if result.deleted_count:
        return jsonify({"message": "Company deleted successfully"}), 200
    return jsonify({"error": "Company not found"}), 404

# ---------------- Tour Endpoints ----------------
@app.route("/tours", methods=["GET"])
def get_tours():
    tours = list(db["Tour"].find({}, {"_id": 0}))
    return jsonify(tours), 200

@app.route("/tours/<int:tour_id>", methods=["GET"])
def get_tour(tour_id):
    tour = db["Tour"].find_one({"tour_id": tour_id}, {"_id": 0})
    if tour:
        return jsonify(tour), 200
    return jsonify({"error": "Tour not found"}), 404

@app.route("/tours", methods=["POST"])
def create_tour():
    data = request.json
    db["Tour"].insert_one(data)
    return jsonify({"message": "Tour added successfully"}), 201

@app.route("/tours/<int:tour_id>", methods=["PUT"])
def update_tour(tour_id):
    data = request.json
    result = db["Tour"].update_one({"tour_id": tour_id}, {"$set": data})
    if result.matched_count:
        return jsonify({"message": "Tour updated successfully"}), 200
    return jsonify({"error": "Tour not found"}), 404

@app.route("/tours/<int:tour_id>", methods=["DELETE"])
def delete_tour(tour_id):
    result = db["Tour"].delete_one({"tour_id": tour_id})
    if result.deleted_count:
        return jsonify({"message": "Tour deleted successfully"}), 200
    return jsonify({"error": "Tour not found"}), 404

# ---------------- Booking Endpoints ----------------
@app.route("/bookings", methods=["GET"])
def get_bookings():
    bookings = list(db["Booking"].find({}, {"_id": 0}))
    return jsonify(bookings), 200

@app.route("/bookings", methods=["POST"])
def create_booking():
    data = request.json
    db["Booking"].insert_one(data)
    return jsonify({"message": "Booking added successfully"}), 201

@app.route("/bookings/<int:customer_id>/<int:tour_id>", methods=["DELETE"])
def delete_booking(customer_id, tour_id):
    result = db["Booking"].delete_one({"customer_id": customer_id, "tour_id": tour_id})
    if result.deleted_count:
        return jsonify({"message": "Booking deleted successfully"}), 200
    return jsonify({"error": "Booking not found"}), 404

# ---------------- Customer Endpoints ----------------
@app.route("/customers", methods=["GET"])
def get_customers():
    customers = list(db["Customer"].find({}, {"_id": 0}))
    return jsonify(customers), 200

@app.route("/customers/<int:customer_id>", methods=["GET"])
def get_customer(customer_id):
    customer = db["Customer"].find_one({"customer_id": customer_id}, {"_id": 0})
    if customer:
        return jsonify(customer), 200
    return jsonify({"error": "Customer not found"}), 404

@app.route("/customers", methods=["POST"])
def create_customer():
    data = request.json
    db["Customer"].insert_one(data)
    return jsonify({"message": "Customer added successfully"}), 201

# ---------------- Payment Endpoints ----------------
@app.route("/payments", methods=["GET"])
def get_payments():
    payments = list(db["Payment"].find({}, {"_id": 0}))
    return jsonify(payments), 200

@app.route("/payments", methods=["POST"])
def create_payment():
    data = request.json
    db["Payment"].insert_one(data)
    return jsonify({"message": "Payment added successfully"}), 201

# ---------------- Review Endpoints ----------------
@app.route("/reviews", methods=["GET"])
def get_reviews():
    reviews = list(db["Review"].find({}, {"_id": 0}))
    return jsonify(reviews), 200

@app.route("/reviews/<int:review_id>", methods=["GET"])
def get_review(review_id):
    review = db["Review"].find_one({"review_id": review_id}, {"_id": 0})
    if review:
        return jsonify(review), 200
    return jsonify({"error": "Review not found"}), 404

@app.route("/reviews", methods=["POST"])
def create_review():
    data = request.json
    db["Review"].insert_one(data)
    return jsonify({"message": "Review added successfully"}), 201

if __name__ == "__main__":
    app.run(debug=True)
