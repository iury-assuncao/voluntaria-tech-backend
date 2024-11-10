import mongoose, { Schema, Document, Types } from 'mongoose';

interface IOng extends Document {
  name: string;
  cnpj: string;
  mission: string;
  linkImg: string;
  projects: Types.ObjectId[];
  userId?: Types.ObjectId;
}

const OngSchema: Schema = new Schema({
  name: { type: String, required: true },
  cnpj: { type: String, required: true },
  mission: { type: String, required: true },
  linkImg: { type: String, required: true },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: false },
});

const OngModel = mongoose.model<IOng>('Ong', OngSchema);

export default OngModel;
