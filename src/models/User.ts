import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  city: String,
  marketAddr: String,
  officialName: String,
  marketNumber: String,
  number: String,
  code: {
    type: Number,
    required: true
  }
})

const User = mongoose.model('User', userSchema);

export default User