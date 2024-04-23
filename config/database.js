import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    //if the database is already connected, don't connect again
    if (connected) {
        console.log('MangoDB is already connected...');
        return;
    }
    //connect to MangoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('MongoDB connected...')
    } catch (error) {
        console.log(error);
    }
};
export default connectDB;