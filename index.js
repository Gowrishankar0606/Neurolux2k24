import express from 'express'
import compression from 'compression'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes/index.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(compression())
app.use('/uploads', express.static('uploads'))
app.use(cors({
  origin: '*',
  credentials: true
}))
app.use('/', router)
app.get('/app', (req, res) => res.send('Welcome to blooddonorfinder'))
const PORT = 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))