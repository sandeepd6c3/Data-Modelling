import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
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
      Reference: 'User',
    },
    subTodos: [
      {
        type: moongoose.Schema.Types.ObjectId,
        Reference: 'subTodo',
      },
    ],
  },
  { timpstamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
