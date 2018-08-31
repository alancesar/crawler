import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  origin: { type: String, required: true },
  source: { type: String, required: true },
  links: { type: Array, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Entry', schema);
