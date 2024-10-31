import mongoose from 'mongoose';

const connectMongoose = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/voluntaria-tech', {});
    console.log('Successful connecting with database!');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error);
    process.exit(1);
  }
};

export default connectMongoose;
