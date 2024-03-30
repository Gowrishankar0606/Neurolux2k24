import express from 'express'
import { registerdonor } from '../controllers/registerContoller.js'
const apiRouter = express.Router()
apiRouter.post('/apiregisterdonor', registerdonor)
export default apiRouter