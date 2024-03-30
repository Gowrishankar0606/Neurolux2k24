import mongoose from 'mongoose'
import { conn } from '../db/db.js'

const Donorsschema = mongoose.Schema({
  fullname: String,
  dob: String,
  email:{type:String,trim:true},
  phonenumber: String,
  bloodgroup:String,
  address:String,
  Role: { type: String, default: 'donor' }, // define default register role based on application
  Status: { type: String, default: 'Active' }
})

const Donors = conn.model('donors', Donorsschema)
export { Donors }