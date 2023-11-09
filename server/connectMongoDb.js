import mongoose from "mongoose";

const connectDB = async () => {
  try {

    const conn = await mongoose.connect("mongodb+srv://abhishek408108:am408108@stack-overflow-clone.58upnzy.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
