import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import CustomerEmail from '../models/customerEmail.js'

// Auth user & get token
// POST /api/users/login
// Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      gender: user.gender,
      isAdmin: user.isAdmin,
      image: user.image,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// Register new user
// POST /api/users/register
// Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      gender: user.gender,
      isAdmin: user.isAdmin,
      image: user.image,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// Email subscription
// POST /api/users/subscribe
// Public
const subscribeEmail = asyncHandler(async (req, res) => {
  const { email } = req.body
  try {
    const customerEmail = await CustomerEmail.create({ email })
    res.json({ message: 'Email subscribed' })
  } catch (err) {
    res.status(401)
    throw new Error('Email already subscribed')
  }
})

// Update user profile
// PUT /api/users/profile
// Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.address = req.body.address || user.address
    user.gender = req.body.gender || user.gender
    user.phone = req.body.phone || user.phone
    const updateUser = await user.save()
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      gender: user.gender,
      isAdmin: user.isAdmin,
      image: user.image,
      token: generateToken(user._id),
    })
  } else {
    res.status(404)
    throw newError('User not found')
  }
})

// PUT /api/users/change-password
// Private
const updateUserPassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.password = req.body.password
    const updateUser = await user.save()
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      gender: user.gender,
      isAdmin: user.isAdmin,
      image: user.image,
      token: generateToken(user._id),
    })
  } else {
    res.status(404)
    throw newError('User not found')
  }
})

// Get All Users
// Get /api/users/all
const getAllUsers = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1
  const count = await User.count({})
  const users = await User.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ users, page, total: count, pageSize })
})

// Get email subscriptions
// Get /api/users/email
const getEmailSub = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1
  const count = await CustomerEmail.count({})
  const emails = await CustomerEmail.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ emails, page, total: count, pageSize })
})

export {
  authUser,
  subscribeEmail,
  registerUser,
  updateUserProfile,
  updateUserPassword,
  getAllUsers,
  getEmailSub,
}
