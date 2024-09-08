import express from "express";
import { createTourPackage, deleteTourPackage, updateTourPackage } from "../controller/TourController.js";

const adminRouter = express.Router();

adminRouter.
route("/addTourPackage").
post(createTourPackage)

adminRouter.
route("/updateTourPackage/:id").
post(updateTourPackage)

adminRouter.
route("/updateTourPackage/:id").
delete(deleteTourPackage)


export default adminRouter;