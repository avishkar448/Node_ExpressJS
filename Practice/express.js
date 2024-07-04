import mongoose from "mongoose";
import express from "express";
const app = express();
import env from "dotenv";
import colors from "colors";
import Router from './route.js'

env.config();
app.use(express.json());
app.use('/user',Router)

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected'.bgMagenta.white);
  } catch (error) {
    console.log(error);
  }
};

connectDB()

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`.bgGreen.white);
  });

// .then(()=>{
//     console.log(`Connected to MongoDB database at port ${process.env.PORT}`.bgMagenta.white)
// })
// .catch(()=>{
//     console.log('Error to connect the database')
// })
