import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  communityLink: string;
  volunteers: string[];
  status: string;
  DeliveryDate: Date;
  ongId?: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    communityLink: { type: String, required: true },
    volunteers: [
      { type: Schema.Types.ObjectId, ref: 'voluntary', required: true },
    ],
    status: { type: String, required: true },
    DeliveryDate: { type: Date, required: true },
    ongId: { type: Schema.Types.ObjectId, ref: 'ong', required: true },
  },
  {
    timestamps: true,
  },
);

// Modelo do Mongoose
const ProjectModel = model<IProject>('Project', ProjectSchema);

export default ProjectModel;