import mongoose, { Schema } from 'mongoose';

interface IUser {
  _id: string;
  email: string;
  password: string;
  userType: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, select: true },
  userType: { type: String, required: true, enum: ['volunter', 'ong'] },
});

export const UserModel = mongoose.model<IUser>('user', UserSchema);
