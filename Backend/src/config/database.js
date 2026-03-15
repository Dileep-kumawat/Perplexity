import mongoose from 'mongoose';

export async function connectToDb() {
    await mongoose.connect(process.env.MONGOdB_URI);
    console.log("The Database is connected");
}