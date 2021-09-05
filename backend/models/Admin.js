import mongoose from "mongoose";

const Admin = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  privacy_policy: {
    type: Boolean,
    required: true,
    default: true,
  },
  role: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

let UserSchema = null;

try {
  UserSchema = mongoose.model("Admin", Admin);
} catch (e) {
  UserSchema = mongoose.model("Admin");
}

export default UserSchema;
