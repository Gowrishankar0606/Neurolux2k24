import express from 'express'
import apiRouter from './apiRoutes.js'
const router = express.Router()
router.use('/api', apiRouter)
export default router