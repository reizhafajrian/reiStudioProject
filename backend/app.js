import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    await mongoose.connect(process.env.mongodburl, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    return error;
  }
};

export default connectDB;
