import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRouters from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Allow to receive json data in the body of req.body
// This is body parser middleware
app.use(express.json())

connectDB()

const PORT = process.env.PORT || 5000

app.use('/api/products', productRoutes)
app.use('/api/users', userRouters)
app.use('/api/upload', uploadRoutes)
app.use('/api/orders', orderRoutes)
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send(`API's running on port ${PORT}`)
  })
}

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT : ${PORT}`))
