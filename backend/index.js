import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use(userRoute); 
app.use('/products', productRoutes);
 
app.listen(8000, () => console.log('Server running at port 8000'));