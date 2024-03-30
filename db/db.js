import mongoose from 'mongoose'
export const conn = mongoose.createConnection('mongodb://0.0.0.0:27017/blooddonorfinder', (err, db) => {
  if (err) {
    console.log(err)
  }
  console.log('Blooddonorfinder Database Connected successfully')
})