import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config({ path:'/.env'});

mongoose.connect(process.env.MONGODB_URI || process.env.DB_URI);

export default mongoose.connection;
