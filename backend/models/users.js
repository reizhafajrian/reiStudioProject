import mongoose from "mongoose";

const User = new mongoose.Schema({
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
  order: {
    type: Array,
    required: false,
  },
});

let UserSchema = null;

try {
  UserSchema = mongoose.model("User", User);
} catch (e) {
  UserSchema = mongoose.model("User");
}

export default UserSchema;
