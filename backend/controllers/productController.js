import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//Get all products
// GET /api/products/?pageNumber=1&keyword=all
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  if (req.query.keyword !== 'all' && req.query.keyword !== '') {
    const keyword = {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
    const count = await Product.count({ ...keyword })
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
    res.json({ products, page, total: count, pageSize })
  } else if (req.query.keyword === 'all' || req.query.keyword === '') {
    const count = await Product.count({})
    const products = await Product.find({})
      .limit(pageSize)
      .skip(pageSize * (page - 1))
    res.json({ products, page, total: count, pageSize })
  }
})

// Get all product new when isNew = true
// GET /api/products/new
const getProductNew = asyncHandler(async (req, res) => {
  const pageSize = 4
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.count({ isNew: true })
  const products = await Product.find({ isNew: true })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, pageSize, total: count })
})

// Get all product by categoryId jackets
// GET /api/products/jackets
const getProductJackets = asyncHandler(async (req, res) => {
  const pageSize = 4
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.count({ categoryId: 1 })
  const products = await Product.find({ categoryId: 1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, total: count, pageSize })
})

// Get all product by categoryId Jeans
// GET /api/products/jeans
const getProductJeans = asyncHandler(async (req, res) => {
  const pageSize = 4
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.count({ categoryId: 2 })
  const products = await Product.find({ categoryId: 2 })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, total: count, pageSize })
})

// Get product search API
//GET /api/products/search/?keyword=:keyword&pageNumber=:pageNumber
const getProductByKeyword = asyncHandler(async (req, res) => {
  if (req.query.keyword !== 'all' && req.query.keyword !== '') {
    const keyword = {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
    const products = await Product.find({ ...keyword })
    const count = await Product.count({ ...keyword })
    res.json({ products })
  } else if (req.query.keyword === 'all' || req.query.keyword === '') {
    const products = await Product.find({})
    const count = await Product.count({})
    res.json({ products })
  }
})

// Get product detail by id
//GET /api/product/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

// Add product by id
//POST /api/products/add
const addProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body)
  if (product) {
    res.json(product)
  } else {
    res.status(400).json({ message: 'Product not added' })
  }
})

// Delete product by id
//POST /api/products/:id
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({ message: 'Product deleted' })
  } else {
    res.status(400).json({ message: 'Product not added' })
  }
})

// Update product by id
// PUT /api/products/:id
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  if (product) {
    res.status(201).json({ message: 'Product updated' })
  } else {
    res.status(400).json({ message: 'Product not updated' })
  }
})

// Create new review
//POST /api/products/:id/reviews
const createProductReview = asyncHandler(async (req, res) => {
  const { rate, comment } = req.body
  console.log(rate, comment)
  const product = await Product.findById(req.params.id)
  if (product) {
    const review = {
      name: req.user.name,
      rating: rate,
      comment,
      user: req.user._id,
    }
    product.reviews.push(review)
    product.numReviews = product.reviews.length
    product.rating =
      product.reviews.reduce((acc, product) => acc + product.rating, 0) / product.reviews.length
    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
  getProducts,
  getProductNew,
  getProductJackets,
  getProductByKeyword,
  getProductById,
  getProductJeans,
  addProduct,
  deleteProduct,
  createProductReview,
  updateProduct,
}
