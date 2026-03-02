import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
  saveJob,
  getSavedJobs,
  removeSavedJob,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);
router.route("/save-job").post(isAuthenticated, saveJob);
router.route("/saved-jobs").get(isAuthenticated, getSavedJobs);
router.route("/remove-saved-job").post(isAuthenticated, removeSavedJob);

export default router;
