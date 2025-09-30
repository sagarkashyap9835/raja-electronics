import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import { connectDb } from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import cartRouter from "./routes/cartRoute.js";
import userRouter from './routes/userRoute.js';
import adminRoute from "./routes/adminRoute.js";
import productRoute from "./routes/productRoute.js";
import bodyParser from "body-parser";
import orderRoutes from "./routes/orderRoutes.js";
import contactRoutes from "./routes/contactRoute.js";

dotenv.config();
const app=express();
// app.use(cors());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://electromart-iivz.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);








app.use(bodyParser.json());
// api end points nmsdjbbjhb 

app.use(express.json());
app.use("/api/product", productRoute);
app.use("/api/admin", adminRoute);
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRoutes);
app.use("/api/contact", contactRoutes);
app.get("/",(req,res)=>{
    res.send("api works vidy kashyap")
})

connectDb();
connectCloudinary();

app.listen(process.env.PORT,()=>{
    console.log(`server app running on ${process.env.PORT}`)
})