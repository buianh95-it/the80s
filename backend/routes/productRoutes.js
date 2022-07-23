import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductNew,
  getProductJackets,
  getProductById,
  getProductJeans,
  getProductByKeyword,
  addProduct,
  deleteProduct,
  updateProduct,
  createProductReview,
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'

//GET /api/products
router.route('/').get(getProducts)

// GET /api/products/new
router.route('/new').get(getProductNew)

//GET /api/products/jackets
router.route('/jackets').get(getProductJackets)

//GET /api/products/pants
router.route('/pants').get(getProductJeans)

//GET /api/products/search:keyword
router.route('/search').get(getProductByKeyword)

// GET /api/products/:id
router.route('/:id').get(getProductById)

//POST /api/products/add
router.post('/add', addProduct)

//DELETE /api/products/:id
router.route('/:id').delete(deleteProduct)

//PUT /api/products/:id
router.route('/:id').put(updateProduct)

//POST /api/products/:id/reviews
router.route('/:id/reviews').post(protect, createProductReview)

export default router
