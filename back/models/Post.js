const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Esquema para los post 
const postSchema = new Schema(
  {
     author: { type: String, required: true },
     title: { type: String, required: true },
     content: { type: String, required: true },
     createdAt: {
      type: Date,
      default: Date.now, 
  },
     image: { type: String, required: true },
     likes: { type: Number, default: 0 }, //likes en total
     likedBy: { type: [String], default: [] } //funcion que aun no esta implementada
  },
  { timestamps: true } 
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
