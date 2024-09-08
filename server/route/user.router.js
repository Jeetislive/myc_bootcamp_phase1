import express from "express"
import { userLogin, userRegister, getUserProfile, getAllUserProfile } from "../controller/userController.js";
import { bookTour, cancelBooking, getAllTours } from "../controller/userTourController.js";
import adminRouter from "./admin.route.js";

const userRouter = express.Router();

userRouter.
route("/register").
post(userRegister)

userRouter.
route("/login").
post(userLogin)

userRouter.
route("/users/profile").
get(getAllUserProfile)

userRouter.
route("/users/profile/:id").
get(getUserProfile)

userRouter.
route("/user/bookTour").
post(bookTour)

userRouter.
route("/admin")
.post(adminRouter)

userRouter.
route("/admin")
.post(adminRouter)

userRouter.
route("/admin")
.delete(adminRouter)

//user - Tour Controller
userRouter.
route("/tours")
.get(getAllTours)


userRouter.
route("/booking/cancelBooking/:id").
post(cancelBooking)


export default userRouter;