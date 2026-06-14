import mongoose from 'mongoose';

const categorySchema = new mongoose.model.schema(
  {
    name: {
      type: String,
      required: true,
    }, 
    productImg:{
      type:String
    },
    price:{
      type:Number,
      default:0,
    },
    stock:{
      type:Number,
      default:0,
    },
    category:{
      type:mongoose.schema.Types.ObjectId,
      reference:"category",
      required:true,

    },
    owner:{
      type:mongoose.schema.Type.ObjectId,
      reference:"User",
      
    }

  },
  { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
