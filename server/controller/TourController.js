import TourPackage from "../model/tourPackage.model.js";
import mongoose from "mongoose";


export const createTourPackage = async (req, res) => {
    const data = req.body;
    try {
        const newTourPackage = new TourPackage(data);
        await newTourPackage.save();
        res.status(201).json(newTourPackage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateTourPackage = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body;
        
    if(!updatedTour) {
        return res.status(404).json({ msg: "Tour Not Found" });
    }
        await TourPackage.findByIdAndUpdate(id,{ $set: data },  // The $set update operator
            { new: true, runValidators: true })
        return res.status(200).json({updatedTour});
    } catch (error) {
    res.status(500).json(error.message)
    }
}

export const deleteTourPackage = async (req, res) => {
    const id = req.params.id;
    try {
        await TourPackage.findByIdAndDelete(id);
        res.status(200).json({ message: "Tour Package Deleted" });
    } catch (error) {
        res.status(500).json(error.message)
    }
}