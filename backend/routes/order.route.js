const express=require(`express`)

const OrderRouter=express.Router()

OrderRouter.get(`/`,async(req,res)=>{
    res.send(`Order-Route`)
})

  
module.exports={
    OrderRouter
}
