import mongoose from 'mongoose';
import { config } from "dotenv";
config();

mongoose.connect(process.env.DB_URI!);

export default mongoose.connection;
