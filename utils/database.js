import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect();
    console.log('Success: Connected to MongoDB');
  } catch (err) {}
};

export default connectDB;
