import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
    fabricMaterial: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isNew: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Object,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)
export default Product
