import mongoose from "mongoose";

const Mekanik = new mongoose.Schema({
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

  address: {
    type: String,
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

let MekanikSchema = null;

try {
  MekanikSchema = mongoose.model("Mekanik", Mekanik);
} catch (e) {
  MekanikSchema = mongoose.model("Mekanik");
}

export default MekanikSchema;
