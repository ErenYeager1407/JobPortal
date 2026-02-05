import express from "express"
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js";

const Router = express.Router()
Router.route("/apply/:id").post(isAuthenticated, applyJob)
Router.route("/get").get( isAuthenticated, getAppliedJobs)
Router.route("/:id/applicants").get(isAuthenticated, getApplicants)
Router.route("/status/:id/update").put( isAuthenticated, updateStatus)

export default Router;