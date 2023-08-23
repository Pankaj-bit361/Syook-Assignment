
const express=require(`express`)
const { ItemModel } = require("../models/items.model")

const ItemRouter=express.Router()

ItemRouter.get(`/`,async(req,res)=>{
    res.send(`Item-Route`)
})

ItemRouter.post("/",async(req,res)=>{
    
    try {
        let newItem=new ItemModel(req.body)
        await newItem.save()
        res.send("item added successfully")
    } catch (error) {
        res.send({err:error.message})
    }
})


module.exports={
    ItemRouter
}
