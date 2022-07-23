import mongoose from 'mongoose'

const customerEmailSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

const CustomerEmail = mongoose.model('CustomerEmail', customerEmailSchema)
export default CustomerEmail
