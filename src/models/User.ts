import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  city: String,
  marketAddr: String,
  officialName: String,
  marketNumber: String,
  phoneNumber: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  }
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User