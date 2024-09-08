import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "An itinerary must have a day number"]
    },
    description: {
        type: String,
        required: [true, "An itinerary must have activities"]
    }
 });

const TourPackageSchema = new mongoose.Schema({
    // AdminId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // }, 
    name: {
        type: String,
        required: [true, "A tour package must have a name"],
        unique: true
    },
    location: {
        type: String,
        required: [true, "A tour package must have a location"]
    },
    tourType: {
        type: String,
        enum: ["Beach", "Mountain Tour", "Jungle Safari", "Adventure"],
        required: [true, "A tour package must have a tour type"]
    },
    price: {
        type: Number,
        required: [true, "A tour package must have a price"]
    },
    description: {
        type: String,
        required: [true, "A tour package must have a description"]
    },
    itinerary: {
        type: [itinerarySchema],
        required: [true, "A tour package must have an itinerary"]
    }
},{timestamps: true})

const TourPackage = mongoose.model("TourPackage", TourPackageSchema);

export default TourPackage;