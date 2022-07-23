import express from 'express'
const router = express.Router()
import {
  authUser,
  subscribeEmail,
  registerUser,
  updateUserProfile,
  updateUserPassword,
  getAllUsers,
  getEmailSub,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/register', registerUser)
router.post('/login', authUser)
router.post('/subscribe', subscribeEmail)
router.route('/all').get(getAllUsers)
router.route('/email').get(getEmailSub)

// protect width middleware
router.route('/profile').put(protect, updateUserProfile)
router.route('/change-password').put(protect, updateUserPassword)

export default router
