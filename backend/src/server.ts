import dotenv from "dotenv";
import express from "express";
import routes from "./routes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Base routes
app.use("/", routes);

// API routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});