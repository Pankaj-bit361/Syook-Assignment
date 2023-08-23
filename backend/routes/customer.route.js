const express=require(`express`)

const CustomerRouter=express.Router()

CustomerRouter.get(`/`,async(req,res)=>{
    res.send(`Customer-Route`)
})


module.exports={
    CustomerRouter
}
