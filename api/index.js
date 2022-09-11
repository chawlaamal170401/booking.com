import express from 'express';
import dotenv from 'dotenv';
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import cookieParser from 'cookie-parser';
import connectWithDb from './config/db.js';

const app = express();
dotenv.config();

connectWithDb();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong";
    return res.status(err.Status).json({
        success: false,
        message: errMessage,
        status: errStatus
    });
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});