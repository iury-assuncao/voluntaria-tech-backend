import { Schema, model, Document } from 'mongoose';

export interface IApplication extends Document {
  voluntaryId?: string;
  status: string;
  description: string;
  availability: string;
  projectId?: string;
  id?: string;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    voluntaryId: {
      type: Schema.Types.ObjectId,
      ref: 'voluntary',
      required: true,
    },
    status: { type: String, required: true },
    availability: { type: String, required: true },
    description: { type: String, required: true },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'voluntary',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ApplicationModel = model<IApplication>('application', ApplicationSchema);

export default ApplicationModel;
