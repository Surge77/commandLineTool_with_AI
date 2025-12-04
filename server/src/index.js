import express from "express"
import dotenv from "dotenv"
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth.js";

dotenv.config();

const app = express()

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);

app.use("/api/auth", toNodeHandler(auth)); 
app.use(express.json());

app.get("/health",(req,res) => {
  res.send("OK")
})


app.listen(process.env.PORT, () => {
  console.log(`Your application is running on localhost port ${process.env.PORT}`);
  
})