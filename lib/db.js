import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("MONGODB_URI não definido nos secrets");

mongoose.connect(uri);

export default mongoose;
