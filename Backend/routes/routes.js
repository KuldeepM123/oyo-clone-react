import express from "express";
import { userController } from "../controllers/user.controller.js";
import { loginController } from "../controllers/login.controller.js";
import { hotelController } from "../controllers/hotel.controller.js";
import { bookingController } from "../controllers/booking.controller.js";

const router = express.Router();

router.route("/").get((res) => {
  res.status(200).json();
});

router.route("/user").get(userController.getAllUser);
router.route("/user").post(userController.addUser);

router.route("/hotel").get(hotelController.getAllHotel);
router.route("/hotel").post(hotelController.addHotel);

router.route("/user/:id").get(userController.getUserById);
router.route("/user/:id").put(userController.updateUser);
router.route("/user/:id").delete(userController.deleteUser);

router.route("/hotel/:id").get(hotelController.getHotelById);
router.route("/hotel/:id").put(hotelController.updateHotel);
router.route("/hotel/:id").delete(hotelController.deletHotel);

router.route("/login").post(loginController.login);

router.route("/book/:id").post(bookingController.book);
router.route("/book/:id").delete(bookingController.cancelBooking);

export default router;
