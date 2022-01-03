import mongoose from "mongoose";

const Chat = new mongoose.Schema({
  name_channel: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

let ChatSchema = null;

try {
  ChatSchema = mongoose.model("Chat", Chat);
} catch (e) {
  ChatSchema = mongoose.model("Chat");
}

export default UserSchema;
