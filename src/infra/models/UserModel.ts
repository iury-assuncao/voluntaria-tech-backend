import mongoose, { Schema } from "mongoose";

interface IUser {
  id: string;
  email: string;
  password: string;
  userType: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true, enum: ["volunter", "ong"] },
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
