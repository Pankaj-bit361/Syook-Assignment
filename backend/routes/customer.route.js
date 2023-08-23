const express=require(`express`)
const { CustomerModel } = require("../models/customer.model")
const jwt=require("jsonwebtoken")

const CustomerRouter=express.Router()


CustomerRouter.post("/signup",async(req,res)=>{

    const {email}=req.body
    let already= await CustomerModel.findOne({email})

    if(already){
        res.status(200).send({"msg":"user already registersd"})
    }else{
            
                let newuser=new CustomerModel(req.body)
                await newuser.save()
                res.status(200).send({"msg":"user registered successfully"})

    }

})



CustomerRouter.post(`/login`,async(req,res)=>{
    const {email,password}=req.body
     let already= await CustomerModel.findOne({email})
       if(already){          
        if(already.password==password){
            jwt.sign({ author:already.name,authorID:already._id }, "syook", async(err, token)=> {
                if(token){
                 res.status(200).send({"msg":"login successfully",token,already})
                }else{
                  res.status(400).send({"err":err.message})
                }
               })
         } 
         else{
            res.status(200).send({msg:"wrong password"})
        }  
        }else{
            res.status(200).send({msg:"account doesn't exist"})
        }
               
})

module.exports={
    CustomerRouter
}
