import { Donors } from "../models/donorModel.js"

export const registerdonor=async(req,res)=>{
    try{
        const {email}=req.body;
        const checkemail=await Donors.findOne({email}).lean()
        if(!checkemail){
          const resdata=await new Donors(req.body).save()
          res.send({status:'Sucessfully registered'})
        }
        else{
            res.send({status:'Email already exists'})
        }
    }
    catch(err){
        console.log(err)
    }
}