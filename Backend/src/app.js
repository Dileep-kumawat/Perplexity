import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import cors from 'cors';
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
    origin: process.env.FRONTEND_ENDPOINT,
    credentials: true
}));

app.use('/api/auth', authRouter);

export default app;