import mongoose from 'mongoose'
import dotenv from 'dotenv'

import users from './data/users.js'
import products from './data/products.js'
import categories from './data/categories.js'

import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import Category from './models/categoryModel.js'

import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await Category.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUsers = createdUsers[0]._id
    const sampleProducts = products.map((product) => ({ user: adminUsers, ...product }))
    await Product.insertMany(sampleProducts)
    await Category.insertMany(categories)

    console.log('Data imported!')
    process.exit(0)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

const deleteData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await Category.deleteMany()
    await User.deleteMany()

    console.log('Data deleted!')
    process.exit(0)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

importData()
