import mongoose from "mongoose"

const orderItemsSchema = new mongoose.schema(
    {
        product: {
            type: mongoose.schema.Type.ObjectId,
            reference: "product"
        },
        quantity: {
            type: Number,
            required: true,
        }
    }, { timestamps: true })

const orderSchema = new mongoose.schema(
    {
        orderPrice: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.schema.Type.ObjectId,
            reference: "User",
        },
        orderItems: {
            type: [orderItemsSchema],
        },
        address: {
            type: String,
            required: true,
        },
status:{
    type:String,
    enum:["PENDING","CANCELLED","DELIVERED"],
    default:"PANDING",
}

    }, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema);