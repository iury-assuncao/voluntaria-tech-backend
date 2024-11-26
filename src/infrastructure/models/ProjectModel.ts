import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  communityLink: string;
  applications: string[];
  status: string;
  active: boolean;
  type: string;
  deliveryDate: Date;
  ongId?: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    communityLink: { type: String, required: true },
    type: { type: String, required: true },
    applications: [
      { type: Schema.Types.ObjectId, ref: 'application', required: true },
    ],
    status: { type: String, required: true, default: 'AGUARDANDO' },
    active: { type: Boolean, required: true, default: true },
    deliveryDate: { type: Date, required: true },
    ongId: { type: Schema.Types.ObjectId, ref: 'ong', required: true },
  },
  {
    timestamps: true,
  },
);

const ProjectModel = model<IProject>('project', ProjectSchema);

export default ProjectModel;
