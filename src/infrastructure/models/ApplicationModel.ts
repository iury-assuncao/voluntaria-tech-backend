import { Schema, model, Document } from 'mongoose';

export interface IApplication extends Document {
  voluntaryId: string;
  status: string;
  projectId: string;
  id?: string;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    voluntaryId: { type: String, required: true },
    status: { type: String, required: true },
    projectId: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

const ApplicationModel = model<IApplication>('Application', ApplicationSchema);

export default ApplicationModel;
