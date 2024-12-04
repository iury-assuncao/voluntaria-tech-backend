import mongoose, { Schema, model, Document, ObjectId } from 'mongoose';

interface IVoluntary extends Document {
  email: string;
  name: string;
  cpf: string;
  skills: string;
  linkImg: string;
  applications: ObjectId[];
  description: string;
  userId?: mongoose.Types.ObjectId;
}

const VoluntarySchema = new Schema<IVoluntary>(
  {
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    skills: { type: String, required: true },
    description: { type: String, required: false },
    linkImg: { type: String, required: false },
    applications: [{ type: Schema.Types.ObjectId, ref: 'application' }],
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  { timestamps: true },
);

const VoluntaryModel = model<IVoluntary>('voluntary', VoluntarySchema);

export { VoluntaryModel, IVoluntary };
