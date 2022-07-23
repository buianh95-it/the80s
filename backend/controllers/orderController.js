import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// Create a new order
// POST /api/orders
const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, shippingPrice, totalPrice } = req.body
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new Order({
      orderItems,
      user: { id: req.user._id, name: req.user.name, email: req.user.email },
      shippingAddress,
      paymentMethod,
      shippingPrice,
      totalPrice,
    })
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
})

// Get logged in user orders
// GET /api/orders/myorders
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ 'user.id': req.user._id })
  if (orders) {
    res.status(200).json(orders)
  } else {
    res.status(404).json({ message: 'No orders found' })
  }
})

//Get all orders
//GET api/orders/all/
const getAllOrders = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1
  const count = await Order.count({})
  const orders = await Order.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ orders, page, total: count, pageSize })
})

export { addOrderItems, getMyOrders, getAllOrders }
