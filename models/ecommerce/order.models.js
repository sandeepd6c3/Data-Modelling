import mongoose from "mongoose"

const orderSchema = new mongoose.schema(
    {
        orderPrice:{
            type:Number,
            required:true,
        },
        customer:{
            type:mongoose.schema.Type.ObjectId,
            reference:"User",
        },
        orderItems:{
            type:[],
            
        }

    },{timestamps:true})

export const Order = mongoose.model("Order",orderSchema);