import mongoose from 'mongoose';

export async function connectToDb() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("The Database is connected");
}