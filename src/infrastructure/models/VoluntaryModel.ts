import mongoose, { Schema, model, Document, ObjectId } from 'mongoose';

interface IVoluntary extends Document {
  email: string;
  name: string;
  cpf: string;
  skills: string;
  availability: string;
  linkImg: string;
  applications: ObjectId[];
  preferences: string;
  createdBy: string;
  userId?: mongoose.Types.ObjectId;
}

const VoluntarySchema = new Schema<IVoluntary>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    skills: { type: String, required: true },
    availability: { type: String, required: true },
    linkImg: { type: String, required: false },
    applications: [{ type: Schema.Types.ObjectId, ref: 'application' }],
    preferences: { type: String, required: false },
    createdBy: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  { timestamps: true },
);

const VoluntaryModel = model<IVoluntary>('voluntary', VoluntarySchema);

export { VoluntaryModel, IVoluntary };
