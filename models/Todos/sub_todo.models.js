import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      reference: 'user',
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model('subTodo', subTodoSchema);
