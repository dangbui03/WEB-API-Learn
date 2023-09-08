import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
 _id: mongoose.Schema.Types.ObjectId,
 name: {
 type: String,
 required: true,
 },
 age: {
 type: Number,
 },
});
export default mongoose.model('users', userSchema);