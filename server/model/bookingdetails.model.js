import mongoose from "mongoose";

const bookingDetailsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tourPackageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TourPackage"
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    },
    bookingDate: {
        type: Date
    }
},{timestamps: true});

const bookingDetails = mongoose.model("bookingDetails",bookingDetailsSchema);

export default bookingDetails;

