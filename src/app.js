import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use("/api", blogRoutes);

export default app;