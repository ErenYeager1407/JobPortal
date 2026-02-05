import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from './routes/user.route.js'
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js'

const app = express();
dotenv.config({});//reads .env and stores variables in process.env

//middlewares
app.use(express.json()); //read json 
app.use(express.urlencoded({extended: true})) //read form data
app.use(cookieParser()) //read cookies
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true // allow browser to send credentials
}
app.use(cors(corsOptions)) //allow frontend and backend communiacations

const PORT = process.env.PORT || 3000;

//apis
app.use('/api/v1/user', userRoute)
app.use('/api/v1/company', companyRoute)
app.use('/api/v1/job', jobRoute)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})