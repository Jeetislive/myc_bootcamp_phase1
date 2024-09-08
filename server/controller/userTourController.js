import bookingDetails from "../model/bookingdetails.model.js";
import TourPackage from "../model/tourPackage.model.js";

export const getAllTours = async(req,res) => {
    try {
        const loc = req.query.location;
        const type = req.query.tourType;
        const obj = {};
        if (loc) {
            obj.location = loc;
        }
        if (type) {
            obj.tourType = type;
        }
        console.log(obj);
        
        const tours = await TourPackage.find(obj);
        console.log(tours);

        
        return res.status(201).json(tours);
        
    } catch (error) {
        return res.status(500).json({msg: "500 Server error :("})
    }
}

export const bookTour = async(req, res) => {
    try {
        const data = req.body;
        data.status = "confirmed"
        const book = new bookingDetails(data)
        await book.save();
        res.status(201).json(book);
    }
    catch(error) {
        return res.status(500).json({msg: error.message})
    }
}

export const cancelBooking = async(req, res) => {
    const id = req.params.id;

    console.log(id);
    try {
        const book = await bookingDetails.findById(id);
        if(!book) return res.status(404).json({msg: "Booking not found"})
            
        book.status = "cancelled";
        await book.save();
        res.status(200).json({msg: "Booking Canceled Successfully"});
        // const book = await bookingDetails.findByIdAndUpdate(id, {status: "cancelled"})
        // if(!book) return res.status(404).json({msg: "Booking not found"})
        // res.status(200).json(book);
    }
    catch(error) {
        return res.status(500).json({msg: error.message})
    }
}

