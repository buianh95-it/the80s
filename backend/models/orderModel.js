import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: Object,
      required: true,
    },

    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.ObjectId,
          required: true,
          ref: 'Product',
        },
        color: { type: String, required: true },
        size: { type: String, required: true },
      },
    ],

    shippingAddress: {
      phone: { type: String, required: true },
      address: { type: String, required: true },
      houseNumber: {
        type: 'String',
        default: ' ',
      },
      wards: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, default: '' },
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },

    shippingPrice: {
      type: Number,
      default: 0.0,
    },

    totalPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },

    isPaid: {
      type: Boolean,
      require: true,
      default: false,
    },

    paidAt: {
      type: Date,
    },

    isDelivered: {
      type: Boolean,
      require: true,
      default: false,
    },

    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)
export default Order
