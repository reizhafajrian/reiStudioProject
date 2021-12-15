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
<<<<<<< HEAD
  await mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
=======
>>>>>>> main
};

export default connectDB;
