import mongoose from 'mongoose';
const uerSchema = new mongoose.schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    }, 
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.mmodel('User', userSchema);
